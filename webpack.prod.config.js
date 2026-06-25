import defaultConfig from "@wordpress/scripts/config/webpack.config.js";
import CopyPlugin from "copy-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ======================================================================
// Detect Gutenberg Block entries from source/gutenberg/Blocks/
// ======================================================================
const blocksDir = path.resolve(__dirname, "source/gutenberg/Blocks");

const blockFolders = fs.readdirSync(blocksDir).filter((folder) => {
    const fullPath = path.join(blocksDir, folder);
    return fs.statSync(fullPath).isDirectory();
});

const blockEntries = blockFolders.reduce((acc, block) => {
    acc[`blocks/${block}/index`] = path.resolve(blocksDir, block, "index.js");
    return acc;
}, {});

const copyBlockPatterns = blockFolders.map((block) => ({
    from: path.resolve(blocksDir, block, "block.json"),
    to: path.join(`blocks/${block}`, "block.json"),
}));

function AddDepsPlugin(extraDeps = [], matchPattern = false) {
    function getAssetFiles(dir) {
        if (!fs.existsSync(dir)) {
            return [];
        }

        return fs.readdirSync(dir).flatMap((file) => {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) return getAssetFiles(fullPath);

            if (matchPattern) {
                return fullPath.match(matchPattern) &&
                    fullPath.endsWith(".asset.php")
                    ? [fullPath]
                    : [];
            }

            return file.endsWith(".asset.php") ? [fullPath] : [];
        });
    }

    return {
        apply(compiler) {
            compiler.hooks.done.tap("CustomDepsPlugin", () => {
                const outputPath = compiler.options.output.path;

                const assetFiles = getAssetFiles(outputPath);
                console.log(
                    "🔧 Checking asset files for dependency updates...",
                    assetFiles,
                );
                assetFiles.forEach((fullPath) => {
                    let content = fs.readFileSync(fullPath, "utf8");
                    let changed = false;

                    const match = content.match(
                        /'dependencies' => array\((.*?)\)/s,
                    );
                    if (match) {
                        let deps = match[1]
                            .split(",")
                            .map((d) => d.trim().replace(/'| /g, ""))
                            .filter(Boolean);

                        // Add extra dependencies if missing
                        extraDeps.forEach((dep) => {
                            if (!deps.includes(dep)) deps.push(dep);
                        });

                        const newDeps = deps.map((d) => `'${d}'`).join(", ");
                        content = content.replace(
                            /'dependencies' => array\((.*?)\)/s,
                            `'dependencies' => array(${newDeps})`,
                        );
                        changed = true;
                    }

                    // Strip the auto-generated 'handle' key — it contains
                    // "undefined-*" when output.filename is a function, and
                    // PHP registers its own handles independently.
                    if (content.includes("'handle'")) {
                        content = content.replace(/, 'handle' => '[^']*'/, "");
                        changed = true;
                    }

                    if (changed) {
                        fs.writeFileSync(fullPath, content, "utf8");
                        console.log(`🔧 Updated asset file: ${fullPath}`);
                    }
                });
            });
        },
    };
}

// ======================================================================
// Plugin: Strip undefined-* handle key from .asset.php files
// ======================================================================
function StripHandlePlugin() {
    function getAssetFiles(dir) {
        if (!fs.existsSync(dir)) return [];
        return fs.readdirSync(dir).flatMap((file) => {
            const fullPath = path.join(dir, file);
            return fs.statSync(fullPath).isDirectory()
                ? getAssetFiles(fullPath)
                : file.endsWith(".asset.php") ? [fullPath] : [];
        });
    }
    return {
        apply(compiler) {
            compiler.hooks.done.tap("StripHandlePlugin", () => {
                const outputPath = compiler.options.output.path;
                getAssetFiles(outputPath).forEach((fullPath) => {
                    let content = fs.readFileSync(fullPath, "utf8");
                    if (content.includes("'handle'")) {
                        content = content.replace(/, 'handle' => '[^']*'/, "");
                        fs.writeFileSync(fullPath, content, "utf8");
                    }
                });
            });
        },
    };
}

// ======================================================================
// Plugin: Prepend semicolon to avoid JS concatenation issues
// ======================================================================
class PrependSemicolonPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync(
            "PrependSemicolonPlugin",
            (compilation, callback) => {
                try {
                    for (const filename in compilation.assets) {
                        if (
                            filename.endsWith(".js") &&
                            !filename.includes("runtime")
                        ) {
                            const asset = compilation.assets[filename];
                            const original = asset.source();

                            // Only prepend if not already starting with semicolon
                            if (!original.trim().startsWith(";")) {
                                const updated = ";" + original;
                                compilation.assets[filename] = {
                                    source: () => updated,
                                    size: () => updated.length,
                                };
                            }
                        }
                    }
                    callback();
                } catch (error) {
                    callback(error);
                }
            },
        );
    }
}

// ======================================================================
// Main Webpack Configuration for regular JS files
// ======================================================================
// Remap font assets from assets/js/fonts/ → assets/fonts/ by overriding
// the generator.filename on the woff/woff2 rule from @wordpress/scripts.
const remappedRules = (defaultConfig.module?.rules || []).map((rule) => {
    if (rule.test?.toString().includes("woff")) {
        return {
            ...rule,
            generator: { ...rule.generator, filename: "../fonts/[name].[hash:8][ext]" },
        };
    }
    return rule;
});

const mainConfig = {
    ...defaultConfig,

    mode: "production",

    devtool: false,

    entry: {
        admin: path.resolve(__dirname, "source/admin/admin.tsx"),
        frontend: path.resolve(__dirname, "source/frontend/frontend.tsx"),
        ...blockEntries,
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],

        alias: {
            "~": path.resolve(__dirname, "source"),
        },
    },

    output: {
        path: path.resolve(__dirname, "assets/js"),
        publicPath: "auto",
        filename: (pathData) => {
            const name = pathData.chunk.name;
            const match = name.match(/^([a-zA-Z0-9_-]+)--(.+)$/);

            if (match) {
                const [, prefix, filename] = match;
                return `${prefix}s/${filename}.js`;
            }

            return `${name}.js`;
        },
        chunkFilename: "chunks/[name].chunk.js",
        clean: true,
    },

    module: {
        rules: remappedRules,
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        join_vars: false,
                    },
                    format: {
                        comments: (node, comment) => {
                            return comment.value.includes("fs_premium_only");
                        },
                    },
                },
                extractComments: false,
            }),
        ],
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    priority: -10,
                    enforce: true,
                },
                shared: {
                    name: "shared",
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        runtimeChunk: "single",
    },

    plugins: [
        ...(defaultConfig.plugins || []),
        new PrependSemicolonPlugin(),
        StripHandlePlugin(),
        new AddDepsPlugin(
            ["pninja-shared"],
            /blocks\/pninja-media-gallery\//,
        ),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "source/assets/images"),
                    to: path.resolve(__dirname, "assets/images"),
					noErrorOnMissing: true,
                },
                {
                    from: path.resolve(__dirname, "source/assets/fonts/LICENSE-Poppins.txt"),
                    to: path.resolve(__dirname, "assets/fonts/LICENSE-Poppins.txt"),
					noErrorOnMissing: true,
                },
                {
                    from: path.resolve(__dirname, "source/assets/plugins"),
                    to: path.resolve(__dirname, "assets/plugins"),
					noErrorOnMissing: true,
                },
                {
                    from: path.resolve(__dirname, "source/assets/presets"),
                    to: path.resolve(__dirname, "assets/presets"),
					noErrorOnMissing: true,
                },
                ...copyBlockPatterns,
            ],
            options: {
                concurrency: 100,
            },
        }),
    ],
};

export default [mainConfig];

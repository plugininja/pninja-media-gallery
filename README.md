# Pninja Media Gallery

A WordPress plugin for beautiful, responsive image galleries with Grid, Masonry, Lightbox, and Album support.

## Requirements

| Tool      | Version |
| --------- | ------- |
| PHP       | 7.4+    |
| WordPress | 6.2+    |
| Node.js   | 18+     |
| npm       | 9+      |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/plugininja/pninja-media-gallery.git
cd pninja-media-gallery
```

### 2. Install JavaScript dependencies

```bash
npm install
```

### 3. Place inside WordPress

Symlink or copy the plugin folder into your WordPress installation:

```bash
ln -s $(pwd) /path/to/wordpress/wp-content/plugins/pninja-media-gallery
```

Then activate it from **WP Admin → Plugins**.

---

## Development

### Start the dev server (webpack watch)

```bash
npm run dev-admin
```

This watches `source/` and rebuilds JS/CSS into `assets/js/` on every change. The page auto-reloads if you have a browser extension like LiveReload.

### Regenerate design tokens

```bash
npm run build:tokens
```

Reads token definitions and writes `tokens/index.json`. Run this before `dev-admin` if you changed any token source files.

### Full dev startup (tokens → watch)

```bash
npm start
```

Equivalent to `build:tokens` followed by `dev-admin`.

---

## Production Build

```bash
npm run build
```

Runs in order:

1. `build:tokens` — regenerate design tokens
2. `webpack --config webpack.prod.config.js` — minified production bundle into `assets/js/`
3. `clean-maps` — removes all `.map` and `.DS_Store` files

### Build the distributable zip

```bash
npm run build:zip
```

Produces two archives in the project root:

-   `pninja-media-gallery.zip` — full plugin (WordPress.org submission)
-   `pninja-media-gallery-free.zip` — free tier only (premium code stripped)

---

## Linting

```bash
# Check for issues
npm run lint

# Auto-fix fixable issues
npm run lint:fix
```

ESLint runs against all `.js`, `.jsx`, `.ts`, `.tsx` files under `source/`.

---

## PHP Tests

### Start wp-env and run tests in one command

```bash
npm run test:php:start
```

### If wp-env is already running

```bash
npm run test:php
```

Tests use PHPUnit inside the `@wordpress/env` Docker environment.

---

## i18n — Generate the `.pot` file

```bash
npm run make-pot
```

Writes `languages/pninja-media-gallery.pot` with all translatable strings extracted from PHP and JS source files.

---

## Project Structure

```
pninja-media-gallery/
├── core/
│   ├── config.php          # All PNINJA_* constants
│   └── functions.php       # Global helper functions (pninja_*)
├── includes/
│   ├── class-autoloader.php
│   ├── class-plugin.php    # Boot sequence, shortcode registration
│   ├── class-enqueue.php   # Script/style registration
│   ├── admin/              # Admin menu page
│   ├── api/                # REST controllers
│   ├── gutenberg/          # Block registration
│   ├── lifecycle/          # Activation / deactivation
│   └── traits/             # Singleton trait
├── models/                 # DB model classes (pninja_galleries, pninja_images)
├── source/                 # JS/TS/SCSS source
│   ├── admin/              # React SPA entry point
│   ├── frontend/           # Frontend gallery widget
│   ├── gutenberg/          # Gutenberg block source
│   ├── store/              # Redux Toolkit + RTK Query
│   ├── components/         # UI component hierarchy
│   └── assets/sass/        # SCSS stylesheets
├── assets/                 # Built output (gitignored)
├── languages/              # .pot / .po translation files
├── tokens/                 # Design token JSON
├── dist-free/              # Free-tier distribution copy
├── webpack.dev.config.js
├── webpack.prod.config.js
├── package.json
└── pninja-media-gallery.php   # Plugin entry point
```

---

## Architecture Notes

-   **PHP namespace:** `Pninja\` (PSR-4, maps to `includes/` and `models/`)
-   **PHP prefix:** `pninja_` for functions/options/hooks, `PNINJA_` for constants
-   **REST namespace:** `pninja-media-gallery/v1`
-   **Shortcode:** `[pninja_gallery id="1"]`
-   **JS global (admin):** `pninjaAdmin` — localized by `Enqueue::admin_enqueue()`
-   **DB tables:** `wp_pninja_galleries`, `wp_pninja_images`
-   **Settings option:** `pninja_settings`

### Boot sequence

```
pninja-media-gallery.php
  → core/config.php          (constants)
  → class-autoloader.php     (PSR-4 autoloader)
  → plugins_loaded action
      → Plugin::boot()
          → Activation::maybe_upgrade()   (dbDelta on version bump)
          → ApiRegistry::init()           (REST routes)
          → Enqueue::init()               (scripts & styles)
          → Blocks::init()                (Gutenberg block)
          → Admin::init()                 (admin menu)
          → add_shortcode('pninja_gallery', ...)
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes and run `npm run lint` and `npm run test:php`
4. Commit and open a pull request

---

## License

[GPL-2.0-or-later](https://www.gnu.org/licenses/gpl-2.0.html)

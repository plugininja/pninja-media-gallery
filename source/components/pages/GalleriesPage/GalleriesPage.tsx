import { useState } from "@wordpress/element";
import { useNavigate } from "react-router-dom";
import { __ } from "@wordpress/i18n";
import {
    useGetGalleriesQuery,
    useDeleteGalleryMutation,
    useCreateGalleryMutation,
    Gallery,
} from "~/store/api/galleryApi";
import EmptyState from "~/components/molecules/EmptyState";
import InlineStack from "~/components/molecules/InlineStack";
import BlockStack from "~/components/molecules/BlockStack";
import GridStack from "~/components/molecules/GridStack";
import SelectBox from "~/components/molecules/SelectBox";
import Dropdown from "~/components/molecules/Dropdown";
import Card from "~/components/molecules/Card";
import Loading from "~/components/atoms/Loading";
import IconButton from "~/components/molecules/IconButton";
import Button from "~/components/atoms/Button";
import Status from "~/components/atoms/Status";
import Input from "~/components/atoms/Input";
import Icon from "~/components/atoms/Icon";
import Text from "~/components/atoms/Text";

// ─── helpers ─────────────────────────────────────────────────────────────────

const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const LAYOUT_LABELS: Record<string, string> = {
    grid: __("Grid", "pninja-media-gallery"),
    masonry: __("Masonry", "pninja-media-gallery"),
    justified: __("Justified", "pninja-media-gallery"),
    album: __("Album", "pninja-media-gallery"),
};

// SelectBox skips val=="" internally, so never use empty-value options.
// Use placeholder for the "all" state and value=[] when nothing is selected.
const STATUS_OPTIONS = [
    { value: "publish", name: __("Published", "pninja-media-gallery") },
    { value: "draft", name: __("Draft", "pninja-media-gallery") },
];

const LAYOUT_OPTIONS = [
    { value: "grid", name: __("Grid", "pninja-media-gallery") },
    { value: "masonry", name: __("Masonry", "pninja-media-gallery") },
    { value: "justified", name: __("Justified", "pninja-media-gallery") },
    { value: "album", name: __("Album", "pninja-media-gallery") },
];

// ─── gallery card ─────────────────────────────────────────────────────────────

const GalleryCard = ({ gallery }: { gallery: Gallery }) => {
    const navigate = useNavigate();
    const [deleteGallery] = useDeleteGalleryMutation();
    const [createGallery] = useCreateGalleryMutation();
    const [copied, setCopied] = useState(false);

    const count = gallery.image_count ?? 0;
    const shortcode = `[pninja_gallery id="${gallery.id}"]`;

    const copyShortcode = () => {
        navigator.clipboard?.writeText(shortcode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDelete = async () => {
        if (
            window.confirm(
                __(
                    "Delete this gallery? This cannot be undone.",
                    "pninja-media-gallery",
                ),
            )
        ) {
            await deleteGallery(gallery.id);
        }
    };

    const handleDuplicate = async () => {
        const {
            title,
            layout,
            columns,
            gap,
            border_radius,
            shadow,
            hover_effect,
            overlay_style,
            lightbox,
            lightbox_transition,
            lightbox_captions,
            lightbox_nav,
            lazy_loading,
            image_quality,
            tablet_columns,
            mobile_columns,
        } = gallery;
        await createGallery({
            title: title + " (Copy)",
            layout,
            columns,
            status: "draft",
            gap,
            border_radius,
            shadow,
            hover_effect,
            overlay_style,
            lightbox,
            lightbox_transition,
            lightbox_captions,
            lightbox_nav,
            lazy_loading,
            image_quality,
            tablet_columns,
            mobile_columns,
        });
    };

    return (
        <Card
            padding={0}
            rounded="lg"
            style={{ cursor: "pointer", overflow: "hidden", height: "100%" }}
            onClick={() => navigate("/gallery/" + gallery.id)}
        >
            {/* ── Cover ───────────────────────────────────────────────── */}
            <div
                style={{
                    position: "relative",
                    aspectRatio: "16/9",
                    background: "linear-gradient(135deg,#c8d8ff,#eff4ff)",
                    overflow: "hidden",
                }}
            >
                {gallery.preview_images && gallery.preview_images.length > 0 ? (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gridTemplateRows: "repeat(2, 1fr)",
                            width: "100%",
                            height: "100%",
                            gap: 2,
                        }}
                    >
                        {gallery.preview_images.slice(0, 4).map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <BlockStack
                        align="center"
                        inlineAlign="center"
                        style={{ height: "100%" }}
                    >
                        <Icon
                            name="photo_library"
                            color="gray-300"
                            fontSize="3xl"
                        />
                    </BlockStack>
                )}

                {/* Badge + Dropdown menu — stop propagation from card click */}
                <div
                    style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        right: 10,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <InlineStack align="between" blockAlign="center">
                        <Status
                            text={
                                gallery.status === "publish"
                                    ? __("Published", "pninja-media-gallery")
                                    : __("Draft", "pninja-media-gallery")
                            }
                            color={
                                gallery.status === "publish"
                                    ? "green"
                                    : "orange"
                            }
                        />

                        <Dropdown>
                            <Dropdown.Trigger>
                                <IconButton
                                    name="more_vert"
                                    size="small"
                                    variant="default"
                                    color="gray-700"
                                    border
                                    borderColor="white"
                                    style={{
                                        background: "rgba(255,255,255,.85)",
                                        backdropFilter: "blur(6px)",
                                    }}
                                    ariaLabel={__(
                                        "Gallery actions",
                                        "pninja-media-gallery",
                                    )}
                                />
                            </Dropdown.Trigger>

                            <Dropdown.Content
                                rounded="md"
                                shadow
                                style={{ minWidth: 170, padding: 6 }}
                            >
                                <Dropdown.MenuItem
                                    onClick={() =>
                                        navigate("/gallery/" + gallery.id)
                                    }
                                >
                                    <InlineStack gap={8} blockAlign="center">
                                        <Icon
                                            name="edit"
                                            color="gray-600"
                                            fontSize="sm"
                                        />
                                        <Text size="sm">
                                            {__("Edit", "pninja-media-gallery")}
                                        </Text>
                                    </InlineStack>
                                </Dropdown.MenuItem>

                                <Dropdown.MenuItem onClick={copyShortcode}>
                                    <InlineStack gap={8} blockAlign="center">
                                        <Icon
                                            name={
                                                copied
                                                    ? "check"
                                                    : "content_copy"
                                            }
                                            color={
                                                copied ? "success" : "gray-600"
                                            }
                                            fontSize="sm"
                                        />
                                        <Text
                                            size="sm"
                                            color={copied ? "success" : undefined}
                                        >
                                            {copied
                                                ? __("Copied!", "pninja-media-gallery")
                                                : __(
                                                      "Copy Shortcode",
                                                      "pninja-media-gallery",
                                                  )}
                                        </Text>
                                    </InlineStack>
                                </Dropdown.MenuItem>

                                <Dropdown.MenuItem onClick={handleDuplicate}>
                                    <InlineStack gap={8} blockAlign="center">
                                        <Icon
                                            name="file_copy"
                                            color="gray-600"
                                            fontSize="sm"
                                        />
                                        <Text size="sm">
                                            {__("Duplicate", "pninja-media-gallery")}
                                        </Text>
                                    </InlineStack>
                                </Dropdown.MenuItem>

                                <Dropdown.MenuSeparator />

                                <Dropdown.MenuItem onClick={handleDelete}>
                                    <InlineStack gap={8} blockAlign="center">
                                        <Icon
                                            name="delete"
                                            color="danger"
                                            fontSize="sm"
                                        />
                                        <Text size="sm" color="danger">
                                            {__("Delete", "pninja-media-gallery")}
                                        </Text>
                                    </InlineStack>
                                </Dropdown.MenuItem>
                            </Dropdown.Content>
                        </Dropdown>
                    </InlineStack>
                </div>
            </div>

            {/* ── Body ────────────────────────────────────────────────── */}
            <BlockStack gap={8} style={{ padding: "12px 14px 14px" }}>
                <Text weight="semibold" size="sm">
                    {gallery.title}
                </Text>

                <InlineStack gap={6} blockAlign="center">
                    <Icon name="grid_view" color="gray-400" fontSize="sm" />
                    <Text size="xs" color="gray-500">
                        {LAYOUT_LABELS[gallery.layout] || gallery.layout}
                        {"  ·  "}
                        {count} {__("images", "pninja-media-gallery")}
                    </Text>
                </InlineStack>

                <InlineStack align="between" blockAlign="center">
                    <Text
                        size="xs"
                        color={copied ? "success" : "gray-400"}
                        style={{
                            fontFamily: "monospace",
                            cursor: "pointer",
                            maxWidth: "65%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            transition: "color .2s",
                        }}
                        title={__("Click to copy shortcode", "pninja-media-gallery")}
                        onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            copyShortcode();
                        }}
                    >
                        {copied ? __("Copied!", "pninja-media-gallery") : shortcode}
                    </Text>
                    <Text size="xs" color="gray-400">
                        {formatDate(gallery.created_at)}
                    </Text>
                </InlineStack>
            </BlockStack>
        </Card>
    );
};

// ─── page ─────────────────────────────────────────────────────────────────────

const GalleriesPage = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [layoutFilter, setLayoutFilter] = useState("");

    const { data, isLoading } = useGetGalleriesQuery({ per_page: 100 });
    const galleries: Gallery[] = data?.data?.items ?? [];

    const filtered = galleries.filter((g) => {
        if (search && !g.title.toLowerCase().includes(search.toLowerCase()))
            return false;
        if (statusFilter && g.status !== statusFilter) return false;
        if (layoutFilter && g.layout !== layoutFilter) return false;
        return true;
    });

    return (
        <BlockStack gap={24}>
            {/* ── Header ──────────────────────────────────────────────── */}
            <InlineStack align="between" blockAlign="center" gap={12}>
                <BlockStack gap={4}>
                    <Text as="h1" size="xl" weight="semibold">
                        {__("Galleries", "pninja-media-gallery")}
                    </Text>
                    <Text size="sm" color="gray-500">
                        {__(
                            "Manage all your image galleries — everything's free, always.",
                            "pninja-media-gallery",
                        )}
                    </Text>
                </BlockStack>
                <Button
                    variant="primary"
                    startIcon="add"
                    onClick={() => navigate("/gallery/new")}
                >
                    {__("New Gallery", "pninja-media-gallery")}
                </Button>
            </InlineStack>

            {/* ── Toolbar ──────────────────────────────────────────────── */}
            <InlineStack gap={10} wrap={true}>
                <div style={{ flex: "1 1 220px", minWidth: 0 }}>
                    <Input
                        value={search}
                        placeholder={__("Search galleries…", "pninja-media-gallery")}
                        color="primary-light"
                        suffix={<Icon name="search" color="gray-500" />}
                        onChange={(v: string | number) => setSearch(String(v))}
                    />
                </div>

                {/* value=[] when no filter → shows placeholder; SelectBox forbids val="" */}

                <SelectBox
                    options={STATUS_OPTIONS}
                    value={statusFilter ? [statusFilter] : []}
                    placeholder={__("All Status", "pninja-media-gallery")}
                    onChange={(vals: string[]) =>
                        setStatusFilter(vals[0] ?? "")
                    }
                    size="medium"
                />

                <SelectBox
                    options={LAYOUT_OPTIONS}
                    value={layoutFilter ? [layoutFilter] : []}
                    placeholder={__("All Layouts", "pninja-media-gallery")}
                    onChange={(vals: string[]) =>
                        setLayoutFilter(vals[0] ?? "")
                    }
                    size="medium"
                />
            </InlineStack>

            {/* ── Content ──────────────────────────────────────────────── */}
            {isLoading && (
                <BlockStack
                    align="center"
                    inlineAlign="center"
                    gap={12}
                    style={{ padding: "80px 0" }}
                >
                    <Loading />
                    <Text size="sm" color="gray-500">
                        {__("Loading…", "pninja-media-gallery")}
                    </Text>
                </BlockStack>
            )}

            {!isLoading && filtered.length === 0 && (
                <EmptyState
                    icon={
                        <Icon
                            name="photo_library"
                            color="gray-300"
                            fontSize="3xl"
                        />
                    }
                    title={
                        galleries.length === 0
                            ? __("No galleries yet", "pninja-media-gallery")
                            : __(
                                  "No galleries match your filters",
                                  "pninja-media-gallery",
                              )
                    }
                    description={
                        galleries.length === 0
                            ? __(
                                  "Create your first gallery to get started.",
                                  "pninja-media-gallery",
                              )
                            : __(
                                  "Try adjusting your search or filters.",
                                  "pninja-media-gallery",
                              )
                    }
                    style={{ padding: "80px 0" }}
                >
                    {galleries.length === 0 && (
                        <Button
                            variant="primary"
                            startIcon="add"
                            onClick={() => navigate("/gallery/new")}
                        >
                            {__("New Gallery", "pninja-media-gallery")}
                        </Button>
                    )}
                </EmptyState>
            )}

            {!isLoading && filtered.length > 0 && (
                <GridStack columns="auto-fill" min="260px" max="1fr" gap={18}>
                    {filtered.map((g) => (
                        <GalleryCard key={g.id} gallery={g} />
                    ))}
                </GridStack>
            )}
        </BlockStack>
    );
};

export default GalleriesPage;

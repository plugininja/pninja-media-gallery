=== Ninja Gallery ===
Contributors:      plugininja, abdullaharham
Tags:              gallery, photo gallery, responsive gallery, masonry, lightbox
Requires at least: 6.2
Tested up to:      7.0
Requires PHP:      7.4
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Beautiful, responsive WordPress galleries with Grid, Masonry, Lightbox & Album support.

== Description ==

**Ninja Gallery** gives you total control over your image galleries. Create stunning responsive
galleries in seconds and embed them anywhere with a simple shortcode.

= Key Features =

* **Grid Layout** — clean, uniform image grid with configurable columns (1–6)
* **Masonry Layout** — Pinterest-style flowing layout that fills empty space naturally
* **Lightbox** — click any image to view it full-screen with keyboard navigation
* **Albums / Gallery Groups** — organise images into named galleries
* **React SPA Admin** — fast, modern admin UI with instant feedback
* **REST API** — full CRUD API at `ninja-gallery/v1` for headless use
* **Developer-friendly** — action/filter hooks throughout, PSR-4 autoloading, RTK Query

= Shortcode =

```
[ninja_gallery id="1"]
[ninja_gallery id="1" layout="masonry" columns="4" lightbox="true"]
```

= Shortcode Parameters =

* `id`       — (required) Gallery ID
* `layout`   — `grid` (default) or `masonry`
* `columns`  — Number of columns, 1–6 (default: 3)
* `lightbox` — `true` or `false` (default: `true`)

== Installation ==

1. Upload the `ninja-gallery` folder to `/wp-content/plugins/`.
2. Activate the plugin through the **Plugins** menu in WordPress.
3. Go to **Ninja Gallery → Add New** to create your first gallery.
4. Copy the shortcode shown in the gallery editor and paste it into any post or page.

== Frequently Asked Questions ==

= How do I embed a gallery in a post? =

Create a gallery in **Ninja Gallery → Add New**, note the gallery ID, then add
`[ninja_gallery id="YOUR_ID"]` to any post, page, or widget.

= Can I use the Media Library to add images? =

Yes. On the gallery edit screen, click **Add Images** to open the standard
WordPress Media Library uploader.

== Contribute ==

Ninja Gallery is an open-source project. You can view the full unminified source and contribute on GitHub:
https://github.com/plugininja/ninja-gallery

== Screenshots ==

== Changelog ==

= 1.0.0 =
* Initial release — Grid, Masonry, Lightbox, Album support

== Upgrade Notice ==

= 1.0.0 =
First stable release.

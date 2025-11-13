# Pages

This folder contains React components that mirror the Figma-extracted HTML pages.

Rules:
- Keep the DOM structure, classes, and data attributes identical to the extracted HTML to maintain pixel-perfect styling.
- Do not modify assets in /assets. We import CSS via <link> and load JS via dynamic <script> injection on mount.
- Image sources should use exact `/assets/figmaimages/...` paths as provided by the generated HTML.

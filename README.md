# Courseweb UI & UX Enhancer

A lightweight, client-side browser extension built using Manifest V3 to optimize the UI/UX layout of SLIIT Courseweb notice pages. It transforms cluttered text walls, unstyled headers, and scattered PDF download links into a clean, modern, and highly readable dashboard interface.

## Features

- Notice Container Cards: Replaces raw, unspaced notice elements with clean, modern cards utilizing clear boundaries and subtle depth shadows to improve readability.
- Typographic Hierarchy Restoration: Detects poorly formatted inline title elements and elevates them into high-contrast semantic headers with custom layouts.
- Modern Resource Grid: Automatically identifies standard Moodle PDF/document download wrappers (.modtype_resource) and transforms them into interactive, hover-responsive resource cards with clear accent borders.
- Performance-Focused: Executes entirely on the client side without tracking or backend overhead, utilizing native modern CSS variables for instant injection.

## Tech Stack

- JavaScript (ES6+) - Dynamic DOM queries and structural modifications.
- CSS3 - Layout overhauls, typography spacing, and smooth hover state animations.
- Web Extensions API (Manifest V3) - Lightweight browser injection layer.

## Local Installation & Setup

1. Clone the repository
```bash
https://github.com/sahan200272/courseweb_enhancer.git
```

2. Open Google Chrome (or any Chromium browser like Edge/Brave) and navigate to 
```bash 
chrome://extensions/ 
```

3. Toggle the Developer mode switch in the top-right corner to ON.

4. Click the Load unpacked button in the top-left corner.

5. Select the root folder containing the manifest.json file.

6. Navigate to your Courseweb page and refresh (Ctrl + F5) to see the modern UI instantly.
# Confetti Celebration Bookmarklet 🎉

A fun bookmarklet that adds a colorful confetti animation to any webpage. Created for Hack Club's "Hacklet" YSWS challenge.

## How to Use

1. Serve this project via an HTTP server (required for bookmarklet loading):
   ```bash
   cd /home/yash/Projects/bookmarklet
   python3 -m http.server 8000
   ```
2. Open your browser and navigate to `http://localhost:8000/index.html`
3. Drag the bookmarklet links to your bookmarks bar
4. Click them on any website to activate

## Running Locally

Because modern browsers block `fetch` on `file://` URLs, you must run a local web server. You can use:

- Python 3: `python3 -m http.server 8000`
- Node.js: `npx http-server` or `npx serve`

---

Created with ❤️ by [Your Name]# bookmarklet

# J & S Handmade Flowers

A responsive static storefront built with HTML, CSS, and vanilla JavaScript.

## Run locally
Open `index.html` in your browser, or use the VS Code Live Server extension.

## Publish with GitHub Pages
1. Upload the project files to the root of your GitHub repository.
2. Open repository Settings → Pages.
3. Under Build and deployment, choose Deploy from a branch.
4. Select `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish the site.

## Adding or editing products
Open `js/products.js`. Edit the name, price, category, and image of each product. Put new photos in the `images/` folder. Use `price: 0` to show "Ask for price".

## Before publishing
- Replace the sample bouquet photos with your own approved product photos if available.
- Enter your real prices in `js/products.js` (all set to 0 / "Ask for price" for now).
- Add your Messenger link in `js/products.js` (`messengerUrl`).
- Update the Facebook URL and add verified contact details in `contact.html`.
- The order form currently prepares a copyable order summary in the browser. It does not send or store orders automatically. Connect a form service or backend to receive orders online.
- Cart contents use browser localStorage and remain on the same device/browser.

## Files
- `index.html`, `shop.html`, `about.html`, `cart.html`, `checkout.html`, `contact.html`
- `css/style.css`
- `js/script.js`

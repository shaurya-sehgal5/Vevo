# VAVRA — Men’s Wear Storefront

A responsive, dark editorial fashion storefront built with React + Vite. Brand styling uses **VAVRA**, a coined five-letter brand name inspired by Vavora Mart. It is a creative suggestion, not a verified trademark or domain availability result.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite. Build for production:
```bash
npm run build
npm run preview
```

## Included
- Responsive desktop and mobile home page, category browsing, product cards, search
- 62 menswear products, wishlist UI, cart quantity controls, shipping progress and price summary
- Multi-step checkout (delivery details, payment selection, review) and confirmation screen
- Terms & Conditions, Privacy Policy, and Returns & Refunds policy pages
- Footer with store address and contact details

## Store address from the provided storefront photo
Second Floor, SF-149, Gaur City Center (GCC), Sector 4, Gautam Budh Nagar, Greater Noida, Uttar Pradesh 201318, India  
Phone shown in the photo: +91 97623 87360

## Important before production
This is a frontend demo. Checkout does not charge a payment method, place a real order, send emails, or store customer data. Connect a backend, verified payment gateway, inventory, shipping provider, and privacy-compliant data handling before launch. Review the starter policies with your actual business practices and applicable law. Product illustrations are bundled locally in `public/products`, so catalog images do not depend on third-party hotlinks. The support email `support@vavra.in` is a suggested business contact; configure an inbox and verify domain ownership before launch.

## Structure
- `src/main.jsx` — storefront, product data, cart, checkout, policy pages
- `src/style.css` — responsive dark theme and interaction styles

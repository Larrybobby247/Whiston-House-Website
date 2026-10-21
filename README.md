# Frank J. Whiston House — Private Household Profile
React + Vite + lucide-react. Styling is hand-written CSS (`src/index.css`) instead of Tailwind to keep dependencies minimal.

## Run
`npm install && npm run dev` · build: `npm run build`

## Before publishing
1. **Contact form**: copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` (e.g. Formspree). Until then the form shows an honest "not connected" error — it never fakes success. Add server-side validation/CAPTCHA (e.g. Turnstile) at the provider.
2. **Photos**: gallery/hero show illustrative SVG placeholders. Add authorised images to `public/images/` and set `src` in `src/data/content.js`. Never present stock/AI images as the family.
3. **Contact details** (`contact` in `content.js`) are placeholders — add only independently verified details.
4. **Privacy/Terms** text in the footer is a stub: replace with reviewed legal text. Verify all employment terms before publishing.
5. Add canonical URL, Open Graph image and sitemap once the domain is known.

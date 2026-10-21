# NΞBB.dev — Portfolio (React + Tailwind)

Converted from the original static HTML/CSS/JS site. Every section, animation,
and interaction from the original has been preserved — nothing was removed.

## What changed vs. the original static site

- **Structure**: `index.html` was split into React components under
  `src/components/` (Chrome = loader/cursor/background/topbar/dock, Hero,
  About, Skills, Services, Work, Modal, Journey, Contact, Footer).
- **Behavior**: `script.js` + `main.js` were merged into
  `src/lib/siteEffects.js`, exported as `initSite()`, and run once from a
  `useEffect` in `src/App.jsx` after React mounts — same DOM ids, same
  GSAP/IntersectionObserver logic, same everything.
- **Styling**: `style.css`, `animations.css`, and `responsive.css` are
  copied over unchanged into `src/styles/` and imported globally. Tailwind
  is installed and available for any new markup you add (`tailwind.config.js`
  has Preflight disabled so Tailwind's reset doesn't fight with the
  original design's own reset).
- **Contact form — now actually sends email**: previously the form posted to
  a local Express backend that didn't ship with the site. It now sends real
  email via [EmailJS](https://www.emailjs.com) directly from the browser —
  no backend needed. Visitors can type **any email address of their own**
  in the Email field, and that becomes the Reply-To on the email you
  receive, so hitting "Reply" goes straight back to them. If EmailJS isn't
  configured yet (or a send fails), it automatically falls back to opening
  the visitor's own mail app via `mailto:`.
- **One bug fix**: the original footer HTML had an unclosed `<div class="wrap">`
  (browsers silently tolerated it; JSX requires balanced tags). Fixed with
  no visual change.

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL. `npm run build` produces a production build in
`dist/`.

## Making the contact form send real email

1. Create a free account at https://www.emailjs.com
2. **Email Services** → Add New Service (Gmail, Outlook, etc.) → copy the
   **Service ID**.
3. **Email Templates** → Create New Template using these variable names
   (they already match the form's field names):
   - `{{from_name}}` — visitor's name
   - `{{reply_to}}` — the email address the visitor typed in (set this as
     the template's "Reply To" in EmailJS so your replies go straight to
     whatever email they used)
   - `{{subject}}`
   - `{{message}}`

   Copy the **Template ID**.
4. **Account → API Keys** → copy your **Public Key**.
5. Open `src/emailConfig.js` and paste your three values in:

   ```js
   export const EMAILJS_SERVICE_ID = 'service_xxxxxxx';
   export const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';
   export const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx';
   ```

That's it — the form will send real email on submit. Until you fill these
in, submitting the form opens the visitor's own email app instead (same
safety net the original site had).

## Replacing placeholder assets

Same as the original: `1.png`, `ben.jpg`, and `ct.jpg` are in `public/` and
referenced directly. Any `assets/images/...` paths that don't exist yet
(gallery slides 2–3, mini-project thumbnails, modal gallery, CV PDF) are
untouched placeholders exactly as they were in the original — drop your own
files into a `public/assets/...` folder matching those paths whenever you're
ready.

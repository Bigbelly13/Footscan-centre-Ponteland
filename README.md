# Footscan Centre Ponteland — Website

A static, responsive website for a foot-scanning and podiatry clinic in Ponteland, Newcastle upon Tyne. Built with plain HTML/CSS/JavaScript — no build step or framework required, so it can be deployed anywhere (GitHub Pages, Netlify, Vercel, or any static web host).

## Pages

- `index.html` — Home page with hero, services overview, process, testimonials
- `services.html` — Full service descriptions and pricing table
- `about.html` — Clinic story, values, and team
- `contact.html` — Contact details, opening hours, map, and contact form
- `book-appointment.html` — Appointment request form and booking FAQ

## Structure

```
├── index.html
├── services.html
├── about.html
├── contact.html
├── book-appointment.html
├── css/style.css
├── js/script.js
└── images/            (empty — add real photos here)
```

## Footscan &amp; Orthotics booking (Momentum Sports Injury Clinic)

Footscan and Custom Orthotics appointments are delivered in partnership with **Momentum Sports Injury Clinic** (momentumsic.com), so those two services link out to Momentum's real booking system instead of the local placeholder form:

- Booking: `https://momentumsic.com/book-online/`
- Footscan/Orthotics service info: `https://momentumsic.com/services/footscan-and-orthotics/`
- "What is a Footscan?": `https://momentumsic.com/what-is-the-footscan-assessment/`

These appear on `index.html` (service card notes), `services.html` (`#scanning` and `#orthotics` sections, plus the pricing table), and `book-appointment.html` (partner callout above the local form). The local booking form itself was trimmed to only the in-house services (sports assessment, biomechanical assessment, diabetic foot care, general podiatry) since Momentum's own system handles Footscan/Orthotics bookings. If Momentum restructures their URLs, double-check these links still resolve.

## ⚠️ Before publishing — replace all placeholder content

This is a demo build. Every page includes a yellow banner reminding visitors that content is a placeholder — **remove that banner once real content is in place**. Update the following before going live:

- **Business details**: address (`12 High Street, Ponteland...`), phone number (`01661 000 000`), email address, and opening hours — these appear in every page footer, the header, and on `contact.html`.
- **Team bios** on `about.html` — currently fictional placeholder names/photos.
- **Pricing** on `services.html` — currently illustrative figures.
- **Testimonials** on `index.html` — currently fictional placeholder quotes.
- **Map embed** on `contact.html` — currently a generic OpenStreetMap view of Ponteland; replace with your exact location (or swap for a Google Maps embed).
- **Social links** in the footer — currently placeholder `#` links.
- **Images** — the site currently uses simple inline SVG illustrations/icons instead of photos. Add real clinic/team photos to `images/` and reference them in the HTML.
- **Forms** — the contact and booking forms are front-end only (they validate and show a success message but don't send anywhere). Connect them to a real backend such as [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), or a booking system API.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Any static host works. For GitHub Pages: push this repository, then enable Pages for the branch/folder in the repository settings.

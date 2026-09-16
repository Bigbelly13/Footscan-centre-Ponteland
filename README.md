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

## Footscan, Orthotics &amp; Biomechanical Assessment booking (Momentum Sports Injury Clinic)

These three services are delivered in partnership with **Momentum Sports Injury Clinic** (momentumsic.com) and are each booked — and priced — separately:

- **Footscan Assessment** — £90 (45 min)
- **Phits Orthotics** — £240 per pair
- **Biomechanical Assessment** — £80 (60 min)

They link out to Momentum's real booking system instead of the local placeholder form:

- Booking: `https://momentumsic.com/book-online/`
- Footscan/Orthotics service info: `https://momentumsic.com/services/footscan-and-orthotics/`
- "What is a Footscan?": `https://momentumsic.com/what-is-the-footscan-assessment/`

These appear on `index.html` (service card notes), `services.html` (`#scanning`, `#orthotics` and `#biomechanics` sections, plus the pricing table), and `book-appointment.html` (partner callout above the local form). The local booking form itself was trimmed to only the remaining in-house services (sports assessment, diabetic foot care, general podiatry) since Momentum's own system handles these three bookings. If Momentum restructures their URLs, double-check these links still resolve.

### Contact details now use Momentum's real Ponteland site

The header, footer, and `contact.html` now show Momentum Sports Injury Clinic's actual Ponteland contact details (sourced from search-engine snippets, since direct access to momentumsic.com is blocked in the environment this site was built in — worth double-checking against the live site or Momentum directly):

- **Address:** Unit 4, The Green House, Meadowfield Industrial Estate, Ponteland, Newcastle upon Tyne, NE20 9SD
- **Phone:** 0191 645 2535
- **Email:** info@momentumsic.com
- **Opening hours:** Mon 7am–8pm, Tue 8am–8pm, Wed 8am–4pm, Thu 7am–8pm, Fri 8am–4pm, Sat/Sun closed
- **Map:** `contact.html`'s embed points at approximate coordinates for Meadowfield Industrial Estate (55.0518, -1.7500) — not verified against the exact building.

### Real technology content (footscan® and Phits)

The Footscan and Orthotics sections use accurate, sourced technical detail about the actual products/brands rather than generic marketing copy:

- **footscan®** — the pressure-plate gait-analysis system (developed by RSscan, now part of Materialise). Specs cited (up to 48,384 sensors, up to 500 scans/sec, dynamic — not just static — pressure mapping) come from Materialise's own technical documentation and peer-reviewed reliability studies.
- **Phits** — the 3D-printed custom orthotic insole product manufactured in the UK by **Gait & Motion Technology Ltd** (Bury St Edmunds, Suffolk), designed from footscan® gait data. Facts cited (Bluesint PA12 material from 100% recycled stock, 100% green-energy manufacturing, 0.1mm accuracy, less than half the weight of a traditional orthotic, D3O® impact protection) come from Gait & Motion Technology Ltd's own product page: `https://www.gaitandmotion.co.uk/phits3dprint`.

These are sourced from search-engine snippets of the manufacturer's own pages, since direct fetch of `gaitandmotion.co.uk` and `materialise.com` is blocked in this build environment — worth verifying the exact wording/claims against their live pages before publishing, and confirming Momentum's Ponteland clinic actually uses footscan®/Phits (rather than a different pressure-plate or orthotics system) if you haven't already.

### Team bios (Carl Bell and Kate Disley)

`about.html`'s team section now shows two real Momentum Sports Injury Clinic practitioners instead of fictional placeholders:

- **Carl Bell** — Physiotherapy Manager, HCPC & CSP registered
- **Kate Disley** — Sport Rehabilitator, BASRaT

Bio text was sourced from search-engine snippets of `momentumsic.com/team/carl-bell/` and `momentumsic.com/team/kate-disley/` (direct fetch blocked, as above) — worth checking the exact current wording, titles and photos against Momentum's live team pages before publishing, and confirming Carl and Kate are the right two to feature for Footscan/Phits/Biomechanical Assessment specifically (their bios reflect their general physio/rehab roles at Momentum, not necessarily a dedicated Footscan/orthotics specialism). Their real photos (`images/carl-bell.png`, `images/kate-disley.png`) were supplied directly and are now in place.

## ⚠️ Before publishing — replace remaining placeholder content

This is a demo build. Every page includes a yellow banner noting what's still placeholder — **remove that banner once real content is in place**. Address/phone/email/hours, Footscan/Orthotics/Biomechanical pricing, and the Carl Bell/Kate Disley bios and photos are already real (see above); the following are still fictional and need updating before going live:

- **Pricing** on `services.html` — currently illustrative figures for the remaining in-house services (sports assessment, diabetic care, general podiatry).
- **Testimonials** on `index.html` — currently fictional placeholder quotes.
- **Map embed** on `contact.html` — approximate coordinates only; verify against the exact building/unit, or swap for a Google Maps embed.
- **Social links** in the footer — currently placeholder `#` links.
- **Images** — team photos for Carl and Kate are real (`images/`); everything else (hero graphic, service icons, clinic exterior) still uses inline SVG illustrations instead of photos.
- **Forms** — the contact and booking forms are front-end only (they validate and show a success message but don't send anywhere). Connect them to a real backend such as [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), or a booking system API.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Any static host works. For GitHub Pages: push this repository, then enable Pages for the branch/folder in the repository settings.

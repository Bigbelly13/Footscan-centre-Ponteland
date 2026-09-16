# Footscan Centre Ponteland — Website

A static, responsive website for a foot-scanning and sports rehabilitation clinic in Ponteland, Newcastle upon Tyne. Built with plain HTML/CSS/JavaScript — no build step or framework required, so it can be deployed anywhere (GitHub Pages, Netlify, Vercel, or any static web host).

## Pages

- `index.html` — Home page with hero, services overview, process, testimonials
- `services.html` — Full service descriptions and pricing table
- `about.html` — Clinic story, values, and team
- `contact.html` — Contact details, opening hours, map, and general enquiry form
- `book-appointment.html` — Embedded Rehab Guru booking calendar and FAQ

## The three services

Footscan Centre Ponteland offers exactly three services, and all three are delivered by **Momentum Sports Injury Clinic** and booked — and priced — separately through Momentum's own booking system, not through this site:

- **Footscan Assessment** — £90 (45 min)
- **Phits Orthotics** — £240 per pair
- **Biomechanical Assessment** — £80 (60 min)

There is no in-house podiatry, chiropody, diabetic foot screening, nail/skin care, or general sports/running assessment — those were removed from an earlier draft once the actual scope was confirmed. If that scope ever expands, add the new service consistently across `index.html` (service card), `services.html` (dedicated section + pricing row), `book-appointment.html` (booking summary), and every page's footer service list.

## Structure

```
├── index.html
├── services.html
├── about.html
├── contact.html
├── book-appointment.html
├── css/style.css
├── js/script.js
└── images/            (hero + team photos already in place; add more real photos as needed)
```

## Booking links (Momentum Sports Injury Clinic)

All three services link out to Momentum's real booking system:

- Booking: `https://momentumsic.com/book-online/`
- Footscan/Orthotics service info: `https://momentumsic.com/services/footscan-and-orthotics/`
- "What is a Footscan?": `https://momentumsic.com/what-is-the-footscan-assessment/`

These appear on `index.html` (service card notes) and `services.html` (`#scanning`, `#orthotics` and `#biomechanics` sections, plus the pricing table) as `target="_blank"` links out to Momentum's site. If Momentum restructures their URLs, double-check these still resolve.

### Embedded booking calendar (Rehab Guru)

`book-appointment.html` no longer just links out — it embeds Momentum's actual Rehab Guru booking widget using the exact embed code Rehab Guru generates (id, inline sizing, and the `postMessage` auto-resize script all preserved as supplied, not rewritten):

```html
<script>window.addEventListener("message",(function(e){if(e.data&&"updateHeight"===e.data.type){const t=document.getElementById("bkv2__app");t&&(t.style.height=e.data.height)}}),!1);</script>
<iframe id="bkv2__app" src="https://bookings.rehabguru.com/3c62a561176c271866343820cacef116%3Ab18a9ce84db21d195dc7e3942595cb081869aef6105fc301386e96a9cb73dbfe" frameborder="0" style="width: 100%; height: 800px; border: none;" title="Booking Application"></iframe>
```

The script listens for `updateHeight` messages from the iframe and resizes it live to fit the widget's content, so it self-adjusts (no fixed mobile/desktop height needed — `css/style.css`'s `.booking-embed iframe` rule only sets `display: block` and otherwise leaves sizing to the inline styles/script above). As with the plain links, Rehab Guru's embed is typically tied to a domain registered in their dashboard (Account → Appointments → Portal Settings → URLs and Embeds), so **the calendar may not render until Momentum adds this site's real production domain to that allow-list** — until then, or in any sandboxed/offline preview, it shows as an empty box. A fallback line under the iframe links to `https://momentumsic.com/book-online/` and the phone number in case the embed doesn't load.

### Scope corrections: podiatry, sports assessment and diabetic care all removed

Two rounds of corrections narrowed the site down to the real three-service scope:

1. **Podiatry/chiropody removed.** Carl Bell and Kate Disley are physiotherapy/sport rehabilitation practitioners, not podiatrists, so every mention of "podiatry"/"chiropody" was removed, including the standalone "General Podiatry & Chiropody" service (nail care, corns, calluses, verruca and ingrown toenail treatment).
2. **Sports assessment and diabetic foot care removed.** The clinic confirmed it does not provide nail/footbed care, podiatry, or diabetic risk screening — the *only* services are Footscan Assessment, Biomechanical Assessment and Phits Orthotics. This meant removing the "Running & Sports Assessment" and "Diabetic & At-Risk Foot Care" sections entirely (not just renaming them), including their service cards, dedicated `services.html` sections, pricing rows, and footer links.

The second round also removed `book-appointment.html`'s local "Appointment request" form: it existed only to book the in-house services that turned out not to exist, so once Sports Assessment and Diabetic Foot Care were gone there was nothing left for it to book. That page then went through a further change — see "Embedded booking calendar" below — from a links-out card to an embedded Rehab Guru widget. The general enquiry form on `contact.html` is unaffected throughout — that's for questions, not appointment booking, and was never service-specific.

If further corrections come in, the pattern to check is the same each time: `index.html` service grid, `services.html` sections + pricing table, `book-appointment.html` booking summary, and the "Services" list in every page's footer (`index.html`, `services.html`, `about.html`, `contact.html`, `book-appointment.html` — it's duplicated identically on all five).

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

- **Testimonials** on `index.html` — currently fictional placeholder quotes.
- **Map embed** on `contact.html` — approximate coordinates only; verify against the exact building/unit, or swap for a Google Maps embed.
- **Social links** in the footer — currently placeholder `#` links.
- **Images** — the homepage hero photo, Carl/Kate's team photos, and all three `services.html` section photos (footscan pressure-mapped shoe, Phits orthotics packaging, the Phits+ device) are real (`images/`). Everything else — small icon badges, the "our story" and "why footscan centre" illustrations on `index.html`/`about.html` — still uses inline SVG instead of photos. Note: the Biomechanical Assessment section reuses the Phits+ device photo since there's no dedicated biomechanical-assessment photo available — swap it out if a better one turns up, since that device is really Phits/orthotics hardware, not biomechanical-assessment-specific.
- **Contact form** — `contact.html`'s general enquiry form is front-end only (it validates and shows a success message but doesn't send anywhere). Connect it to a real backend such as [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), or similar. `book-appointment.html` no longer has its own form — booking goes through Momentum's system instead (see above).

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Any static host works. For GitHub Pages: push this repository, then enable Pages for the branch/folder in the repository settings.

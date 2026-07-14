# ✂️ Monochrome Cuts — Barber & Style

> 🚀 **Project #8** in my frontend development journey.  
> 🔗 **Live Demo:** [View Live Site](https://vastent.github.io/monochrome-cuts-barbershop/)

Premium, minimalist, and brutalist single-page website for a high-end barbershop. Designed with a deep focus on typography, contrast, and buttery-smooth user interactions.

---

## 🖤 Design Aesthetics

- **Vibe:** Swiss design minimalism, bold typography, deep dark colors, and high-contrast monochrome photography.
- **Color Palette:** Deep Carbon Black (`#0a0a0a`), Sleek Graphite (`#121212`), Pure White (`#ffffff`), and Muted Slate (`#a0a0a5`).
- **Typography:** 
  - **Syne** (Google Fonts) — Ultrawide, heavy geometric typeface for headers and branding.
  - **Space Grotesk** (Google Fonts) — Tech-focused, highly legible grotesque for navigational and body copy.

---

## 🛠️ Features Included

1. **Perfect Adaptive Layout (Mobile-first ready):** 
   - Beautiful multi-column grids for desktops.
   - Smooth transition into compressed layouts for tablets.
   - Perfectly aligned single-column stack on smartphones (down to 320px screen width) — absolutely zero horizontal scroll.
2. **Monochrome-to-Color Card Triggers:** Hover effects on Services and Craftsmen sections reveal details through soft zoom and smooth saturation filters (`grayscale` to full color).
3. **Equalized Price Alignments:** Smart CSS Flexbox mechanics push prices to the absolute bottom of cards, maintaining perfect grid alignment regardless of text length.
4. **Header Scroll Dynamics:** Navigation bar dynamically shifts opacity and drops a deep shadow when scrolled past 50px, separating it elegantly from content.
5. **Precise Smooth Scrolling:** Anchor navigation calculates the exact pixel offset, considering the fixed header height, preventing section titles from being cut off.
6. **Smart Action Triggers:** "Book Now" buttons check context, prompt the user natively, and execute dynamic telephone calls (`tel:`) instantly.
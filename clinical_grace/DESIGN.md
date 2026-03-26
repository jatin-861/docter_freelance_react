# Design System Strategy: The Curated Care Aesthetic

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Clinician’s Atelier."** 

We are moving away from the cold, sterile "hospital-blue" templates that dominate the health-tech space. Instead, we are building a high-end editorial experience that feels as much like a luxury concierge service as it does a medical provider. By leveraging **intentional asymmetry**, **tonal depth**, and **editorial typography**, we create an environment that feels authoritative yet deeply human. 

The layout should breathe. We reject the "boxed-in" look of traditional dashboards in favor of overlapping elements and vast negative space, signaling that the user’s time and peace of mind are our highest priorities.

---

## 2. Color & Surface Philosophy
This system utilizes a sophisticated Material-based palette to define hierarchy through light and temperature rather than lines.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts. Use `surface-container-low` (#f2f4f7) sections sitting on a `surface` (#f7f9fc) background to imply structure.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine heavy-stock paper. 
- **Base:** `surface` (#f7f9fc)
- **Primary Content Areas:** `surface-container-low` (#f2f4f7)
- **Interactive Floating Cards:** `surface-container-lowest` (#ffffff)
- **Deep Insets:** `surface-container-high` (#e6e8eb) for secondary utility bars.

### The "Glass & Gradient" Rule
To elevate the "Premium" feel, use **Glassmorphism** for floating navigation or urgent modal overlays. 
- **Implementation:** Apply `surface` at 80% opacity with a `20px` backdrop-blur. 
- **Signature Polish:** For primary CTAs, do not use a flat hex. Apply a subtle linear gradient from `primary` (#002b22) to `primary-container` (#004336) at a 135-degree angle to give the element "soul" and weight.

---

## 3. Typography: The Editorial Voice
We pair the intellectual authority of a serif with the modern efficiency of a geometric sans-serif.

*   **Display & Headlines (Newsreader):** This is our "Trust" anchor. Use `display-lg` (3.5rem) for hero moments. The slight italics in Newsreader should be used sparingly for "human" keywords (e.g., *at home*) to break the rigidity.
*   **Body & UI (Manrope):** Our functional workhorse. `body-lg` (1rem) is the standard for patient notes and descriptions. Its wide apertures ensure readability for all age demographics.
*   **Hierarchy as Identity:** Use high-contrast scaling. A `display-md` headline followed by a `body-sm` label creates an editorial look reminiscent of high-end journals.

---

## 4. Elevation & Depth: Tonal Layering
We convey importance through "lift" and "tone," never through structural "fences."

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural, soft lift.
*   **Ambient Shadows:** For floating elements (like a "Book Now" FAB), use an extra-diffused shadow: `box-shadow: 0 12px 32px rgba(0, 43, 34, 0.06);`. Note the tint—we use a fraction of the `primary` color, never pure black, to mimic natural light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#c2c7cf) at **15% opacity**. 100% opaque borders are strictly forbidden.
*   **Soft Roundedness:** Adhere to the `md` (0.75rem / 12px) scale for primary cards to maintain the "Warm & Human" requirement. Use `full` (9999px) only for pills and tags.

---

## 5. Components & Pattern Language

### Buttons: The "Soft Interaction"
*   **Primary:** Gradient of `primary` to `primary-container`. `xl` (1.5rem) roundedness. No shadow unless hovering.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. This feels integrated, not loud.
*   **Tertiary:** Pure text using `secondary` (#386188) with a 2px underline offset by `spacing-1`.

### Cards & Medical Lists
*   **Strict Rule:** No divider lines. Use `spacing-6` (2rem) of vertical white space to separate list items.
*   **Patient Profiles:** Use `surface-container-lowest` with a `surface-variant` left-accent bar (4px) to denote "Active" status.

### Input Fields: The "Quiet Entry"
*   Inputs should not have 4-sided borders. Use a `surface-container-high` background with a `none` border and a 2px `primary` bottom-stroke that animates on focus. This mimics a professional medical form.

### Signature Component: The "Care Timeline"
*   A vertical layout using `secondary-fixed-dim` (#a2caf7) dots. Use asymmetric placement—date on the left, medical note on the right—to break the grid and feel more "bespoke."

---

## 6. Do's and Don'ts

### Do
*   **Use Asymmetry:** Place hero images slightly off-center or overlapping a text container to create a "custom-built" feel.
*   **Embrace Negative Space:** If a section feels "empty," leave it. Large margins (`spacing-20`) signal luxury and calm.
*   **Use High-Quality Photography:** Only use imagery with natural, warm lighting. Avoid "stock-photo" smiles; look for candid moments of care.

### Don't
*   **Don't use 100% Black:** Use `on-surface` (#191c1e) for all "black" text to maintain a softer, premium look.
*   **Don't use Standard Grids:** Avoid the "3-column card row" where possible. Try a 2/3 and 1/3 split to create visual interest.
*   **Don't Overuse the Accent Red:** `error` (#ba1a1a) is only for critical medical alerts or deletions. Never use it for decorative elements.

---

## 7. Spacing & Rhythm
Rhythm is controlled by the **3.5px base (0.35rem)**. 
- Use `spacing-12` (4rem) for section padding to ensure the "Premium Medical" feel.
- Use `spacing-3` (1rem) for internal component groupings (e.g., Title to Body text).
- Always round up to the nearest token; never use "in-between" pixel values.
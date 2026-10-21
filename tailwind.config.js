/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    // The original style.css / animations.css / responsive.css already
    // define a complete, hand-tuned base + reset for this design. Tailwind's
    // own Preflight reset would fight with it (different margins, list
    // styles, button resets, etc.), so it's turned off here. Tailwind's
    // utility classes (flex, grid, spacing, color helpers, etc.) are still
    // fully available for any new markup — only the base reset is skipped.
    preflight: false,
  },
  plugins: [],
}

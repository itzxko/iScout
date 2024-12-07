/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "host-grotesk": ["Host Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [scrollbarHide],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d1f2e",
        secondary: "rgba(29, 31, 46, 0.7)",
        underlineMenu: "rgba(162, 95, 75, 0.3)",
        underlineMenuB: "rgba(162, 95, 75, 0.7)",
        "ct-dark": "#050827",
        "ct-brown": "#a25f4b",
        "ct-gray": "#ececed",
        "ct-gary-40": "rgba(29, 31, 46, 0.4)",
      },
      maxWidth: {
        primary: "940px",
      },
      screens: {
        sm: { max: "767.8px" },
        md: { min: "768px", max: "991.8px" },
        lg: { min: "992px" },
      },
      backgroundImage: {
        globalBanner: "url('./images/bg_g_banner.png')",
      },
    },
  },
  plugins: [],
};

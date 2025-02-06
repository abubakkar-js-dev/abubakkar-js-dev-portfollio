/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#1e1e2e",
        darkGray: "#282c34",
        lightGray: "#f8f9fa",
        primary: "#007bff",
        secondary: "#f39c12",
        success: "#00b894",
      },
    },
  },
  plugins: [],
};

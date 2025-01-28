import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/Header/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001338",
        secondary: "#FFD057",
      },
      backgroundImage: {
        hero_bgimg: "url('/images/png/hero-bg-img.png')",
      },
      boxShadow: {
        "3d": "10px 10px 15px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.3)",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideTop: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(-50px)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(0)" },
        },
        animateTop: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        animateRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
      animation: {
        slideDown: "slideDown",
        animateTop: "animateTop 2s linear infinite",
        animateRight: "animateRight 2s linear infinite",
        rotate: "rotate 10s linear infinite",
        border: "border 4s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

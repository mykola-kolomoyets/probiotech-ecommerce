import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-down-and-fade": {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left-and-fade": {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-up-and-fade": {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-right-and-fade": {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-down-radix": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "slide-up-radix": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "spin-reverse": "spin 1s linear infinite reverse",
        "slide-down-and-fade":
          "slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-and-fade":
          "slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up-and-fade":
          "slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-and-fade":
          "slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-radix":
          "slide-down-radix 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "slide-up-radix": "slide-up-radix 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "fade-in": "fade-in 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        "fade-out": "fade-out 150ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;

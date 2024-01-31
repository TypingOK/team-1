/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./index.ts", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      neutral: {
        100: "#030303",
        90: "#1A1A1A",
        80: "#333333",
        70: "#4D4D4D",
        60: "#666666",
        50: "#808080",
        40: "#999999",
        30: "#B3B3B3",
        20: "#CCCCCC",
        10: "#E6E6E6",
        5: "#F3F3F3",
        0: "#FFFFFF",
      },
      primary: {
        100: "#0059FF",
        90: "#196AFF",
        80: "#337AFF",
        70: "#4C8BFF",
        60: "#669BFF",
        50: "#7FACFF",
        40: "#99BDFF",
        30: "#B2CDFF",
        20: "#CCDEFF",
        10: "#E5EEFF",
        5: "#F5F8FF",
        0: "#FFFFFF",
      },
      stroke: { blue: "#99BDFF", 10: "#E6E6E6", 5: "#F3F3F3" },
      background: {
        100: "#666666",
        50: "#A9A9A9",
        5: "#F8F8F9",
        blue: "#F5F8FF",
        pike: "#FFE5EB",
        green: "#E3FFFA",
        purple: "#EFE8FF",
        orange: "#FFECCF",
      },
      system: {
        warning: "#FF0000",
        success: "#07A320",
      },
    },
    keyframes: {
      slideDownAndFade: {
        from: { opacity: 0, transform: "translateY(-2px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      slideLeftAndFade: {
        from: { opacity: 0, transform: "translateX(2px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      slideUpAndFade: {
        from: { opacity: 0, transform: "translateY(2px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      slideRightAndFade: {
        from: { opacity: 0, transform: "translateX(-2px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
    },
    animation: {
      slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideRightAndFade:
        "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Pretendard"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};

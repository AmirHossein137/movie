import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        user : "rgb(45, 46, 47)",
        loginBg : "rgba(0, 0, 0, 0.81)",
       }
    },
  },
  plugins: [daisyui],
};

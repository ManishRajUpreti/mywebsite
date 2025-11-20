import { max } from 'three/tsl';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '125rem',
      },
    },
  },
  plugins: [],
};

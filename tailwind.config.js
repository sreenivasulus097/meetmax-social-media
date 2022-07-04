/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    /* screens: {
      //  xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
      //  sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      //  md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
      // lg: { min: "1200px" }, // Desktop smallest.
      // xl: { min: "1159px" }, // Desktop wide.
      //xxl: { min: "1359px" }, // Desktop widescreen.,
    },*/

    extend: {
      colors: {
        bgLoginLayoutColor: "rgba(33,40,51,255)",
        bgSocialBtns: "rgba(78,93,120,255)",
        lognScrnBrderColor: "#7e8486",
        lognScrnBrderColorLight: "#EFF0F2",
        btnBlue: "#377dff",
        darkBgColor: "rgba(25,28,34,255)",
      },
    },
  },
  plugins: [],
};

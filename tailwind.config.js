module.exports = {
    purge: [
        // "./src/**/*.html",
         "./src/**/*.js",
        "./src/**/*.jsx"
       ],
  darkMode: "class",
  content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './node_modules/tw-elements/dist/js/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      extend: {},
  },
  plugins: [
   
  ], }
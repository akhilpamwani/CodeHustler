module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
  darkMode: "class",
  content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.js", "./components/**/*.js',
      './components/**/*.{js,ts,jsx,tsx}',
      './node_modules/tw-elements/dist/js/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      extend: {},
  },
  plugins: [
   
  ], }
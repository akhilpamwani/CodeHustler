module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    process.env.NODE_ENV === "production",
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}
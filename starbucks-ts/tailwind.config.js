module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       backgroundPosition: {
        '1/2': '50%',
        '2/2.5': '40% 100%',
       },

       backgroundSize: {
         'auto-100%': 'auto 100%',
         'auto-50%': 'auto 50%',
       },
      padding:{
        0.75: ".1875rem",
      },
      colors:{
        magenta:{
          lighter:"#12346",
          noraml:"#ff85fa",
          darker:"#abc566"
        },
        primary:{
          50:"#f1f8f6",
          100:"#f3f1e7",
          200:"#d4e9e2",
          400:"#1e3932",
          300:"#008248",
        },
        gren:"#023803",
        background1: "#f3f1e7", 
        maroon: "#FF1122",
        golden: "#FFD700" 
      },
      fontFamily:{
        'myFont': ['SoDoSans','Helvetica Neue','Helvetica','Arial','sans-serif']
      },
      translate: {
        '100%': '100%',
        '200%': '200%',
        '300%': '300%',
        '400%': '400%',
        '500%': '500%',
        '600%': '600%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

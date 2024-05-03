
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      sans: ['Poppins', 'sans-serif'], // Use Poppins as the primary sans-serif font
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        purpel:'#1E0B38'
      },
      backgroundImage: {
        site: "url('./assets/Herosectionvector.jpg')",
        about: "url('./assets/aba.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};

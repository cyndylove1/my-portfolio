/** @type {import('tailwindcss').Config} */
module.exports = {
  
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      
    ],
  
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '968px',
      'xl': '1000px',
      '2xl':'1200px'
     
    },
    
    colors: {
     'blue': '#9EF0F0',
     'black':'#000',
     'white':'#fff',
     'dark':' #46AAA8',
     'red':'#ff0000',
     'smoke':'#f5f5f5'
     

    },
    
  fontFamily:{
    sans: ['lato','sans-serif']

  },
 
    extend: {
      height:{
        '1':'0.5px',
        '128': '1100px',
        '140':'600px',
        '141':'800px',
        '129':'1000px',
        '130':'1200px',
        '131':'1000px',
        '134':'700px',
        '60':'100vh'
      

      },
       
      width:{
        
        '97':'21rem',
        '83':'30rem',
        '82':'27rem',
        '78':'80%',
        '77':'60%',
        // '99':'10rem',
        '80':'90%',
        '81':'100%',
        '84':'200%'
      



      },
      borderWidth:{
        '1':'0.1px',

      },
      margin:{
        '98':'36rem',
        '97' :'61rem'

      },
      padding:{
        '15':'170px'
      }
      
      
      
    },
  },
  plugins: [],
}


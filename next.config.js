
module.exports = {
  env: {
    BASE_URL:"https://api.themoviedb.org/3",
API_KEY:"aa0b34d169414a371fa98f29e584298f"
   
  },

  

    //we have to let NEXT know we want to use images from this website
    images: {
      domains: ['www.themoviedb.org',"image.tmdb.org"], // Add any other domains if required
    },

    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Set-Cookie',
              value: 'myCookie=value; SameSite=None; Secure',
            },
          ],
        },
      ];
    },
  };
  

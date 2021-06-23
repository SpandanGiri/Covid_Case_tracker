
upadateMovies();
function upadateMovies() {
   fetch('https://www.trackcorona.live/api/countries')
      .then(response => response.json())
      .then(rsp => {

         rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            
            //cases

            cases=element.confirmed;
            
            adjt_cases=cases/1500;
            console.log(adjt_cases);
           
            var marker = new mapboxgl.Marker({
               draggable: false,
               color: `rgb(${adjt_cases},0,0)`

            })
               .setLngLat([longitude, latitude])
               .addTo(map);

           

         });
      });



}


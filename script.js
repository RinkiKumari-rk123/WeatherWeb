const getWeather = () => { 

    var city = document.querySelector('input').value; 

    console.log(city) 

    var cityDiv = document.querySelector('.city'); 

    var temp = document.querySelector('.temp'); 

    var desc = document.querySelector('.desc'); 

    var imagediv = document.querySelector('.image'); 





fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20974696600a9f939bad988a3131bbd5`).then 

(response => response.json()).then(response => { 

           document.querySelector('.showWeather').style.display='flex'; 

            console.log(response); 

            cityDiv.innerHTML = city; 

            temp.innerHTML = `${Math.round(response["main"]['temp']) - 273}<sup>&deg;C</sup>` 

            desc.innerHTML = `${response['weather'][0]['description']}`; 


while(imagediv.firstChild) imagediv.firstChild.remove();       var image = document.createElement('img'); 

            image.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${response['weather'][0]['icon']}.svg` 

            imagediv.appendChild(image); 

       }).catch(error => 

       { 

           console.log('Error: ',error); 

       }) 




   return false; 

} 
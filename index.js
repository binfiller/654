
async function onClickSubmit(){
          var location = document.getElementById("location").value;
          var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=74d54fd12f4329d090b28c4f4a540a56`
          var response = await fetch(url);
          var jsonData = await response.json();
          text1 = "yes"
          text2 = "no"
          var feels_like = jsonData.main.feels_like;
          var imgOne = document.getElementById("jacketImage");
          
          if (feels_like < 60)
          {document.getElementById("needjacket").innerHTML = text1;
          imgOne.src = "jacket.svg";
        } 
          else {document.getElementById("needjacket").innerHTML = text2;
        imgOne.src = "tshirt.svg";
        }
          
          document.getElementById("feels_like").innerHTML = jsonData.main.feels_like;
          
          var weather = jsonData.weather[0].id;
          
          if (weather < 600 & weather > 199){document.getElementById("needumbrella").innerHTML = text1} 
          else {document.getElementById("needumbrella").innerHTML = text2};
          
          document.getElementById("weather").innerText = jsonData.weather[0].description;
          document.getElementById("currentTemp").innerHTML = jsonData.main.temp + '°';
          
        };




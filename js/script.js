function getData() {
  const cityName = document.getElementById("cityInput").value;
  const weatherApiKey = "cc7e2bb1ed3dd7aa4cd3128ce3b6cb91";

  if (!cityName) {
    alert("Please enter a city name.");
    return;
  }

  // Guide used -> https://openweathermap.org/api/geocoding-api
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${weatherApiKey}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      outputHTML = `
                <div class="city">
                    <h2>${data[0].name}</h2>
                    <p>Latitude: ${data[0].lat}</p>
                    <p>Longitude: ${data[0].lon}</p>
                    <p>Country: ${data[0].country}</p>
                    <p>State: ${data[0].state}</p>
                    <button onclick="getAQI('${data[0].name}')">Get AQI</button>
                    <div id="aqi-output" style="float: right"></div>
                </div>
            `;

      document.getElementById("output").innerHTML = outputHTML;
    })
    .catch((error) => console.error("Error fetching data:", error));
}

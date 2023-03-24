const apiKey = "4115ea672dba4ca79eaf87f420026c67";
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const weatherDesc = document.getElementById("weather-desc");
const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  const apiUrl = `https://api.weatherbit.io/v2.0/current?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      cityName.innerHTML = data.name;
      weatherDesc.innerHTML = data.weather[0].description;
      temp.innerHTML = `Temperature: ${data.main.temp}°C`;
      feelsLike.innerHTML = `Feels like: ${data.main.feels_like}°C`;
    })
    .catch((error) => console.log(error));
});


// Select all elements to animate
const elementsToAnimate = document.querySelectorAll('.fade-up');

// Add scroll event listener to the window object
window.addEventListener('scroll', function() {
  elementsToAnimate.forEach(function(el) {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    // Check if the element is in the viewport
    if (elementTop < window.innerHeight && elementBottom >= 0) {
      el.classList.add('animate');
    }
  });
});


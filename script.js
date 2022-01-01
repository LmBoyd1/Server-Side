var apiKey="3c75210e06ebfe4efeca18f956c9c515"
var cityName=document.querySelector("#cityName")
var searchBtn=document.querySelector("#searchBtn")
searchBtn.addEventListener("click",displayDashboard)

function displayDashboard(){
    showWeather(cityName.value)
}
function showWeather(city){
    var currentWeatherAPI=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    fetch (currentWeatherAPI)
    .then(function(data){
        return data.json()
    })
    .then (function(results){
        console.log(results)
        var oneCallAPI=`https://api.openweathermap.org/data/2.5/onecall?lat=${results.coord.lat}&lon=${results.coord.lon}&exclude={part}&appid=${apiKey}&units=imperial`
        fetch (oneCallAPI)
        .then(function(data){
            return data.json()
        })
        .then (function(oneCallData){
            console.log(oneCallData)
        })
    })
}
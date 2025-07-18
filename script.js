let month=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
var day = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();
document.getElementById('date').innerHTML = d.getDate();
document.getElementById('month').innerHTML = month[d.getMonth()];
document.getElementById('day').innerHTML = day[d.getDay()];
let cityname='erode';

function City_name(){
    cityname=document.getElementById("city-name").value;
    run();
}

var temp;
let feel;
const apiKey = '0cefbdd8089c7b724b58eac94e84c704';



function run() {
    let city = cityname;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        feel = data.weather[0].main;
        document.getElementById('feel').innerHTML = feel;
        cityname = data.name;
        document.getElementById('name').innerHTML = "Weather Today at " + cityname;
        temp = data.main.temp;
        temp -= 273.15;
        document.getElementById('temp').innerHTML = Math.floor(temp);
    })
    .catch(error => alert("Enter correct City name"));
}
run();
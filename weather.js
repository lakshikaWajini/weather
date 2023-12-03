var displaycity = document.getElementById('display');
var displaycity = document.getElementById('city');
//var url= 'https://api.openweathermap.org/data/2.5/forecast?lat=6.053519&lon=80.220978&appid=58d9d1f4c6d9e1ac2ac52a265f1d45aa'
var url='https://api.openweathermap.org/data/2.5/weather?lat=6.053519&lon=80.220978&appid=58d9d1f4c6d9e1ac2ac52a265f1d45aa'
var http= new XMLHttpRequest(); //create instance using XMLHttpRequest() class

//http.open(method,url,async,username,password);
http.open('GET',url);
http.send();

http.onreadystatechange=function(){

    if(http.readyState == 4 && http.status == 200){
var data=JSON.parse(http.response)
console.log(data);
var city = data.name;
var temp = data.main.temp;
var pressure = data.main.pressure;
var humidity = data.main.humidity;

display.innerHTML = " <h2 >City : " + city +"</h2><div>temperature:"+ temp +"k</div><div>Humadity:"+ humidity +"</div><div>pressure: "+ pressure +"</div>";
var weather=data.weather[0].main;
var weatherDectription=data.weather[0].description;


    
    }
}


//first two parameters required
//async-true(default)

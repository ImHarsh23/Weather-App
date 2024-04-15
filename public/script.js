const btn = document.querySelector('button');
const input = document.querySelector('input');
const content = document.querySelector('.temp');
const feel = document.querySelector('.temp-feel');
const wrapper = document.querySelector('.wrapper');
const loader = document.querySelector(".loader");
const time = document.querySelector(".time");
const area = document.querySelector(".area");
const place = document.querySelector(".place");
const card = document.querySelector(".content");

//other extra information
const pressureVal = document.querySelector(".pressure-val");
const humidityVal = document.querySelector(".humidity-val");
const windVal = document.querySelector(".wind-val");

//For alert
const alertdiv = document.querySelector(".alert-container");
const alertcity = document.querySelector(".alert-city");

//Date object
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();

//DOM updating functions start
function updateTemp(temp, feel_like){
    content.innerHTML = Math.floor(temp)+"°C";
    feel.innerHTML = "Real feel "+Math.floor(feel_like)+"°C";
    input.innerHTML = "";
}

function updateTime(name, country){
    time.innerHTML = `${d.getDate()} ${month[d.getMonth()]}, ${day[d.getDay()]}`;
    place.innerHTML = `${name}, ${country}`;
}

function popUp(element){
    element.classList.toggle("tobottom");
        const a = setTimeout(()=>{
            element.classList.toggle("tobottom");
            clearTimeout(a);
        },2000)
}

function updateExtraInfo(wind, pressure, humidity){
    windVal.innerHTML = `${wind.speed} km/h`;
    pressureVal.innerHTML = `${pressure} MB`;
    humidityVal.innerHTML = `${humidity}%`;
}
//DOM updating functions end


btn.addEventListener("click", async (e)=>{
    e.preventDefault();
    if(input.value.trim() === ""){
        popUp(alertdiv);
        return;
    }
    loader.style.display = "block";

    try{
        const response = await axios(`/weather?${input.name}=${input.value}`);
        const {data} = response;
        console.log(response.data);
        if(data.cod === 200){
            const {temp, pressure, humidity, feels_like} = response.data.main; 
            const {wind, assets} = response.data;
            const {name} = response.data;
            const {country} = response.data.sys;

            card.style.display = "block";
            area.style.backgroundImage = `Url(${assets})`;
            updateTemp(temp, feels_like);
            updateTime(name, country);
            updateExtraInfo(wind, pressure, humidity);
        }
        else{
            popUp(alertcity);
            content.innerHTML ='';
            card.style.display = "none";
        }
    }
    catch(e){
        console.log(e);
    }
    loader.style.display = "none";
})


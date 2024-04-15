const express = require("express");
const path = require("path");
const app = express();

const Port = 3000;
const apikey='f75b1479cc8a3a35acc4f6ae682a24e2';
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const DBTask = require(path.join(__dirname,"Controller/controller.js"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

function fetchWeather(city){
    return new Promise(async(resolve, reject)=>{
        try{
            let response = await fetch(apiUrl+city+`&appid=${apikey}`);
            let data = await response.json();
            resolve(data);
        }
        catch(e){
            reject(e);
        }
    })
}

app.get("/weather",async (req, res)=>{
    const {city} = req.query;
    let data = await fetchWeather(city);

    try{
        const {main} = data.weather[0];
        const assets = await DBTask.getData(main);
        data["assets"] = assets;
    }
    catch(e){
        data["img"] = "";
        console.log(e);
    }
    
    res.send(data);
})

app.listen(Port, ()=>{
    console.log("Server Running at port", Port);
})
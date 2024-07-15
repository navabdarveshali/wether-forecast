import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] =useState({
        city:"hyderabd",
        feelslike : 24.83,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign: "center"}}>
            <h1>wether app by delta</h1>
            <SearchBox updateInfo ={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};
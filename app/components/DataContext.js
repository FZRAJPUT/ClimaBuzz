"use client"
import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [sea, setSea] = useState();
    const [Temp, setTemp] = useState();
    const [wind, setWind] = useState();
    const [feels, setFeels] = useState();
    const [cloud, setCloud] = useState();
    const [country, setCountry] = useState();
    const [humadity, setHumadity] = useState();
    const [pressure, setPressure] = useState();
    const [loading, setLoading] = useState(false);
    const [visibility, setVisibility] = useState();
    const [sharedData, setSharedData] = useState('');
    const [isOnline, setIsOnline] = useState(false);
    const [zone, setzone] = useState();

    const weather = async (city) => {
        try {
            setLoading(true);
            const Api_Key = "2f7f72c4fef74579fb447fa030766c03";
            const Api_Url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
            const response = await fetch(`${Api_Url}&q=${city}&appid=${Api_Key}`);
            const data = await response.json();
            setSharedData(data.name);
            setWind(data.wind.speed);
            setHumadity(data.main.humidity);
            setTemp(Math.round(data.main.temp));
            setFeels(Math.round(data.main.feels_like));
            setPressure(data.main.pressure);
            setSea(data.main.sea_level);
            setCountry(data.sys.country);
            setCloud(data.weather[0].description);
            setVisibility(data.visibility);
            setMin(Math.round(data.main.temp_min));
            setMax(Math.round(data.main.temp_max));
            setzone(data.timezone)
            setLoading(false);
            setIsOnline(false);
        
    } catch (error) {
        console.log(error);
        setIsOnline(true);
    }
    }

    return (
        <DataContext.Provider value={{zone, setSharedData,loading, visibility, min, max, cloud, country, sea, pressure, feels, sharedData, setSharedData, Temp, setTemp, weather, wind, humadity,isOnline }}>
            {children}
        </DataContext.Provider>
    );
};

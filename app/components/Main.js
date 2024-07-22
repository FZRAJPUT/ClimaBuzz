"use client"
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import Loading from './Loading';

const Main = () => {
    const { sharedData, Temp, zone, weather, isOnline, loading, humadity, min, max, visibility, cloud, wind, pressure, feels, sea, country, error } = useContext(DataContext);
    const [timezone, settimezone] = useState('')


    const getCurrentTimeInTimezone = (offsetSeconds) => {
        const now = new Date();

        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);

        const timeInTimezone = new Date(utcTime + (offsetSeconds * 1000));

        return timeInTimezone;
    }

    const displayCurrentTime = (zone) => {
        const offsetSeconds = zone;
        const currentTime = getCurrentTimeInTimezone(offsetSeconds);

        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();

        settimezone(`${hours}:${minutes}`)

    }


    useEffect(() => {
        displayCurrentTime(zone)
    }, [sharedData]);

    useEffect(() => {
        weather('Bathinda');
        displayCurrentTime(zone);
    }, []);


    return (
        <div className='main flex gap-2 flex-col items-center p-2 h-[580px] max-h-[83vh] w-[750px] max-w-[100%] rounded-md bg-[#24242486] backdrop-blur-[80px]' >
            <div className='flex flex-col justify-around gap-2 h-[48%] w-[100%] bg-[#d0cdcd23] rounded-[4px] py-2 px-4'>
                {!isOnline ? <p></p> : <div className='text-red-500'>City Not Found or Network Issue</div>}
                {loading ? <Loading /> : error ? <p className='text-red-500'>{error}</p> : <p title='City & Country' className='cursor-default'>{sharedData}, {country}</p>}
                {loading ? <Loading /> : <div className='flex flex-col gap-1 my-[20px]'>
                    <p className='text-xs'>Current weather</p>
                    <p title='Time' className='text-[11px] cursor-default'>Time : {timezone}</p>
                </div>}
                <div className='py-1 h-[40%] rounded-[2px] flex justify-between items-center'>
                    <div className='h-[60px] w-[60px] rounded-[50%]'>
                        <img src="/images/sunn.png" alt='pic' />
                    </div>
                    {loading ? <Loading /> : error ? <p className='text-red-500'>{error}</p> : <h1 title='Temperature' className='cursor-default text-[43px] flex items-start'>{Temp}<p className='text-[15px] mt-3'>{'°C'}</p></h1>}
                    {loading ? <Loading /> : error ? <p className='text-red-500'>{error}</p> : <div>
                        <p className='font-[300] text-[14px]'>feels like {feels}°</p>
                    </div>}
                </div>
            </div>

            {/* bottom Section */}
            <div className='flex flex-col justify-around gap-2 h-[48%] w-[100%] bg-[#d0cdcd23] rounded-[4px] py-2 px-4'>
                <div className='aa flex font-[200] p-1.5 px-3 rounded items-center justify-between bg-[#dadada00]'>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-[14px]'>Sea Level</h5>
                        {loading ? <Loading /> : <p className='text-[14px]'>{sea} m</p>}
                    </div>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-[14px]'>Humidity</h5>
                        {loading ? <Loading /> : <p className='text-[14px]'>{humadity + "%"}</p>}
                    </div>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-[14px]'>Wind Speed</h5>
                        {loading ? <Loading /> : <p className='text-[14px]'>{wind} km/h</p>}
                    </div>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-[14px]'>Pressure</h5>
                        {loading ? <Loading /> : <p className='text-[14px]'>{pressure} mb</p>}
                    </div>
                </div>

                <div className='aa flex font-[200] p-1.5 px-3 rounded items-center justify-between bg-[#dadada00]'>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-[14px]'>Max-Temp</h5>
                        {loading ? <Loading /> : <p className='text-[14px]'>{max}°</p>}
                    </div>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-[14px]'>Min-Temp</h5>
                        {loading ? <Loading /> : <p className='text-[14px]'>{min}°</p>}
                    </div>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-[14px]'>Visibility</h5>
                        {loading ? <Loading /> : <p className='text-[14px]'>{visibility} m</p>}
                    </div>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-[14px]'>Clouds</h5>
                        {loading ? <Loading /> : <h1 className='text-[12px]'>{cloud}</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

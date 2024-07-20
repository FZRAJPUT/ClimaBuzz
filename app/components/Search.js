"use client"
import React, { useContext, useState } from 'react'
import { DataContext } from './DataContext';

const Search = () => {

    const {weather} = useContext(DataContext)
    const [city, setcity] = useState('');

    const handleInput = (city)=>{
      if(city.length == 0){
        alert('Enter City Name');
      }
        weather(city.trim() || "bathinda");
        setcity('');
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if(city.length == 0){
          alert('Enter City Name');
        }
        weather(city.trim() || "bathinda");
        setcity('');
      }
    };
    

  return (
    <div className=' bb p-2 h-[80px] w-[750px] max-w-[100%] rounded-md bg-[#24242486] backdrop-blur-[80px]'>
                <div className='flex justify-between p-2 gap-2'>
                    <input onKeyDown={handleKeyDown} value={city} onChange={(e)=>{setcity(e.target.value)}} className='max-w-[70%] rounded-[4px] p-3 outline-none bg-[#ffffff17] w-10/12 text-[#d9d7d7e9]' type='text' placeholder='Enter city' />
                    <button onClick={()=>handleInput(city)} className='bg-[#ffffff1e] px-7 rounded-[4px] text-[#ffffff9f] hover:bg-[#ffffff50] ' title='search'>Search</button>
                </div>
        </div>
  )
}

export default Search;
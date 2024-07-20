"use client"
import React, { createContext, useContext } from 'react'
import Search from './Search'
import Main from './Main'

const Weather = () => {
      

  return (
    <div className='p-2 min-h-screen bg-[url(/images/bg.jpg)] bg-no-repeat bg-cover w-full flex gap-2 items-center flex-col'>
        <Search />
        <Main />
    </div>
  )
}

export default Weather
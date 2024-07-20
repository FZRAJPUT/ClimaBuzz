"use client"
import React from 'react'
import Weather from './components/Weather'
import { DataProvider } from './components/DataContext'

const page = () => {
  return (
    <DataProvider>
      <Weather />
    </DataProvider>
  )
}

export default page
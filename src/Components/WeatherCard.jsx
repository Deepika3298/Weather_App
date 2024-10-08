import React, { useState, useEffect } from 'react'
import { useDate } from '../Utils/useState'
import '../index.css'

// Import icons
import Sun from '../assets/icons/sun.png'
import Cloud from '../assets/icons/cloud.png'
import Fog from '../assets/icons/fog.png'
import Rain from '../assets/icons/rain.png'
import Storm from '../assets/icons/storm.png'
import Wind from '../assets/icons/windy.png'
import Snow from '../assets/icons/snow.png'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions
}) => {

  const [icons, setIcons] = useState(Sun);
  const { time } = useDate();

  // Condition to display icons
  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('sun') ||iconString.toLowerCase().includes('clear') ) {
        setIcons(Sun)
      } else if (iconString.toLowerCase().includes('cloud') || iconString.toLowerCase().includes('overcast')) {
        setIcons(Cloud)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcons(Fog)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcons(Rain)
      } else if(iconString.toLowerCase().includes('storm') || iconString.toLowerCase().includes('thunder')) {
        setIcons(Storm)
      } else if(iconString.toLowerCase().includes('wind')) {
        setIcons(Wind)
      } else if(iconString.toLowerCase().includes('snow')) {
        setIcons(Snow)
      } 
    }
  }, [iconString])

  // To display Weather Card 
  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4 '>
      <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
        <img src={icons} alt='weather_icon'/>
        <p className='font-bold text-5xl flex justify-center items-center'>
          {temperature} &deg;C
        </p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-center items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>
          Wind speed <p className='font-normal'>{windspeed} km/h</p>
        </p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>
          Humidity <p className='font-normal'>{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'> Heat Index </p>
          <p className='font-semibold'>
            {
              heatIndex ? heatIndex : 'N/A'
            }
          </p>  
      </div>
      <hr className='bg-slate-600'/>
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
            {conditions}
      </div>
    </div>
  )
}

export default WeatherCard
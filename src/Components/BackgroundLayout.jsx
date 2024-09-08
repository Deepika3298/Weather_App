import React, {useState, useEffect} from 'react'
import { useStateContext } from '../Context'

// images import
import Clear from '../assets/images/Clear.jpg'
import Cloud from '../assets/images/Cloudy.jpg'
import Fog from '../assets/images/FogImg.png'
import Rain from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Storm from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'

const BackgroundLayout = () => {
  
  const {weather} = useStateContext();
  const [bgImage, setBgImage] = useState(Clear);

  // condition to show images in background
  useEffect(()=>{
    if(weather.conditions){
      let imageString = weather.conditions;
      if(imageString.toLowerCase().includes('clear')){
        setBgImage(Clear)
      }else if(imageString.toLowerCase().includes('cloud')){
        setBgImage(Cloud)
      }else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setBgImage(Rain)
      }else if(imageString.toLowerCase().includes('snow')){
        setBgImage(Snow)
      }else if(imageString.toLowerCase().includes('storm') || imageString.toLowerCase().includes('thunder')){
        setBgImage(Storm)
      }else if(imageString.toLowerCase().includes('sunny')){
        setBgImage(Sunny)
      }else if(imageString.toLowerCase().includes('fog')){
        setBgImage(Fog)
      }
    }
  },[weather])

  return (
    // displaying image
    <img src={bgImage} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default BackgroundLayout
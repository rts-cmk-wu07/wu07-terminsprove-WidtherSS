import React from 'react'
import {BiUpArrow} from 'react-icons/bi'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Navigation from '../../scenes/Navigation'


const HeroSection = ({ id }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/assets/8`)
      .then(response => {
        setImage(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    
    <div>
      <div>
        <h1  className='sm:felx justify-center text-center pt-8 font-semibold text-[28px]'>
            Populer Classes
        </h1>
        <div className='flex justify-between ml-6 mr-6'>
          <div>
              <BiUpArrow className='w-7 h-7'/>      
          </div>
          <div>
            <Navigation className='w-7 h-7'/>  
          </div>
        </div>
      </div>
      <div className=' ml-6 mr-6 pt-8 '>
        <h3 className='text-[52px] absolute mt-[58%] ml-4 font-semibold text-[white]'>Lower Abs Workout</h3>
      {image &&
        <img src={image.url} alt="Single Image" className='rounded-3xl h-[450px]' />
      }
      </div>


      <div>
        <h1 className='ml-6 mr-6  pt-2 font-semibold text-[28px] '>Classes for you</h1>
      </div>
    </div>
  );
};


export default HeroSection
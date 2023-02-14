import React from 'react'
import welcomeBc from '../Assets/welcomebc.jpg'
import welcomeBc2 from '../Assets/welcomebc2.jpg'

const WelcomePage = () => {
return (
    <div>
        <div className=' xl:max-h-screen'>
            <img src={welcomeBc} alt="" className='w-full h-full' />
        </div>
    </div>
)
}

export default WelcomePage
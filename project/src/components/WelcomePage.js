import React from "react";
import welcomebc from '../Assets/welcomebc.jpg'
import welcomebc2 from '../Assets/welcomebc2.jpg'
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return (
    <div>
        <div class="w-full h-full">
            <img src={welcomebc} alt="" class="object-cover w-full h-full"/>
        </div>
        <div><img src={welcomebc2} alt="" /></div>
        <div>
        <Link
        to="/home"
        className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Go to Home
        </Link>
        </div>
    </div>
  );
};

export default WelcomePage;

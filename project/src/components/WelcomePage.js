import React from "react";
import welcomebc from '../Assets/welcomebc.jpg'
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return (
    <div className="h-[50%]" >
        <img src={welcomebc} alt="" />
      <Link
        to="/home"
        className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default WelcomePage;

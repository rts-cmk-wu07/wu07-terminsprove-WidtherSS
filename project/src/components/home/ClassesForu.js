import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassForu = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/classes')
      .then(response => {
        setClasses(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-row overflow-x-scroll">
      {classes.map(classObj => (
        <div key={classObj.id} className="mx-4 my-4">
          <img src={classObj.asset.url} alt={classObj.className} className="w-64 h-64 object-cover rounded-lg" />
          <div className="text-center mt-2">
            <div>{classObj.className}</div>
            <div>{classObj.classDay} at {classObj.classTime}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassForu;

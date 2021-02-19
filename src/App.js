import React, { useState } from 'react';
import './content.css';
import ClassCounter from './ClassComponent/Counter';
import FunctionCounter from './FunctionComponent/Counter';


const App = () => {
  const [showCC, setShowCC] = useState(false);
  const [showFC, setShowFC] = useState(false);
  return (
    <div className="content">
      <div className="content__header">
        <h1>Counter sample</h1>
        <button onClick={() => setShowCC(!showCC)}>show class components</button>
        <br/>  
        <button onClick={() => setShowFC(!showFC)}>show function components</button>  
      </div>
      <div className="content__body">
        {showCC && (
          <ClassCounter 
            incrementText="CC add 3" 
            incrementer={3} 
          />
        )}
         {showFC && (
          <FunctionCounter 
            incrementText={showCC ? 'texto' : 'cambia'} 
            incrementer={3} 
          />
        )}
      </div>
    </div>
  )
};

export default App;

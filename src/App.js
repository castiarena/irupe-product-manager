import React from 'react';
import './content.css';
import ClassCounter from './ClassComponent/Counter';
import FunctionCounter from './FunctionComponent/Counter';

const App = () => (
  <div className="content">
    <div className="content__header">
      <h1>Counter sample</h1>
    </div>
    <div className="content__body">
      <ClassCounter 
        incrementText="Agregar 3" 
        incrementer={3} 
      />
      <ClassCounter 
        incrementText="Agregar 10" 
        incrementer={10} 
      />
      <FunctionCounter 
        incrementText="Agregar 3" 
        incrementer={3} 
      />
      <FunctionCounter 
        incrementText="Agregar 10" 
        incrementer={10} 
      />
    </div>
  </div>
);

export default App;

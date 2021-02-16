import React from 'react';
import {addItem} from './../actions/carAction'

const AddedFeature = props => {
  console.log(props)
  
    return (
    
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>props.removeItem(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

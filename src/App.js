import React from 'react';
import {connect} from 'react-redux'
import {addItem, removeItem} from './actions/carAction'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  // console.log(props)
 

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeItem={props.removeItem} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addItem={props.addItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps=state=>{
  return state
}

const mapActionToProps = {
  addItem,
  removeItem
}

export default connect(mapStateToProps, mapActionToProps)(App);

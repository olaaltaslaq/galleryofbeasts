import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json';


class Main extends React.Component {
  render(){
    return(
      <div>
        <hornsData.json/>
        <HornedBeast title />
        <HornedBeast title />
        <HornedBeast title />

      </div>
    )
  }
}

export default Main;


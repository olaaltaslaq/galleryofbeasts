import React from 'react';
import HornedBeast from "./HornedBeasts"
import BeastsJson from "./BeastsJson";
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div>
        {
           BeastsJson.map((x,indx)=>{
            return(
              <HornedBeast  key={indx} title = {x.title} imageUrl = {x.image_url} description = {x.description} keyword = {x.keyword} horns = {x.horns}/>
            );
          })
        }
            </div>
        )
    }
}

export default Main;


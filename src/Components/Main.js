import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json';


class Main extends React.Component {
  render(){
    return(
      <div>
        {hornsData.map((item,idx)=>{
            return (
                <HornedBeast
                    title={item.title}
                    imgUrl={item.image_url}
                    description= {item.description}
                />
            )
        })}
      </div>
    )
  }
}

export default Main;



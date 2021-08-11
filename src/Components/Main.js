import React from 'react';
import HornedBeast from "./HornedBeasts"
import BeastsJson from "./BeastsJson";
import './Main.css';


class Main extends React.Component {
  
  // constructor (props){
  //   super(props);
  //     this.state={
  //       data : this.props.BeastsJson ,
  //     };

  //   }
  //   selectHorns = async (e) => {
  //     e.preventDefault();
  //     let filterdData = [];
  //     let num =Number(e.target.value);
  //     if (!(isNaN(num))) {
  //       console.log(num);
  //       filterdData = this.props.BeastsJson.filter((obj) => {
  //         if (obj.horns === num) {
  //           return 1;
  //         }
  //       });
  //     } else {
  //       console.log(num);
  //       filterdData = this.props.BeastsJson ;
  //     }
  //     await this.setState({
  //       data: filterdData,
  //     });
  //   };

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

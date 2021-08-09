import React from 'react';

class HornedBeast extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          numberOfPets : 0
      }
    }

    increaseNuOfPets = () =>{
        this.setState({
            nunberOfPets:this.state.numberOfPets+1
        }
        )
    }

  render(){
    return(

     <div>
         <h2>{this.props.title}</h2>
         <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title}/>
         <p> Number of Pets = {this.state.numberOfPets}</p>
     </div>

    )
  }
}

export default HornedBeast;


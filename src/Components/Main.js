import React from 'react';
import HornedBeast from "./HornedBeasts"
import BeastsJson from "./BeastsJson";
import './Main.css';
import { Form ,FloatingLabel} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {

  constructor (props){
    super(props);
      this.state={
        data : this.props.BeastsJson ,
      };

    }
    selectHorns = async (e) => {
      e.preventDefault();
      let filterdData = [];
      let num =Number(e.target.value);
      if (!(isNaN(num))) {
        console.log(num);
        filterdData = this.props.BeastsJson.filter((obj) => {
          if (obj.horns === num) {
            return 1;
          }
        });
      } else {
        console.log(num);
        filterdData = this.props.BeastsJson ;
      }
      await this.setState({
        data: filterdData,
      });
    };

    
  change=(e)=>{
    this.props.selectHorns(e);
  };

       
  
    render() {
        return (
            <div>

            <FloatingLabel  controlId='floatingSelect' label='Filter By Number Of Horns'>
                <Form.Select aria-label="Floating label select example" onChange={this.change} >
                    <option value="all" >All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </Form.Select>
            </FloatingLabel>

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

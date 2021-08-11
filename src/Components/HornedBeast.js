import React from 'react';
import './HornedBeast.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfFavorites: 0
    }
  }

  increaseNumOfFavs = () => {
    this.setState({
      numOfFavorites: this.state.numOfFavorites+1
    })
  };

  renderForModal=()=>{
    this.props.renderForModal(this.props.keyword);
  };

  render() {

    return (

      <div className='apples'>

        <Card   style={{ width: 'auto' }}>

          <Card.Title onClick={this.renderForModal}><h2> {this.props.title} </h2></Card.Title>
          <Card.Title> keyword: {this.props.keyword}</Card.Title>
          <Card.Title><h3> horns: {this.props.horns} </h3></Card.Title>
          <Card.Img  onClick={this.increaseNumOfFavs} variant="top" src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageTitle} />

          <Card.Body>
            <Card.Text>
              <Button  onClick={this.renderForModal} id="button" variant="primary"> ℹ️ Show Information </Button>
              <p className="favorites"> 💖favorites= {this.state.numOfFavorites} </p>
              <p id='dis'> {this.props.description} </p>
            </Card.Text>
          </Card.Body>

        </Card>

      </div>

    );
  }
}

export default HornedBeast;


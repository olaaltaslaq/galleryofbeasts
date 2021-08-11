import React from 'react';
import{Modal,Button,Card} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {
    render() {
        return (

            <div className="SelectedBeast">

                <Modal show={this.props.show} onHide={this.props.handleClose}>

                    <Modal.Header closeButton>

                        <Modal.Title id="tit">🦄'this.props.clickedAnimal.title'
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img className="img-fluid" variant="top" src='this.props.clickedAnimal.image_url' alt='this.props.clickedAnimal.title' title='this.props.clickedAnimal.title'/>
                    </Modal.Body>
                    <Modal.Title id="des">'this.props.clickedAnimal.description'
                    </Modal.Title>


                    <Modal.Footer>
                        <Button id="close" variant="primary"  onClick={this.props.handleClose}>
                         CLOSE
                        </Button>
                    </Modal.Footer>
                    
                </Modal>
                
            </div>

        )
    }
}

export default SelectedBeast;


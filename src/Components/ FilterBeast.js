import React from 'react';
import { Form ,FloatingLabel} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

class FilterBeast extends React.Component {
    
    changePic=(e)=>{
        this.props.selectHorns(e);
      };
  
    render() {
        return (
            <div>
                <FloatingLabel  controlId='floatingSelect' label='Filter By Number Of Horns'>
                    <Form.Select aria-label="Floating label select example" onChange={this.changePic} >
                        <option value="all" >  All The Horned Beasts </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Select>
                </FloatingLabel>
           </div>
        )
    }
}

export default FilterBeast;

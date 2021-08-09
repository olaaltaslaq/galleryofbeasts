import React from 'react';
<hornsData.json/>


class HornedBeast extends React.Component {
    render() {
        return (
            <div>
                <hornsData.json/>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.alt} title= {this.props.title}  > </img>
                <p> {this.props.description}</p>
            </div>
        )
    }

}



export default HornedBeast;
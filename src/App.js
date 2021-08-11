import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';
// import FilterBeast from './Components/FilterBeast';

class App extends React.Component {
  render(){
    return(
      <>
        <Header/>
        {/* <FilterBeast FloatingLabel={this.porps.FloatingLabel}/> */}
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default App;



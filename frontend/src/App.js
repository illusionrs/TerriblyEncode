import React from 'react';
import './App.css';
import Encode from './components/Encode'
import Decode from './components/Decode'



class App extends React.Component{



  render(){

    return(
      <div >

        <center><header> Welcome </header></center>  
        <div className="container">
        <Encode/>
        <Decode/>

        </div>

        
       
      </div>
    )
  }
}



export default App;

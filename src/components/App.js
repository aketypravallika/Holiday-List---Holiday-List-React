import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
       const cities = ["Goa","Amsterdam","New York","Darjeeling","Tokyo","Lonavala"]
        return(
           <ol>
		{
		cities.map((location,index)=>(
	<li key={"location"+(index+1)}>{location}</li>
	))
		}
	   	
	</ol>
        );
    }
}


export default App;

import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
       const cities = ["New York","Darjeeling","Lonavala","Goa"];
        return(
	
           <ol>
		{cities.map((city,index)=>(
	<li key={`location${index+1}`}>{city}</li>
	))}
	 </ol>
        );
    }
}


export default App;

import React, { Component } from "react";



export default class Addstud extends Component {
    
    render() {
        
        return (
            <div>
                 <input onClick={event =>  window.location.href='/Addform'} className="buttonstd" type="button" value="Add  student List"></input><br></br>
            </div>
            
        );
    }
}
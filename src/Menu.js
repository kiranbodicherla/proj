import React from 'react'
import './Menu.css';
import Studlist from './Studlist';
import Addstud from './Addstud';
import Repostd from './Repostd';
export default function Menu() {
  
    return (
        <div className="menu">
            
            <h1>MENU</h1>
            <div className="button">
            <Studlist />
            <Addstud />
            <Repostd />
            

            </div>
            
        </div>
    )
}

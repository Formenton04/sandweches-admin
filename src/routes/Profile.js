import React from "react";
import '../App.css';
import Order from "../components/OrderTable";
import NewPasswordPopup from"../components/NewPasswordPopup";
import { Link, NavLink } from 'react-router-dom';


function Profile(){
return(
    <div className="home">
        <h1>Profile</h1>
        <div style={{display: "flex", justifyContent: "flex-start", position: "fixed", top:"23%"}}>
            <label style={{marginRight:"40px"}}> Nome Cognome</label>
            <label> Admin Admin</label>
        </div>
        <div style={{display: "flex", justifyContent: "flex-start", position: "fixed", top:"27%"}}>
            <label style={{marginRight:"40px"}}> Email </label>
            <label > adminadmin@iisviolamarchesini.edu.it </label>
        </div>
        <div style={{display: "flex", justifyContent: "flex-start", position: "fixed", top:"31%"}}>
            <label style={{marginRight:"40px",}} > Password </label>
            <input type="password" size="40" maxlength="200" className="input_password_user"/>
        </div>
            <div className="termini_condizione_button" style={{position:"fixed", bottom:"20%"}} >
                <NavLink to="/termsconditions" >
                <h3 style={{ color: "#000"}} > Termine e condizioni</h3>
                </NavLink>
            </div>
            <div className="modifica_password_button" onClick={NewPasswordPopup} style={{position:"fixed", bottom:"30%"  }} >
                <NavLink to="/resetpassword">
                <h3 style={{ color: "#000"}}> Modifica Password</h3> 
                </NavLink>
            </div>
        </div>
    )
}    
    export default Profile;
    

    





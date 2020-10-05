import React from "react";
import {NavLink} from "react-router-dom";

export const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Test AlfaCrm</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">Список пользователей</NavLink>
                        <NavLink className="nav-link" to="/add-user">Добавить пользователя</NavLink>
                </div>
            </div>
        </nav>
    )
}
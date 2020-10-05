import React, {Fragment} from "react";
import {AddUser} from '../components/addUser/index'

export const User = () =>{
    return(
        <Fragment>
            <h1>Добавить пользователя</h1>
            <AddUser />
        </Fragment>
    )
}
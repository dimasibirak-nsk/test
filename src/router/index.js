import {Home} from "../pages/Home";
import {User} from "../pages/User";
import React, {Fragment} from "react";
import {Route} from "react-router-dom";

export const Router = () => {
    return(
        <Fragment>
            <Route path={'/'} exact component={Home} />
            <Route path={'/add-user'} component={User}/>
        </Fragment>
    )
}

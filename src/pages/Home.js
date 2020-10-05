import React, { Fragment, useContext, useEffect } from "react";
import { UserContext } from "../context/users/userContext";
import { ItemUser } from "../components/ItemUser";
import { Pagination } from "../components/Pagination";

export const Home = () =>{
    const {fetchUser, userList} = useContext(UserContext);

    useEffect(()=>{
        fetchUser();
        // eslint-disable-next-line
    }, []);

    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <ItemUser userList={userList}/>

                </div>
            </div>
            <Pagination />
        </Fragment>
    )
}
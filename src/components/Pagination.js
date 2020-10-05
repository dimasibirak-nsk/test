import React, { Fragment, useContext, useReducer } from "react";
import { UserContext } from "../context/users/userContext";

/**
 * Так как нет эндроинта для опредления кол-ва записей юзеров, pagination сделал статичным
 */
export const Pagination = () => {
    const { fetchUser } = useContext(UserContext);

    const setParams = async (numberPage) =>{
        fetchUser({"page": numberPage});
    }

    return(
        <Fragment>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link"  onClick={()=>{setParams(0)}}>1</a></li>
                    <li className="page-item"><a className="page-link"  onClick={()=>{setParams(1)}}>2</a></li>
                    <li className="page-item"><a className="page-link"  onClick={()=>{setParams(2)}}>3</a></li>
                    <li className="page-item"><a className="page-link"  onClick={()=>{setParams(3)}}>4</a></li>
                    <li className="page-item"><a className="page-link"  onClick={()=>{setParams(4)}}>5</a></li>
                </ul>
            </nav>
        </Fragment>
    )
}
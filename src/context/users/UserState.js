import React, {useReducer} from "react";
import {UserContext} from "./userContext";
import {userReducer} from "./userReducer";
import axios from 'axios';
import {AUTH, GET_USERS, ADD_USER} from "../types";

const {
    REACT_APP_URL_GET_TOKEN,
    REACT_APP_EMAIL,
    REACT_APP_API_KEY,
    REACT_APP_URL_GET_USER,
    REACT_APP_URL_SET_USER
} = process.env;

export const UserState = ({ children }) => {
    const initialState = {
        userList: [],
        token: null,
        params: {}
    }

    const [state, dispatch] = useReducer(userReducer, initialState);

    const setToken = async () => {
        if(state.token !== null){
            return state.token;
        }
        return await getToken();
    }

    const getToken = async () => {
       const response = await axios.post(REACT_APP_URL_GET_TOKEN, {
            email: REACT_APP_EMAIL,
            api_key: REACT_APP_API_KEY
        }).then(res => {
            if(res.data.token === undefined){
                return false;
            }
           dispatch({
               type: AUTH,
               payload: res.data.token
           });

           return res.data.token;
        }).catch((err) => console.log(err));

       return response;
    }

    const setUser = async (params, t = setToken()) =>{
        const token = await t.then(res => res);
        const res = axios.post(REACT_APP_URL_SET_USER, params, {
            headers:{
                'X-ALFACRM-TOKEN': token
            }
        }).then(res => {
            dispatch({
                type: ADD_USER,
                payload: res.data.model
            });
            return res.data;
        })
    }

    const getUser = async (params, token) =>{
        const users = await axios.post(REACT_APP_URL_GET_USER, params, {
            headers:{
                'X-ALFACRM-TOKEN': token
            }
        }).then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data.items
            });
            return res.data;
        }).catch(() => {
            dispatch({
                type: AUTH,
                payload: null
            });
        });

        return users;
    }

    const fetchUser = async (params = state.params, t = setToken()) => {
        const token = await t.then(res => res);
        const users = state.userList.length === 0
            || params.page !== undefined
            ? await getUser(params, token)
            : state.userList;

        return users;
    }

    //getToken();

    return(
        <UserContext.Provider value={{
            fetchUser, setUser,
            userList: state.userList,
            params: state.params
        }}>
            { children }
        </UserContext.Provider>
    )
}
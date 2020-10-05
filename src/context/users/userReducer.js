import {ADD_USER, AUTH, GET_USERS, PARAMS} from "../types";

const handlers = {
    [GET_USERS]: (state, {payload}) => ({...state, userList: payload}),
    [ADD_USER]: (state,{payload}) => ({
        ...state,
        userList: [...state.userList, payload]
    }),
    [AUTH]: (state, {payload}) =>({...state, token: payload}),
    [PARAMS]: (state, {payload}) =>({...state, params: payload}),
    DEFAULT: state => state
}

export const userReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}
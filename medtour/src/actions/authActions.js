
import axios from 'axios';
import { returnErrors } from "./errorActions";

import{
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

}
from './types';
import { bindActionCreators } from 'redux';


//Check token and load user

export const loadUser = () => (dispatch, getState) => { //asynchron
    //user Loading
    dispatch({type: USER_LOADING});

    axios.get('/api/auth/user', tokenConfig( getState ) )
    .then( res => dispatch({
        type: USER_LOADED,
        payload: res.data
        })
    )
    .catch( err => {
        dispatch( returnErrors(err.response.data, err.response.status) );
        dispatch({
            type: AUTH_ERROR
        })
    })

}

//Register new User
export const register = ({name, surname, userName, password, email}) => dispatch =>{

    //Headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }

    //Request body
    const body = JSON.stringify({ name, surname, userName, password, email});

    axios.post('/api/users', body, config)
    .then( res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch( err => {
        dispatch( returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL') );
        dispatch({
            type: REGISTER_FAIL
        });
    });

}


//Logout user

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

//Login user

export const login = ( {email, password} ) => dispatch =>{

    //Headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }

    //Request body
    const body = JSON.stringify({ email, password});

    axios.post('/api/auth', body, config)
    .then( res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch( err => {
        dispatch( returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL') );
        dispatch({
            type: LOGIN_FAIL
        });
    });


}

//Setup config/header and token 

export const tokenConfig = (getState) =>{
    //Get token from local storage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers:{
            "Content-type":"application/json"   //sending json
        }
    }

    //if token, add to headers
    if( token){
        config.headers['x-auth-token'] = token;
    }

    return config;
}






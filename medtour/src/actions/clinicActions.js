import axios from 'axios';
import {GET_CLINICS, ADD_CLINIC, DELETE_CLINIC, CLINICS_LOADING} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getClinics = () => dispatch => {

    dispatch( setClinicsLoading() );

    axios
        .get('/api/clinics')
        .then(res => 
            dispatch({
                type: GET_CLINICS,
                payload: res.data
            }) 
        )
        .catch( err => dispatch( returnErrors(err.response.datea, err.response.status) ) );
}

export const deleteClinic = (id) => (dispatch, getState) => {
    axios.delete(`/api/clinics/${id}`, tokenConfig(getState) ).then(res =>
        dispatch({ //dispatch to reducer
            type: DELETE_CLINIC,
            payload: id
        }) 
    )
    .catch( err => dispatch( returnErrors(err.response.datea, err.response.status) ) );
    // return {
    //     type: DELETE_CLINIC,
    //     payload: id
    // }
}

export const addClinic = (clinic) => (dispatch, getState) => {
    axios
        .post('/api/clinics', clinic, tokenConfig(getState))
        .then( res => 
            dispatch({
                type: ADD_CLINIC,
                payload: res.data
            })
        )
        .catch( err => dispatch( returnErrors(err.response.datea, err.response.status) ) );

}

export const setClinicsLoading = () =>{
    return{
        type: CLINICS_LOADING
    }
}




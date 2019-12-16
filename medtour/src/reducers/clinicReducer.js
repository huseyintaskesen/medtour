
import {GET_CLINICS, ADD_CLINIC, DELETE_CLINIC, CLINICS_LOADING} from '../actions/types';


const initialState = {
    // clinics: [
    //     { id: uuid(), name: 'Eggs'},
    //     { id: uuid(), name: 'Milk'},
    //     { id: uuid(), name: 'Steak'},
    //     { id: uuid(), name: 'Water'},
    //     { id: uuid(), name: 'Phones'}
    // ]

    clinics: [],
    loading: false
}


export default function(state = initialState, action){

    switch( action.type ){
        case GET_CLINICS:
            return {
                ...state,
                clinics: action.payload,
                loading: false
            }
        case DELETE_CLINIC:
            return{
                ...state,
                clinics: state.clinics.filter(item => item._id !== action.payload )
            }
        case ADD_CLINIC:
            return{
                ...state,
                clinics: [action.payload, ...state.clinics] //adding to list now
            }
        case CLINICS_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
import {
    SET_ERROR, 
    SET_LOADING,
    SET_NEW_USER,
    GET_USERS
} from '../actions/types';
 
const initialState = {
    loading: false,
    error: '',
    users:[]
}
const UsuarioReducer =  (state = initialState, action) => {
    switch(action.type){
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_NEW_USER:
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        default:
            return state;
    }
} 

export default UsuarioReducer;
import { 
   // SET_ERROR, 
   GET_USERS,
    SET_NEW_USER
} from './types';

import axios from 'axios';

export const createUser =  (user) => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: user.nombre, year: 2021})
    };

    fetch('/api/users', requestOptions)
    .then(response => response.json())
    .then(data => {
        dispatch({
                    type:SET_NEW_USER,
                    payload: data.user
                })        
            }            
        );
}

export const getUsers = () => dispatch => {
    axios.get('/api/users')
    .then((json) => 
        dispatch({
            type : GET_USERS,
            payload: json.data.users
        }))
} 
import {
    DELETE_USER,
    GET_USERS,
    SET_ERROR,
    UPDATE_USER
} from './types';

import axios from 'axios';

export const getUsers = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/users');

        dispatch({
            type: GET_USERS,
            payload: data.users
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const setEditUser = (elem) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_USER,
            payload: elem
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}


export const deleteUser = (id) => async dispatch => {
    try {
        const { data } = await axios.post('/api/users/delete/'+id);
        console.log(data);
        dispatch({
            type: DELETE_USER,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

import {FETCH_USER_FAILURE , FETCH_USER_SUCCESS , FETCH_USER_REQUEST} from './userTypes';
import axios from 'axios';


export const fetchUsersRequest = () => {
    return{
        type  : FETCH_USER_REQUEST
    }    
}


export const fetchUsersSuccess = (users) => {
    return{
        type  : FETCH_USER_SUCCESS,
        payload : users
    }    
}



export const fetchUsersFailure = (err) => {
    return{
        type  : FETCH_USER_FAILURE,
        payload : err
    }    
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            let data = res.data;
            dispatch(fetchUsersSuccess(data));
        })
        .catch(error => {
            let err = error.message;
            dispatch(fetchUsersFailure(err));
        })
    }
}
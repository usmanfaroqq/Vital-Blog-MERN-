import axios from 'axios';
import {CREATE_POST, SET_LOADER, CLOSE_LOADER} from "../types/PostTypes";
const token = localStorage.getItem('myToken');
export const createAction = (formData) => {
    return (dispatch) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        } catch (error) {
            
        }
    }
}
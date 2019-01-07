import Api from '../Api';
import * as actionTypes from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

const api = new Api();

export const createShow = () => {



    return dispatch => {
        dispatch(beginAjaxCall());


        return dispatch({ type: actionTypes.CREATE_SHOW_SUCCESS, payload: api.createShow() })
    }
}

export const getShow = (id) => {

    return dispatch => {
        dispatch(beginAjaxCall());
        return dispatch({ type: actionTypes.GET_SHOW_SUCCESS, payload: api.getShow(id) })



    }
}
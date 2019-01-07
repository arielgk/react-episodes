import Api from '../Api'
import * as actionTypes from './actionTypes'
import {beginAjaxCall} from './ajaxStatusActions'

const api = new Api()

export const createShow = () => {
  return dispatch => {
    return api.createShow().then(show => {
      dispatch(beginAjaxCall())
       dispatch({type: actionTypes.CREATE_SHOW_SUCCESS, payload: show })
    }).catch(error => {
      throw (error)
    })

  }
}

export const getShow = (id) => {
  return dispatch => {
    dispatch(beginAjaxCall())
    return dispatch({type: actionTypes.GET_SHOW_SUCCESS, payload: api.getShow(id)})
  }
}

/* eslint-disable no-unused-vars */
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_ALL_PRODUCT_BEGIN,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ABOUT_DATA_BEGIN,
  GET_ABOUT_DATA_SUCCESS,
  GET_CONTACT_DATA_BEGIN,
  GET_CONTACT_DATA_SUCCESS
} from '../actions'

const products_reducer = (state, action) => {
  if(action.type === SIDEBAR_OPEN){
    return {...state , isSideBarOpen:true}
  }
  if(action.type === SIDEBAR_CLOSE){
    return {...state , isSideBarOpen:false }
  }
  if(action.type === GET_PRODUCTS_BEGIN){
    return {...state , is_loading : true}
  }
  if(action.type === GET_PRODUCTS_SUCCESS){
    return {...state , is_loading:false , products:action.payload }
  }
  if(action.type === GET_ALL_PRODUCT_BEGIN){
    return {...state , is_loading : true}
  }
  if(action.type === GET_ALL_PRODUCT_SUCCESS){
    return {...state , is_loading:false , allProduct:action.payload }
  }
  if(action.type === GET_SINGLE_PRODUCT_BEGIN){
    return {...state , SINGLE_PRODUCT_loading: true}
  }
  if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
    return {...state , SINGLE_PRODUCT_loading:false , SINGLE_PRODUCTS:action.payload }
  }
  if(action.type === GET_ABOUT_DATA_BEGIN){
    return {...state , ABOUT_DATA_LOADING: true}
  }
  if(action.type === GET_ABOUT_DATA_SUCCESS){
    return {...state , ABOUT_DATA_LOADING:false , ABOUT_DATA:action.payload }
  }

  if(action.type === GET_CONTACT_DATA_BEGIN){
    return {...state ,   CONTACT_DATA_LOADING: true}
  }
  if(action.type === GET_CONTACT_DATA_SUCCESS){
    return {...state ,   CONTACT_DATA_LOADING:false , CONTACT:action.payload }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer

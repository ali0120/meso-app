/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { productCategory_url  as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_BEGIN,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ABOUT_DATA_BEGIN,
  GET_ABOUT_DATA_SUCCESS,
  GET_CONTACT_DATA_BEGIN,
  GET_CONTACT_DATA_SUCCESS
} from '../actions'

const initialState = {
  isSideBarOpen : false,
  is_loading : false,
  products: [],
  SINGLE_PRODUCT_loading:false,
  ABOUT_DATA_LOADING: false,
  CONTACT_DATA_LOADING: false,
  SINGLE_PRODUCTS:[],
  ABOUT_DATA : [],
  CONTACT:[],
  allProduct : [],
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state , dispatch] = useReducer(reducer, initialState)
  const openSidebar = ()=>{
    dispatch({type:SIDEBAR_OPEN})
  }
  const closeSidebar = ()=>{
    dispatch({type:SIDEBAR_CLOSE})
  }
  
  const fetchCategory = async (url)=>{
    dispatch({type:GET_PRODUCTS_BEGIN})
    try {
      const response = await axios.get(url)
      const data = response.data
      const{allCategories} = data
      if(allCategories){
        const newCategory = allCategories.map((item)=>{
          const {
            name,
            category_id
          } = item.data
          const {
            main_image,
            id
          } = item
          return {
            name,
            id,
            category_id,
            main_image
          }
        })
        dispatch({type:GET_PRODUCTS_SUCCESS, payload: newCategory})
      }
     
    }catch (error) {
      console.log(error)
    }

  }
  const featchAllProducts = async(url)=>{
    dispatch({type:GET_ALL_PRODUCT_BEGIN})
    try {
      const response = await axios.get(url)
      const allProduct = response.data
      const{allProducts} = allProduct
      if(allProducts){
        const allProduct = allProducts.map((item)=>{
          const {
            id,
            title,
            content
          } = item.data
          const {
            main_image,
            id:prId,
            total_quantity,
            last_price,
          } = item
          return {
            id,
            prId,
            title,
            content,
            main_image,
            total_quantity,
            last_price,
          }
        })
        dispatch({type: GET_ALL_PRODUCT_SUCCESS, payload: allProduct})
      }
    } catch (error) {
      console.log(error)
    }
  }
  const featchSingleProducts = async(url)=>{
    dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
    try {
      const response = await axios.get(url)
      const singleProduct = response.data
      const{product} = singleProduct
     
      const {last_price,product_images , total_quantity ,id } = product
      const {title ,content} = product.data
      const newProduct = {
        last_price,product_images , total_quantity , id,  title ,content , 
      }
      dispatch({type:GET_SINGLE_PRODUCT_SUCCESS, payload: newProduct})
    } catch (error) {
      console.log(error)
    }
  }
  const featchAboutData = async (url)=>{
    dispatch({type:GET_ABOUT_DATA_BEGIN})
    try {
      const response = await fetch(url)
      const data = await response.json()
      const {about} = data
      const {id,vision_image } = about
      const {vision_title ,vision_content , mission_title , mission_content , value_title , value_content , about_title , about_content} = about.data
      const newProduct = {
        id,vision_image , vision_title ,vision_content , mission_title , mission_content , value_title , value_content , about_title , about_content
      }
      dispatch({type:GET_ABOUT_DATA_SUCCESS, payload: newProduct})
    } catch (error) {
      console.log(error)
    }
  }



  const featchContactData = async (url)=>{
    dispatch({type:GET_CONTACT_DATA_BEGIN})
    try {
      const response = await fetch(url)
      const data = await response.json()
      const {contact} = data
      const {id,email , phone , another_phone } = contact
      const {address} = contact.data
      const newContact = {
        id,email , phone, address , another_phone
      }
      dispatch({type:GET_CONTACT_DATA_SUCCESS, payload: newContact})
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    fetchCategory(url)
  }, [])
  
  return (
    <ProductsContext.Provider value={{
      ...state,
      openSidebar,
      closeSidebar,
      featchSingleProducts,
      featchAllProducts,
      featchAboutData,
      featchContactData
    }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
export  {  ProductsContext }
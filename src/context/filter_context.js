/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filter_products:[],
  all_products:[],
  grid_view : true,
  sort : 'price-lowest',
  filters:{
    min_price:0,
    max_price:0,
    price:0,
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const{allProduct} = useProductsContext()
  const [state , dispatch] = useReducer(reducer , initialState)
  const setGridView = ()=>{
    dispatch({type:SET_GRIDVIEW})
  }
  const setListView = ()=>{
    dispatch({type:SET_LISTVIEW})
  }
  const updateSort=(e)=>{
    let value = e.target.value
    dispatch({type:UPDATE_SORT , payload: value})
  }
  useEffect(() => {
    dispatch({type:LOAD_PRODUCTS , payload:allProduct})
  }, [allProduct])
  useEffect(() => {
    dispatch({type:SORT_PRODUCTS})
  }, [allProduct , state.sort ])
  return (
    <FilterContext.Provider value={{
      ...state,
      setGridView,
      setListView,
      updateSort,
    }}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}

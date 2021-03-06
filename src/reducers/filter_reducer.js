/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS){
    let maxPrice = action.payload.map((p)=>p.last_price)
    maxPrice = Math.max(...maxPrice)
    return {...state , filter_products:[...action.payload] , all_products:[...action.payload],
      filters:{
        ...state.filters , max_price:maxPrice , price:maxPrice
      }
    }

  }
  if(action.type === SET_GRIDVIEW){
    return {...state, grid_view:true}
  }
  if(action.type === SET_LISTVIEW){
    return {...state, grid_view:false}
  }
  if(action.type === UPDATE_SORT){
    return {...state , sort:action.payload}
  }
  if(action.type === SORT_PRODUCTS){
    const {sort , filter_products} = state
    let tempProduct = [...filter_products]
    if(sort === 'price-lowest'){
      tempProduct = tempProduct.sort((a,b)=>a.price-b.price)
    }
    if(sort === 'price-highest'){
      tempProduct = tempProduct.sort((a,b)=>b.price-a.price)
    }
    /* if(sort === 'name-a'){
      tempProduct = tempProduct.sort((a,b)=>a.name.localeCompare(b.name))
    }
    if(sort === 'name-z'){
      tempProduct = tempProduct.sort((a,b)=>b.name.localeCompare(a.name))
    } */
    return {...state ,  filter_products : tempProduct}
  }
  if(action.type === UPDATE_FILTERS){
    const {name,value} = action.payload
    return{...state , filters:{...state.filters,[name]:value}}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer

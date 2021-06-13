
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useFilterContext } from '../context/filter_context'
import { useProductsContext } from '../context/products_context'
import GridView from './GridView'
import ListView from './ListView'
const url ='http://meso.be4maps.com/api/home/products?api_username=ahmed&api_password=123456&api_lang=en'
const AllProducts = () => {
  const {  grid_view } = useFilterContext()
  const {featchAllProducts ,  SINGLE_PRODUCT_loading:loading , allProduct:products} = useProductsContext()
  useEffect(() => {
    featchAllProducts(url)
  }, [])
  if(products < 1){
    return <p>no item found</p>
  }
  if(grid_view === false) {
    return <ListView products = {products}/>
  }
  return (
    <GridView products={products} />
  )
}

export default AllProducts

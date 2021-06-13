
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useFilterContext } from '../context/filter_context'
import { singlePage_url as url } from '../utils/constants'
import { useProductsContext } from '../context/products_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {id} = useParams()
  const {  grid_view } = useFilterContext()
  const {featchAllProducts , allProduct:products} = useProductsContext()
  useEffect(() => {
    featchAllProducts(`${url}${id}`)
  }, [id])
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

export default ProductList

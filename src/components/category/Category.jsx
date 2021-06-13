/* eslint-disable no-unused-vars */
import React  from 'react'
import styled from 'styled-components'
import { GridList , GridListTile ,GridListTileBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useProductsContext } from '../../context/products_context'
import { Link } from 'react-router-dom'
import './Category.css'
const useStyles = makeStyles(() => ({
  title: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    fontSize: '14px',
    fontWeight: '600',
    background:' #fff',
    padding: '12px 20px',
    boxShadow: '1px 1px 0 0  rgb( 0 0 0 / 10%)',
    minWidth: '150px',
    textAlign: 'center',
    transform: 'translateX(-50%)',
    cursor : 'pointer',
    border: 'none'
  },
  titleBar: {
    background:
        'transparent',
  },
  listItem:{
    display: 'grid',
    gridTemplateColumns: 'repeat(6,1fr)',
  }
}))
function Category() {
  const {products} = useProductsContext()
  const classes = useStyles()
  return (
    <div className="section-center gallery" style={{padding: '40px 0'}}>
      <div className='list_item'  >
        {products.map((item)=>{
          const imgData = item.main_image
          const base_url = 'http://meso.be4maps.com/public/upload/'
          const main_image = `${base_url}${imgData}`
          return(
            <GridListTile  key={item.id}  className="pics" style={{ width:'100%' , height:'auto' }}  >
              <img  src={`http://meso.be4maps.com/public/upload/${imgData}`} alt={item.description} />
              <GridListTileBar
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <Link to={`/category/${item.category_id}`} key={item.category_id} className={classes.title} >
                    {item.name}
                  </Link>
                }
              />
            </GridListTile>
          )
        })}
      </div>
      
    </div>
  )
} 

export default Category

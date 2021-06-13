/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  ProductImages,
  AddToCart,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const {id} = useParams()
  const {featchSingleProducts ,  SINGLE_PRODUCT_loading:loading , SINGLE_PRODUCTS:product} = useProductsContext()
  useEffect(() => {
    featchSingleProducts(`${url}${id}`)
  }, [id])
  if(loading){
    return<Loading />
  }
  const {last_price,product_images, total_quantity , id:prId , title ,content } = product
  function removeHTML(str){ 
    var tmp = document.createElement('DIV')
    tmp.innerHTML = str
    return tmp.textContent || tmp.innerText || ''
  }
  return (
    <Wrapper>
      <PageHero title={title} product />
      <div className="section section-center pag">
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={product_images} />
          <section className="content">
            <h2>{title}</h2>
            <h5 className="price">{formatPrice(last_price)}</h5>
            <p className="desc">{removeHTML(content)}</p>
            <p className="info">
              <span>Avilable</span>
              {total_quantity > 0 ? 'in stock' : 'out of stock'}
            </p>
            <p className="info">
              <span>SKU:</span>
              {prId}
            </p>
            <hr/>
            <AddToCart products={product} />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage

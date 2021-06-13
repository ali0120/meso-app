/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { BiCart  } from 'react-icons/bi'

import { Link } from 'react-router-dom'

const Product = ({prId , title , main_image , last_price }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={`http://meso.be4maps.com/public/upload/${main_image}`} alt={title}  />

        <Link to={`/products/${prId}`}className="link">
          <BiCart/>
        </Link>
      </div>
      <footer>
        <h5>{title}</h5>
        <p>{formatPrice(last_price)}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    width: 250px !important;
    margin:0;
    top:0;
    background-color: #F1F1F1;
    transform : translateY(0)
  }
  img {
    width: 100%;
    height: 200px !important;
    display: block;
    object-fit: containn;
    border-radius: var(--radius);
    transition: var(--transition);
    height:200px;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    flex-direction : column;
  }
  footer h5,
  footer p {
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product

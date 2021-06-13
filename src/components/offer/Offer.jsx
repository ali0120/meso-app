/* eslint-disable no-unused-vars */
import React, {Fragment, useEffect , useState} from 'react'
import { formatPrice } from '../../utils/helpers'
import styled from 'styled-components'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

import './style.css'

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core'
import { BiCart  } from 'react-icons/bi'


import { Link } from 'react-router-dom'

// install Swiper modules
SwiperCore.use([Pagination])
const url ='http://meso.be4maps.com/api/product/offers?api_username=ahmed&api_password=123456&api_lang=en'

function Offer() {
  const [offer ,setOffer] = useState([])
  const [loading , setLoading] = useState(true)
  const fetchCategory = async ()=>{
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      const{allProducts} = data
      if(allProducts){
        const newProduct = allProducts.map((item)=>{
          const {
            id,
            main_image,
            last_price
          } = item
          const {
            title,

          } = item.data
          return {
            id,
            main_image,
            last_price,
            title
          }
        })
        setOffer(newProduct)
        setLoading(false)
      }
      else{
        setOffer([])
        setLoading(false)
      }
    }catch (error) {
      console.log(error)
      setLoading(false)
    }
  
  }
  useEffect(() => {
    fetchCategory()
  }, [])
  return (
    <Wrapper>
      <h3 className="section-title">
        <span>offer</span>
      </h3>
      <Swiper style ={{padding : ' 40px 0 80px 0'}}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 2
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        className="mySwiper"
      >
        {offer.map((item)=>{
          return(
              
            <SwiperSlide key={item.id} className='container' >
              <img src={`http://meso.be4maps.com/public/upload/${item.main_image}`}alt={item.title} />
              <Link to={`/products/${item.id}`}className="link">
                <BiCart/>
              </Link>
              <div className="desc-container">
                <h3 className="product-title">
                  {item.title}
                </h3>
                <h4 className='price' >{formatPrice(item.last_price)}</h4>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    width: 250px !important;
    margin:0;
    top:0;
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
export default Offer
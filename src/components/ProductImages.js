/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({images=[{image_name:''}]}) => {
  const [main , setMain] = useState(images[0])
  return (
    <Wrapper>
      <img src={`http://meso.be4maps.com/public/upload/${main.image_name}`} alt="" className='main'/>
      <div className="gallery">
        {images.map((image,index)=>{
          return <img key={index}src={`http://meso.be4maps.com/public/upload/${image.image_name}`} alt="" onClick={()=>setMain(images[index])}  className={image.image_name === main.image_name ?'active' : ''  }/>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 400px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 450px;
      object-fit: contain;
      width: 100%;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages

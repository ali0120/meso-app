/* eslint-disable no-unused-vars */

import React , {useEffect , useState} from 'react'
import styled from 'styled-components'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import './Style.css'

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation])

const url ='http://meso.be4maps.com/api/home/sliders?api_username=ahmed&api_password=123456&api_lang=en'

export default function Slider() {
  const [image ,setImage] = useState([])
  const [loading , setLoading] = useState(true)
  const fetchCategory = async ()=>{
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      const{allSliders} = data
      if(allSliders){
        const newImage = allSliders.map((item)=>{
          const {
            image,
            id
          } = item
          return {
            id,
            image
          }
        })
        setImage(newImage)
        setLoading(false)
      }
      else{
        setImage([])
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
    <Wrapper className='home_slider'>
      <Swiper spaceBetween={30} loop={true} pauseOnMouseEnter={true} grabCursor={true} centeredSlides={true} autoplay={{
        'delay': 3000,
        'disableOnInteraction': true
      }} pagination={{
        'clickable': true
      }} navigation={false} className="mySwiper">
        {image.map((item)=>{
          return(
            <SwiperSlide  key={item.id} style={{maxWidth: '100%'}}  > 
              <img src={`http://meso.be4maps.com/public/upload/${item.image}`} alt="1" />
              <div className="caption-wrap  section-center">
                <div className="container">
                  <div className="left_right">
                    <h4 className='caption-subtitle  section-center'>
                     SUMMER 2021
                    </h4>
                    <h3 className='caption-title '>
                    New Arrival Collection
                    </h3>
                    <button>
                    Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
     
      </Swiper>
    </Wrapper>
  )
}
const Wrapper = styled.div`

`
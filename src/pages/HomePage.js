import React from 'react'
import Category from '../components/category/Category'
import Offer from '../components/offer/Offer'
import Slider from './../components/Slider/Slider'
const HomePage = () => {
  return  (
    <main>
      <Slider />
      <Category />
      <Offer />
    </main>
  )
}

export default HomePage

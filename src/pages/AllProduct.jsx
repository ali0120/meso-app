import React from 'react'
import { PageHero, Sort } from '../components'
import AllProducts from '../components/AllProducts'
import styled from 'styled-components'

function AllProduct() {
  return (
    <main>
      <PageHero title="products"/>
      <Wrapper className="page">
        <div className="section-center products">
          <div>
            <Sort />
            <AllProducts />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
`


export default AllProduct

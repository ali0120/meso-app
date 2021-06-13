/* eslint-disable no-unused-vars */
import React , {useEffect , useState} from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
import { useProductsContext } from '../context/products_context'
const url = 'http://meso.be4maps.com/api/about?api_username=ahmed&api_password=123456&api_lang=en'
import {
  Loading,
} from '../components'
const AboutPage = () => {
  const {featchAboutData ,  ABOUT_DATA_LOADING:loading ,  ABOUT_DATA :About} = useProductsContext()
  useEffect(() => {
    featchAboutData(url)
  }, [])
  if(loading){
    return<Loading />
  }
  const {id , about_title , about_content ,vision_title , vision_content} = About
  function removeHTML(str){ 
    var tmp = document.createElement('DIV')
    tmp.innerHTML = str
    return tmp.textContent || tmp.innerText || ''
  }
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} />
        <article key={id}>
          <div className='title'>
            <h2>{about_title}</h2>
            <div className="underline"></div>
          </div>
          <p >
            {removeHTML(about_content)}
          </p>
          <div className='title'>
            <h2 style = {{marginTop: '20px'}}>{vision_title}</h2>
          </div>
          <p>
            {removeHTML(vision_content) }
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage

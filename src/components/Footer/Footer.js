/* eslint-disable no-unused-vars */
import React , {useState , useEffect} from 'react'
import './StyledFooter.css'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail , HiOutlinePhone } from 'react-icons/hi'
import { SiGooglemaps } from 'react-icons/si'
import { useProductsContext } from '../../context/products_context'
const url = 'https://meso.be4maps.com/api/contact?api_username=ahmed&api_password=123456&api_lang=en'
import {
  Loading,
} from '../../components'
function Footer() {
  const {products} = useProductsContext()
  const {featchContactData ,  CONTACT_DATA_LOADING:loading , CONTACT:contact} = useProductsContext()
  
  useEffect(() => {
    featchContactData(url)

  }, [])

  if(loading){
    return<Loading />
  }
  const {id,email , phone, address , another_phone} = contact

  return (
    <section className="footer--component">
      <div className="footer--container">
        <section className="footer--description">
          <h1 className="footer--description__heading">
           join our execlusive membership to receive the latest news and trends
          </h1>
          <p className="footer--description__text">
           You can unsubscribe any time
          </p>
        </section>
        <section className="footer--input--area">
          <form action="">
            <input type="email" placeholder="Your Email" className="footer__input"/>
            <button className='btn--outline' onClick={(e)=>e.preventDefault()}>Subscribe</button>
          </form>
        </section>
        <section className="footer--links">
          <div className="footer--links__wrapper">
            <div className="footer--links--wrapper__item">
              <div className="footer--links--wrapper__item__heading">
                <h2>Categories</h2>
              </div>
              <div className="footer--links--wrapper__item__links">
                {products.map((item)=>{
                  return( 
                    <Link to={`/category/${item.category_id}`} key={item.category_id}   >
                      {item.name}
                    </Link>                   
                  )
                })}
              </div>
            </div>
            <div className="footer--links--wrapper__item">
              <div className="footer--links--wrapper__item__heading">
                <h2>Contact</h2>
              </div>
              <div className="footer--links--wrapper__item__links">
                <div className="info-container" style= {{display : 'flex' , alignItems: 'center'}}>
                  <div className="info-icon" style= {{display : 'flex', fontSize:'18px'}} >
                    < HiOutlineMail />
                  </div>
                  <div className="info-data" style={{marginLeft : '5px'}}>
                    <Link to ='/'>{email}</Link>
                  </div>
                </div>
                
                <div className="info-container" style= {{display : 'flex' , alignItems: 'center'}}>
                  <div className="info-icon"style= {{display : 'flex', fontSize:'18px'}}>
                    < HiOutlinePhone />
                  </div>
                  <div className="info-data"style={{marginLeft : '5px'}}>
                    <Link to='/'>{phone}</Link>
                  </div>
                </div>

                <div className="info-container" style= {{display : 'flex' , alignItems: 'center'}}>
                  <div className="info-icon"style= {{display : 'flex', fontSize:'18px'}}>
                    < HiOutlinePhone />
                  </div>
                  <div className="info-data"style={{marginLeft : '5px'}}>
                    <Link to='/'>{another_phone}</Link>
                  </div>
                </div>

                <div className="info-container" style= {{display : 'flex' , alignItems: 'center'}}>
                  <div className="info-icon"style= {{display : 'flex' , fontSize:'18px'}}>
                    < SiGooglemaps />
                  </div>
                  <div className="info-data"style={{marginLeft : '5px'}}>
                    <Link to='/'>{address}</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer--links--wrapper__item">
              <div className="footer--links--wrapper__item__heading">
                <h2>About</h2>
              </div>
              <div className="footer--links--wrapper__item__links">
                <Link to='/about'>about us</Link>
                <Link to='/'>terms and condition</Link>
                <Link to='/'>privacy policy</Link>
                <Link to='/'>FAQ</Link>
              </div>
            </div> 
          </div>
        </section>
        <section className="footer--socialmedia">
          <div className="footer--socialmedia__logo">
            <div className="logo--ico">
              <Link to='/'>
                <MdFingerprint />
              </Link>
            </div>
            <div className="logo--name">
              <Link to='/'>
                Meso
              </Link>
            </div> 
          </div>
          <small>Meso &#169; {new Date().getFullYear()}</small>
          <div className="footer--socialmedia__icons">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaInstagram />
            </Link> 
            <Link>
              <FaTwitter />
            </Link>   
            <Link>
              <FaLinkedin />
            </Link>  
          </div>
        </section>
      </div>
    </section>
  )
}

export default Footer
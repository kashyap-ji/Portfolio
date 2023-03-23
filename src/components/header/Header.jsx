import React from 'react'
import './Header.css'
import ME from '../../images/myphoto.webp'
import HeaderSocials from './HeaderSocials'
import { RiFontSize } from 'react-icons/ri'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3 className='greet'>Hello I'm</h3>
        <h1 className='name'>NAME HERE</h1>
        <h5 className="greet">Data Analyst</h5>
        
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
    
  )
}

export default Header
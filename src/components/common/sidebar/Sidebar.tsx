import Aos from 'aos'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../../assets/logo.png'

import { Categories } from './categories/Сategories'

import 'aos/dist/aos.css'
import './sidebar.scss'
export const Sidebar: React.FC = () => {
  Aos.init()
  const [openSlider, setOpenSlider] = useState(false)
  return (
    <div data-aos='fade-right' className='sidebar_container'>
      <div className='sidebar_block'>
        <div className='content_flex'>
          <NavLink to='/' className='img_container_bar'>
            <img src={logo} />
          </NavLink>
          <Categories openSlider={openSlider} setOpenSlider={setOpenSlider} />
        </div>
      </div>
    </div>
  )
}

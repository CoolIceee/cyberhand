import { useState } from 'react'

import logo from '../../../assets/logo.png'

import { Categories } from './categories/Сategories'

import './sidebar.scss'
export const Sidebar: React.FC = () => {
  const [openSlider, setOpenSlider] = useState(false)
  return (
    <div className='sidebar_container'>
      <div
        className='sidebar_block'
        style={openSlider ? { width: '100%', transition: 'all 0.5s ease-out' } : { width: '50%', transition: 'all 0.5s ease-out' }}
      >
        <div className='content'>
          <div className='header_logo'>
            <div className='logo_block'>
              <img src={logo} />
            </div>
          </div>
          <Categories openSlider={openSlider} setOpenSlider={setOpenSlider} />
        </div>
      </div>
    </div>
  )
}

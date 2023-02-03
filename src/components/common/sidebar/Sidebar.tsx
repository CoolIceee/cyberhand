import { useState } from 'react'

import logo from '../../../assets/logo.png'

import { Categories } from './categories/Сategories'

import './sidebar.scss'
export const Sidebar: React.FC = () => {
  const [openSlider, setOpenSlider] = useState(false)
  return (
    <div className='sidebar_container'>
      <div className='sidebar_block'>
        <div className='content_flex'>
          <div className='img_container_bar'>
            <img src={logo} />
          </div>
          <Categories openSlider={openSlider} setOpenSlider={setOpenSlider} />
        </div>
      </div>
    </div>
  )
}

import { Route, Routes } from 'react-router'

import { HomePage } from '../../page/HomePage'
import { Skills } from '../module/Skills'

import './app.scss'
export const PathFile: React.FC = () => {
  return (
    <div className='main_container'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  )
}

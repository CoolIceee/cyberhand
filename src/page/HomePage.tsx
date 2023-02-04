import Aos from 'aos'

import { Home } from '../components/module/Home'

import '../components/app/app.scss'
export const HomePage: React.FC = () => {
  Aos.init()
  return (
    <div data-aos='fade-left' className='home_container'>
      <Home />
    </div>
  )
}

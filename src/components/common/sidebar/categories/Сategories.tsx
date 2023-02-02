import contact from '../../../../assets/contact.png'
import folder from '../../../../assets/folder.png'
import profile from '../../../../assets/profile.png'
import skils from '../../../../assets/skils.png'
import { OpeningAndClosing } from '../openingAndClosing/OpeningAndClosing'

import './categories.scss'
interface CategoriesProps {
  openSlider: boolean
  setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>
}
export const Categories: React.FC<CategoriesProps> = ({ openSlider, setOpenSlider }) => {
  const textEffect = openSlider ? { width: '90%', transition: 'all 0.6s ease-out' } : { transition: 'all 0.5s ease-out' }
  return (
    <>
      <ul className='categories_container'>
        <li>
          <div className='categories_block'>
            <img className='profile' src={profile} />
          </div>
          <div className='text_main'>
            <span className='profile_text' style={textEffect}>
              Обо мне
            </span>
          </div>
        </li>
        <li>
          <div className='categories_block'>
            <img className='skils' src={skils} />
          </div>
          <div className='text_main'>
            <span className='profile_skils' style={textEffect}>
              Навыки
            </span>
          </div>
        </li>
        <li>
          <div className='categories_block'>
            <img className='folder' src={folder} />
          </div>
          <div className='text_main'>
            <span className='profile_folder' style={textEffect}>
              Проекты
            </span>
          </div>
        </li>
        <li>
          <div className='categories_block'>
            <img className='contact' src={contact} />
          </div>
          <div className='text_main'>
            <span className='profile_contact' style={textEffect}>
              Контакты
            </span>
          </div>
        </li>
      </ul>
      <OpeningAndClosing openSlider={openSlider} setOpenSlider={setOpenSlider} />
    </>
  )
}

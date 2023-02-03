import contact from '../../../../assets/menu/contact.png'
import folder from '../../../../assets/menu/folder.png'
import profile from '../../../../assets/menu/profile.png'
import skils from '../../../../assets/menu/skils.png'

import './categories.scss'
interface CategoriesProps {
  openSlider: boolean
  setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>
}
export const Categories: React.FC<CategoriesProps> = ({ openSlider, setOpenSlider }) => {
  return (
    <>
      <ul className='categories_container'>
        <li>
          <div className='categories_block'>
            <img className='profile' src={profile} />
          </div>
        </li>
        <li>
          <div className='categories_block'>
            <img className='skils' src={skils} />
          </div>
        </li>
        <li>
          <div className='categories_block'>
            <img className='folder' src={folder} />
          </div>
        </li>
        <li>
          <div className='categories_block'>
            <img className='contact' src={contact} />
          </div>
        </li>
      </ul>
    </>
  )
}

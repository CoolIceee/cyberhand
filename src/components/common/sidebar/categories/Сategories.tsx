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
export const Categories: React.FC<CategoriesProps> = ({openSlider, setOpenSlider}) => {
  return (
    <>
      <ul className='categories_navigate_container'>
        <li>
          <div className='profile_style'>
            <img src={profile} />
          </div>
        </li>
        <li>
          <div className='skils_style'>
            <img src={skils} />
          </div>
        </li>
        <li>
          <div className='folder_style'>
            <img src={folder} />
          </div>
        </li>
        <li>
          <div className='contact_style'>
            <img src={contact} />
          </div>
        </li>
      </ul>
      <OpeningAndClosing openSlider={openSlider} setOpenSlider={setOpenSlider} />
    </>
  )
}

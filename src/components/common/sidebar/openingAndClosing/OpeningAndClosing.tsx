import theright from '../../../../assets/theright.png'

import './openingAndClosing.scss'
interface OpeningAndClosingProps {
  openSlider: boolean
  setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>
}
export const OpeningAndClosing: React.FC<OpeningAndClosingProps> = ({ openSlider, setOpenSlider }) => {
  const handleClickOpenSlider = (): void => {
    setOpenSlider(!openSlider)
  }
  return (
    <div className='openndclosing_container'>
      <button
        onClick={() => {
          handleClickOpenSlider()
        }}
        className='openndclosing_button'
        style={
          openSlider
            ? { backgroundColor: '#220c2f8c', transition: 'all 0.5s ease-out' }
            : { backgroundColor: '#4c1a698c', transition: 'all 0.5s ease-out' }
        }
      >
        <div className={'img_container'}>
          <img
            src={theright}
            style={openSlider ? { transform: 'rotate(180deg)', transition: 'all 0.5s ease-out' } : { transition: 'all 0.5s ease-out' }}
          />
        </div>
      </button>
    </div>
  )
}

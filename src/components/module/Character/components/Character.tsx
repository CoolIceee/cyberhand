import './character.scss'
export const Character: React.FC = () => {
  return (
    <div className='character_container'>
      <div className='character_block'>
        <div className='level_panel'>
          Уровень<span className='text_level'> &ensp;JUNIOR</span>
        </div>
        <div className='header_block'>
          <div className='navigate'>
            <div className='navigation_button'>О СЕБЕ</div>
            <div className='navigation_button'>FRONTEND</div>
            <div className='navigation_button'>BACKEND</div>
          </div>
        </div>
      </div>
    </div>
  )
}

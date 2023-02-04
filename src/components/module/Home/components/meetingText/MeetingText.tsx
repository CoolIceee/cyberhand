import Aos from 'aos'

import email from '../../../../../assets/email.png'
import github from '../../../../../assets/github.png'
import tg from '../../../../../assets/tg.png'

import './meetingText.scss'
export const MeetingText: React.FC = () => {
  return (
    <div className='meeting_container'>
      <div className='welcome_text_container'>
        <div className='text_style'>
          <p className='hello_style'>Hello 👋</p>
          <p className='text_after_the_cast'>Glad to see you on this page</p>
          <p className='text_style_feel'>Feel free to contact me - I will only be happy to chat</p>
        </div>
        <div className='line_container'>
          <div className='line_border'>
            <span className='line'></span>
          </div>
          <div className='github_style'>
            <img src={github} />
          </div>
          <div className='tg_style'>
            <img src={tg} />
          </div>
        </div>
      </div>
      <div className='contact_container'>
        <p>Contact</p>
      </div>
      <div className='email_container'>
        <div className='email_flex_bottom_end'>
          <div className='image_email_container'>
            <img src={email} />
          </div>
          <p>magomedcoder@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

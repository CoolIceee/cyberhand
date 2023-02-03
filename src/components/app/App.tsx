import { Sidebar } from '../common/sidebar/Sidebar'

import { PathFile } from './PathFile'

import './app.scss'
export const App: React.FC = () => {
  return (
    <div className='app_container'>
      <Sidebar />
      {/* <PathFile /> */}
    </div>
  )
}

import { NavLink } from 'react-router-dom';
import './style.scss';

export const Home = () => {
  return (
    <div className='home'>
      <NavLink to='/projects'>
        <button className='text-white bg-gray-600 p-4 relative left-[200px] top-[50px] hover:scale-95 dura'>Real Projects</button>
      </NavLink>
      <div className='text-[60px]'>This site is</div>
      <div>
        <span className='text-[32px]'>made using REACT❗</span>
      </div>
      <p className='text-[60px]'>GitHub by Mirabbos-Developer</p>
    </div>
  )
}

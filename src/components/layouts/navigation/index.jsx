import './style.scss';
import { NavLink } from 'react-router-dom';
import { userNavigation } from '@mocks';
import { Container } from '@containers';

export const Navigation = () => {
  return (
    <div className='navigation'>
      <Container type='center'>
        <ul className='flex items-center gap-x-6 pl-[210px]'>
          {
            userNavigation?.map(item => (
              <li key={item.title}>
                <NavLink to={item.path} className='flex gap-x-[5px] pb-[15px] border-b-[3px] border-transparent'>
                  <img src={item.icon} alt="logo" /> {item.title}
                </NavLink>
              </li>
            ))
          }
        </ul>
    </Container>
    </div>
  )
}

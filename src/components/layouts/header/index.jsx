import './style.scss';
import { Container } from '@containers';
import { NavLink, Link } from 'react-router-dom';
import headerIcon from '../../../../public/GitHub.svg'
import { headerTopNavigation } from '@mocks';
import { Input } from '@form';
import { Button } from '@ui'

export const Header = () => {
  return (
    <header className='bg-[#161B22] text-white py-4'>
      <Container type='fluid'>
        <nav className='flex justify-between'>
          <Link>
            <img src={headerIcon} alt="logo" />
          </Link>

          <ul className='flex justify-between items-center gap-8'>
            {headerTopNavigation && headerTopNavigation.map(item => (
              <li key={item.title}>
                <NavLink to={item.link} className='hover:border-b-2'>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className='flex justify-around gap-4'>
            <li>
              <Input placeholder='Search' className='p-2'/>
            </li>
            <li>
              <Button text='Log in' className='p-2 hover:scale-90 duration-150'/>
            </li>
            <li>
              <Button text='Sign Up' className='p-2 hover:scale-90 duration-150'/>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

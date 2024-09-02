import { Container } from '@/components/containers';
import { footerNavigation } from '@mocks';
import './style.scss';
import { Link } from 'react-router-dom';
import logo from '../../../../public/icon.svg'

export const Footer = () => {
  return (
    <footer>
      <Container type='center'>
        <nav>
          <ul>
            <li>
                <a href="https://github.com">
                <img src={logo} alt="logo" className='w-[26px] h-[26px]'/>
                <span>© 2022 GitHub, Inc.</span></a>
            </li>

            {
              footerNavigation?.map(item => (
                <li key={item.link}>
                  <Link to={item.link} className='link'>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </Container>
    </footer>
  )
}

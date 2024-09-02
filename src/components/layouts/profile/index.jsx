import { Link } from 'react-router-dom';
import { userContext } from '@/context/user.context';
import { useContext } from 'react';
import './style.scss';

export const Profile = () => {

  const { name, avatar_url, company, followers, following, location, login, bio } = useContext(userContext);

  return (
    <div className='profile'>

      <img src={avatar_url} alt="profile avatar" />

      <h2>{name}</h2>

      <p>{login}</p>

      <p>{bio} he/him</p>

      <button className='hover:bg-[#34394249]'>Edit profile</button>

      <div className="flex gap-2 items-center mb-[18px]">
        <Link to='/followers' className='links hover:text-blue-600'>
          <i className='bi bi-people'></i>
          <span>{followers} followers</span>
        </Link>

        <Link to='/followings' className='links hover:text-blue-600'>
          <span>{following} followings</span>
        </Link>
      </div>

      <ul>
        <li>
          <a href="https://najottalim.uz/" target="_blank" className='hover:text-blue-600'>
          <i className="bi bi-building"></i>
          <span>{company}</span>
          </a>
        </li>

        <li>
          <i className='bi bi-geo-alt'></i>
          <span className='hover:text-blue-600'>{location}</span>
        </li>

        <li>
          <a href="https://t.me/tatu_mm" target="_blank" className='hover:text-blue-600'>
            <i className='bi bi-link-45deg'></i>
            <span>Telegram: Mirabbos</span>
          </a>
        </li>

        <li>
          <a href="mailto:mirtursunovmirabbos@gmail.com?subject=Job%20invitation%0D%0AПриглашение%20на%20работу%0D%0AIshga%20taklifnoma&body=Your%20resume%20is%20amazing!%20We%20invite%20you%20to%20our%20company!%0D%0AВаше%20резюме%20потрясающее!%20Приглашаем%20Вас%20в%20нашу%20компанию!%0D%0ARezyumeingiz%20juda%20ajoyib!%20Sizni%20o'z%20kompaniyamizga%20lutfan%20taklif%20qilamiz!" className='hover:text-blue-600'>
            <i className='bi bi-envelope'></i>
            <span>Email: Mirabbos@me.com</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

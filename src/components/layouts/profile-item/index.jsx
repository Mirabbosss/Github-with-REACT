import { Button } from '@components/ui';
import { useState, useEffect } from 'react';
import { userAPI } from '@service/user';
import './style.scss';

export const ProfileItem = ({ user_name, isFollowing }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    userAPI.searchUser(user_name).then((res) => {
      setUser(res);
    })
  })

  return (
    <>
      <div className="p-[20px] flex justify-between border-b-2 border-gray-500">

        <div className='flex gap-6'>

          <a href={user?.html_url} target='_blank'>
            <img src={user?.avatar_url} className='w-[60px] h-[60px] rounded-[50%]' alt="avatar" />
          </a>

          <div>

            <a href={user?.html_url} target='_blank'>
              <h2 className='text-white text-[24px] hover:text-blue-600'>{user?.name}<span className='text-[#9198a1] ml-2'>{user?.login}</span></h2>

              <p className='text-[#9198a1]'>{user?.bio}</p>
            </a>

            <div className='text-[#9198a1] flex gap-6'>

              {user?.company && (
                <span>
                  <i className="bi bi-building"></i>
                  {user.company}
                </span>
              )}

              {user?.location && (
                <span>
                  <i className='bi bi-geo-alt'></i>
                  {user?.location}
                </span>
              )}

            </div>

          </div>

        </div>

        <Button className='p-2 text-white bg-[#343942] hover:bg-[#34394249] w-[100px] h-[45px]' text={isFollowing ? 'Unfollow' : 'Follow'} />
      </div>
    </>
  )
}

import './style.scss';
import { useState, useEffect } from 'react';
import { userAPI } from '@service/user';
import { ProfileItem } from '@components/layouts';

export const Followings = () => {

  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState([]);

  const useFetch = async () => {
    try {
      const response = await userAPI.getFollowing();
      setFollowers(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    useFetch();
  }, [])

  return (
    <div>
      {
        loading ? (<span className="loader relative top-[300px] left-[48%]"></span>) : (
          followers && followers.map((follower, index) => (
            <ProfileItem key={index} user_name={follower.login} isFollowing={true} />
          )))
      }
    </div>
  )
}

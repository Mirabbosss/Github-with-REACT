import { useEffect, useState, memo } from 'react';
import { userAPI } from '@service/user';
import './style.scss';
import { Outlet } from 'react-router';
import { Header, Aside, Footer } from '@layouts';
import { Section } from '@components/containers';
import { Navigation } from '@components/layouts';
import { userContext } from '@/context/user.context';

export const Profile = memo(
  () => {

  const [data, setData] = useState({});

  const useFetcher = async () => {
    const res = await userAPI.searchUser(import.meta.env.VITE_MY_PROFILE)
    setData(res);
  }

  useEffect(() => {
    useFetcher();
  }, [])

  return (
    <>
    <userContext.Provider value={data}>
    <Header />
    <Navigation/>

    <Section className='main-section'>
      <Aside />

      <div className='outlet'>
          <Outlet />
      </div>
      </Section>

      <Footer />
      </userContext.Provider>
    </>
  )}
)

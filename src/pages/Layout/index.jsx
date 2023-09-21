import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from 'components/Header';
import MobileMenu from 'components/MobileMenu';
import SideBar from 'components/SideBar';

import { Container } from 'UI';

const Layout = () =>{
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const {pathname} = useLocation();

  useEffect(()=>{
    setMenuIsOpen(false);

    const checkWidth = () =>{
      let screenWidth = window.innerWidth;
      screenWidth > 768 && setMenuIsOpen(false);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () =>  window.removeEventListener('resize', checkWidth);
  },[pathname]);


  return(
    <>
      <SideBar />
      <Header setMenuIsOpen={setMenuIsOpen} />

      <Container>
        <Outlet />
      </Container>
      
      <MobileMenu menuIsOpen ={menuIsOpen} setMenuIsOpen = {setMenuIsOpen} />

    </>
  );
};

export default Layout;
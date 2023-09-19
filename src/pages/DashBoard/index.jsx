import { useEffect, useState } from 'react';

import SideBar from 'components/SideBar';
import MobileMenu from 'components/MobileMenu';

import * as S from './styles';
import Header from 'components/Header';

const DashBoard = () =>{
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  useEffect(()=>{
    window.addEventListener('resize', () =>{
      let screenWidth = window.innerWidth;
      if(screenWidth > 575) setMenuIsOpen(false);
    });

  },[]);

  const toggleMenu =  () =>{
    setMenuIsOpen(state => !state);
  };


  return(
    <S.Wrapper>
      <SideBar />
      
      <S.Content>
        <Header openMenu = {toggleMenu} />
        <MobileMenu menuIsOpen ={menuIsOpen} closeMenu = {toggleMenu} />
      </S.Content>









    </S.Wrapper>

  );
};

export default DashBoard;
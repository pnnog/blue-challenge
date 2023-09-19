import { useEffect, useState } from 'react';

import SideBar from 'components/SideBar';
import MobileMenu from 'components/MobileMenu';

import * as S from './styles';
import Header from 'components/Header';
import StatusCard from 'components/StatusCard';
import statusCards from 'data/statusCards.json';

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
        <S.Container>

          <S.Main>
            <S.Cards>
              {statusCards.map((card)=> <StatusCard
                key={card.id } 
                color={card.color} 
                title={card.title} 
                value={card.value}/>)}
            </S.Cards>
          </S.Main>

          <S.News>
            CONTEÚDO de NOTÍCIAS
          </S.News>
        



        </S.Container>

      </S.Content>






      <MobileMenu menuIsOpen ={menuIsOpen} closeMenu = {toggleMenu} />

    </S.Wrapper>

  );
};

export default DashBoard;
import { useLocation } from 'react-router-dom';

import building from 'assets/building.png';

import * as S from './styles';

const Building = () =>{

  const {pathname} = useLocation();

  const formatter = () =>{  
    let lowerNamePage = pathname.split('/')[1].split('');
    const firstLetter =  lowerNamePage[0].toUpperCase();
    const rest =  lowerNamePage.slice(1);
    const namePage=  [firstLetter].concat(rest).join('');
    return namePage;
  };


  return (
    <>
      <S.Main> 
        <p> A página de <span>{formatter()} </span> ainda está sendo construída com muito carinho pelo nosso time! :D</p> 
        <img src={building} alt="Imagem de projeto sendo desenhado em papel" />
      </S.Main>

    </>

  );
};

export default Building;
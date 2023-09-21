import error from 'assets/error.png';

import * as S from './styles';

const NotFound = () =>{
  return (
    <>
      <S.Main> 
        <p> Não encontramos essa página em nossos servidores. :(</p> 
        <img src={error} alt="Imagem de projeto sendo desenhado em papel" />
      </S.Main>

    </>
  );
    
};

export default NotFound;
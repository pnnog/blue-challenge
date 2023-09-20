import userImage from 'assets/userImage.png';

import * as S from './styles';

const User = ({withLabel}) =>{
  return(
    <S.Wrapper>
      <img src={userImage} alt="Imagem do usuário" />
      {!!withLabel &&  <p>Ana Maria Aguiar</p>}  
    </S.Wrapper>
    
  );
};

export default User;
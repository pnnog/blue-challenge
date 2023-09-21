import * as S from './styles';

const CurrentDate = () =>{
  const getDate = () =>{
    return 'Segunda, 22 de Outubro de 2023';
  };

  const currentDate =  getDate();

  return(
    <S.Wrapper> {currentDate} </S.Wrapper>
  );
};

export default CurrentDate;
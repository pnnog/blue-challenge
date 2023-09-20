import * as S from './styles';
const LastOffer = ({name, date, info}) => {

  return(
    <S.Wrapper>
      
      <S.Item>
        <span> {name} </span>
        <p> Cadastrada em {date} </p>
      </S.Item>

      <S.Item>
        <p> Localidade</p>
        <span>  {info.from}</span>
      </S.Item>

      <S.Item>
        <p>Telefone</p>
        <span>{info.phone}</span>
      </S.Item>

      <S.Item>
        <p> Valor</p>
        <span> R$ {info.value}</span>
      </S.Item>
      
    </S.Wrapper>
  );
};

export default LastOffer;
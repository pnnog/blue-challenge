import * as S from './styles';
import statusCardImage from 'assets/statusCard/hand.png';

const StatusCard = ({color, title, value}) =>{
  return(
    <S.Wrapper $color = {color} >

      {!!title && !!value && (
        <S.Descrition>
          <h3> {value} </h3>
          <p> {title} </p>
        </S.Descrition>
      )}

      <S.Image>
        <img src={statusCardImage} alt="Imagem de uma mão despejando moedas" />
      </S.Image>
    </S.Wrapper>
  );
};

export default StatusCard;
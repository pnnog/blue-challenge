import * as S from './styles';

const UpdateCard = ({card, openModal, expanded = false}) =>{
  return(
    <S.Wrapper>
      {!expanded &&(
        <S.ImageBox>
          <img src={`/updatesCard/${card.image}`} alt={card.title} />
        </S.ImageBox>
      )}
      <S.ContentWrapper>
        <S.Title> {card.title} </S.Title>
        <S.Description> {expanded? card.text : card.description} </S.Description>
        {!expanded && <S.Button onClick={()=> openModal(card)}> Saiba mais</S.Button>}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default UpdateCard;
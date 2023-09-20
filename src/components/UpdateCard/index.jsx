import * as S from './styles';


const UpdateCard = ({card, expanded = false}) =>{
  return(
    <S.Wrapper>
      <S.ImageBox>
        <img src={`/updatesCard/${card.image}`} alt={card.title} />
      </S.ImageBox>

      <S.ContentWrapper>
        <S.Title> {card.title} </S.Title>
        {!expanded && <S.Description> {card.description} </S.Description>}
        {!!expanded && <S.ModalDescription> {card.text} </S.ModalDescription>}

        <S.Button> Saiba mais</S.Button>
      </S.ContentWrapper>

      
    </S.Wrapper>
  );
};

export default UpdateCard;
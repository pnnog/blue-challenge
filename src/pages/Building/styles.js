import { BoxContainer } from 'UI';
import styled from 'styled-components';

export const Main = styled(BoxContainer).attrs({as:'main'})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height:50rem ;


  p{
    text-align: justify;
    max-width: 300px;
    width: 100%;
    color: ${({theme})=>theme.darkGrey};
    margin-bottom: 2rem;
    width: 100%;
    font-size: ${({theme})=>theme.fontSize.lg};

    span{
      color: ${({theme})=>theme.colors.blue};
      font-weight: 700;
    }
  }

  img{
    width: 20rem;
    height: 20rem;
  }
`;
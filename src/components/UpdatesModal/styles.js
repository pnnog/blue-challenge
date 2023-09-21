import styled from 'styled-components';

import * as UpdateCardStyles from 'components/UpdateCard/styles';

export const Wrapper = styled.dialog`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom:0;
  width: 100%;
  height: 100%;
  border: 0;
  z-index: ${({theme})=>theme.layer.modal};  
  background-color: rgba(0,0,0,.8);
`;

export const Content = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  z-index: calc(${({theme})=>theme.layer.modal} + 1);  


  ${UpdateCardStyles.Wrapper}{  
    @media (min-width: 1080px) {
      &:hover{
        transform: scale(1)
      }
    }
  }

  ${UpdateCardStyles.ContentWrapper}{
    padding: 2rem 2rem 4rem;
  }

  ${UpdateCardStyles.Title}{
    font-size: 2rem;
  }

  ${UpdateCardStyles.Description}{
    font-size: 1.8rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  border: 0;


  svg{
    position: absolute;
    top: 4rem;
    right: 4rem;
    width: 3rem;
    height: 3rem;
    color: #FAFAFA;
    cursor: pointer;

  }
`;
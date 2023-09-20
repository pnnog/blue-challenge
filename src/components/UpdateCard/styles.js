import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color:  #FAFAFA;
  border-radius: ${({theme})=>theme.radius.lg};
  overflow: hidden;
  box-shadow: ${({theme})=>theme.shadow};
  width: 100%;

  @media (min-width: 1080px) {
    &:hover{
      transform: scale(1.02);
      transition: all .2s ease-out;
    }
  }

`;
export const ImageBox = styled.picture`
  display:none;

  @media (min-width: 768px){
    width: 100%;
    display: block;
    height: 11.2rem;  

  }

  img{
    width: 100%;
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color:  #FFFFFF;
  padding:1.2rem 1.2rem .8rem;

  @media (min-width: 768px){
    padding:.9rem .9rem .5rem;
  }

`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 1.6rem;
  color: ${({theme})=>theme.colors.blue};
  margin-bottom: .9rem;

  @media (min-width: 768px){
    font-size: ${({theme})=>theme.fontSize.md};
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({theme})=>theme.colors.dark};

  @media (min-width: 768px){
    font-size: ${({theme})=>theme.fontSize.md};   
  }
`;


export const ModalDescription = styled.p`
  color: red;
`;

export const Button = styled.button`
display: block;
  background-color: transparent;
  border: 0;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${({theme})=>theme.colors.blue};
  align-self: end;
  cursor: pointer;
  z-index: 1000;
  margin-top: 3rem;
  
  @media (min-width: 768px){  
    font-size: ${({theme})=>theme.fontSize.md}
  };


  &:hover{
    color: black;
  }
`;
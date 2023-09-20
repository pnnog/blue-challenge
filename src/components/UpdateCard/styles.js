import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color:  #FAFAFA;
  border-radius: ${({theme})=>theme.radius.lg};
  overflow: hidden;
  box-shadow: ${({theme})=>theme.shadow};
  max-width: 300px;

  @media (min-width: 1080px) {
    &:hover{
      transform: scale(1.02);
      transition: all .2s ease-out;
    }
  }

 

`;
export const ImageBox = styled.picture`
  display: block;
  width: 100%;
  height: 11.2rem;  

  img{
    width: 100%;
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding:.9rem .9rem .5rem;
  background-color:  #FFFFFF;

`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.colors.blue};
  margin-bottom: .9rem;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.colors.dark};
`;


export const ModalDescription = styled.p`
  color: red;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  font-weight: 700;
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.colors.blue};
  align-self: end;
  cursor: pointer;
  margin-top: 3rem;


  &:hover{
    color: black;
  }
`;
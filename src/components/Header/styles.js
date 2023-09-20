import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 10rem;
  padding: 1.3rem 2.8rem;
  width: 100%;
  
  box-shadow: ${({theme})=> theme.shadow};
  background-color: ${({theme})=> theme.colors.white};
  border-bottom: .2rem solid ${({theme})=>theme.colors.blue};
  margin-bottom: 4rem;

  @media (min-width:768px){
    display: block;
    height: 25.6rem;
    background-color: ${({theme})=> theme.colors.blue};
    border-bottom: none;
    margin-bottom: 0;

  }
`;

export const DesktopContent =  styled.div`
  flex: 1;
  display: none;
  align-items: center;
  justify-content: space-between;

  img{
    width: 4.1rem;
    height: 4.1rem;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Date = styled.p`
  color: ${({theme})=> theme.colors.white};
  font-size: ${({theme})=> theme.fontSize.md};
  font-weight: 700;
`;


export const MobileContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg{
    width: 2.8rem;
    height: 2.8rem;
    color: ${({theme})=> theme.colors.blue};
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover{
      transform: scale(1.125);
    }
  }


  @media (min-width: 768px) {
    display: none;
  }



`;
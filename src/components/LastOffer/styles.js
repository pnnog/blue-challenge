import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.3rem 2.8rem; 
  justify-content:space-between;
  gap: 4rem;

  box-shadow: ${({theme})=> theme.shadow};
  border-radius:${({theme})=> theme.radius.sm};
  overflow: hidden;

  @media (min-width:768px ){
    padding: 1.3rem .8rem; 
    box-shadow: none;
    border-radius:0;
    overflow: hidden;
  }

  @media (min-width: 1080px){
    justify-content:flex-start;
    gap: 6rem; 
  }

  @media (min-width: 1210px){
    gap: 10rem; 
  }
`;
  
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;

  p{
    color: ${({theme})=> theme.colors.lightGrey};

    font-size: ${({theme})=>theme.fontSize.md};
    font-weight: 400;
  }

  span{
    color: ${({theme})=> theme.colors.dark};
    font-size: ${({theme})=>theme.fontSize.lg};
    font-weight: 700;
  }

  

 

  @media (min-width: 768px){
    p{
    font-size: ${({theme})=>theme.fontSize.sm};
  }

  span{
    font-size: ${({theme})=>theme.fontSize.md};
  }

  }
`;

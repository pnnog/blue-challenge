import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative; 
  min-width:22.4rem;
  width: 100%;
  height: 14.4rem;
  border-radius: ${({theme})=>theme.radius.md};
  background-color: ${({theme, $color})=> $color? theme.colors[$color] : theme.colors.blue};
  padding: 1.7rem;
`;

export const Descrition = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;
  color: ${({theme})=>theme.colors.white};

  h3{
    font-size: ${({theme})=> theme.fontSize.xlg};
    font-weight: 700;
  }

  p{
    font-size: ${({theme})=> theme.fontSize.md};
    font-weight: 400;
  }
`;

export const Image = styled.picture`
  position: absolute;
  right: 1.5rem;
  bottom: 2.1rem;
  
  width: 6.1rem;
  height: 6.1rem;

  img{
    width: 100%;
    height: 100%;
  }
`;
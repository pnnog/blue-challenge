import styled from 'styled-components';


const modifiers = {
  sm:(theme)=>`
  
    @media (min-width: 768px){
      font-size: ${theme.fontSize.md};
      margin-bottom: 1.1rem;
    }

  `
};

export const Heading = styled.h2`
  font-size: ${({theme})=> theme.fontSize.xlg};
  color: ${({theme})=> theme.colors.dark};
  font-weight: 700;
  margin-bottom: 2rem;

  @media (min-width: 768px){
    margin-bottom: 2.8rem;
  }


  ${({theme, $sm})=> !!$sm && modifiers.sm(theme)};
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 2.8rem;
  padding-right: 2.8rem;

  @media (min-width: 768px){
    padding-left: 15.6rem;
  }  
  
`;

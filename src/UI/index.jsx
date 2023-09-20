import styled from 'styled-components';

const modifiers = {
  sm:(theme)=>`
    @media (min-width: 768px){
      font-size: ${theme.fontSize.md};
      margin: 0 0 1.1rem 0;
    }
  `
};

export const Heading = styled.h2`
  font-size: ${({theme})=> theme.fontSize.xlg};
  color: ${({theme})=> theme.colors.dark};
  font-weight: 700;
  margin: 2rem 0;

  @media (min-width: 768px){
    margin: 2.8rem 0;
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

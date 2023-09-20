import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: ${({theme})=> theme.fontSize.xlg};
  color: ${({theme})=> theme.colors.dark};
  font-weight: 700;
  margin-bottom: 2.8rem;
  margin-left: 5.2rem;
`;
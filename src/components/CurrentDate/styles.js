import styled from 'styled-components';

export const Wrapper = styled.p`
  color: ${({theme})=> theme.colors.white};
  font-size: ${({theme})=> theme.fontSize.md};
  font-weight: 700;
`;
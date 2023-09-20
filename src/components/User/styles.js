import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  color: red;

  p {
    color: ${({theme})=> theme.colors.white};
    font-size: ${({theme})=>theme.fontSize.lg};
    font-weight: 400;
  }

`;
import styled from "styled-components";

export const StyleResult = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryTextcolor};
  margin: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    text-align: center;
  }
`;

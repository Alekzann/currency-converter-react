import styled from "styled-components";

export const StyleResult = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryTextcolor};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    text-align: center;
  }
`;
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  min-height: 600px;
  max-width: 1000px;
  font-size: 25px;

  @media (max-width: 560px) {
    min-height: 550px;
  }
`;

export default Container;

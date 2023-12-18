import styled from "styled-components";

export const StyleForm = styled.form`
  margin: 50px auto;
  padding-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
    padding-top: 50px;
  }
`;

export const Fieldset = styled.fieldset`
  margin: 0 auto;
  padding: 10px;
  max-width: 80%;
  /* color: #455b65; */
  background-color: whitesmoke;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 15px 1px ${({ theme }) => theme.colors.frameColor};
`;

export const Legend = styled.legend`
  color: ${({ theme }) => theme.colors.primaryTextcolor};
  background-color: whitesmoke;
  padding: 5px 45px;
  border-radius: 10px;
  font-size: 30px;
  margin: 0 auto;
  box-shadow: 0px 1px 10px 0px ${({ theme }) => theme.colors.frameColor};
`;

export const Loading = styled.div`
  text-align: center;
  margin: 25px 0;
`;
export const Error = styled.div`
  text-align: center;
  text-decoration: underline grey;
  margin: 25px 0;
`;

export const FormContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
  margin-right: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: grid;
  }
`;

export const ListHeader = styled.span`
  color: ${({ theme }) => theme.colors.primaryTextcolor};
  margin: 15px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 35px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryTextcolor};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 10px 0px ${({ theme }) => theme.colors.frameColor};

  &::placeholder{
    color: ${({ theme }) => theme.colors.primaryTextcolor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px)  
  {
    margin: 0 auto;
    font-size: 17px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColorHower};
    box-shadow: 0px 1px 25px 2px ${({ theme }) => theme.colors.frameColor};
    transition: 0.5s;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.primaryTextcolor};
  background-color: ${({ theme }) => theme.colors.frameColor};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 10px 0px ${({ theme }) => theme.colors.frameColor};
  font-weight: 700;

  &:hover {
    background-color: rgb(40, 190, 209);
    box-shadow: 0px 1px 25px 2px ${({ theme }) => theme.colors.frameColor};
    transition: 0.3s;
  }

  &:active {
    background-color: rgb(36, 175, 209);
  }
`;

export const Note = styled.p`
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primaryTextcolor};
`;

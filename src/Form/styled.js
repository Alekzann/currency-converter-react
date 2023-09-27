import styled from "styled-components";

export const FormStyle = styled.form`
  margin: 50px auto;
  padding-top: 100px;

  @media(max-width: 400px) {
    margin: 0;
    padding-top: 50px;
  };
`;

export const Fieldset = styled.fieldset`
  margin: 0 auto;
  padding: 10px;
  max-width: 80%;
  color: #455b65;
  background-color: whitesmoke;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 17px -3px #394660;
`;

export const Legend = styled.legend`
  color: #455b65;
  background-color: whitesmoke;
  padding: 5px;
  border-radius: 10px;
  font-size: 30px;
  margin: 0 auto;
  box-shadow: 0px 0px 17px -3px #394660;
`;

export const FormContainer = styled.div`
  padding: 10px;

  @media(max-width: 560px) {
    display: grid;
  };
`;

export const ListHeader = styled.span`
  margin: 15px;
  padding: 10px;

  @media(max-width: 560px) {
    margin: 0 auto;
  };
`;

export const Input = styled.input`
  max-width: 150px;
  background-color: rgb(229, 248, 251);
  color: #455b65;
  border: 1px dotted #455b65;
  border-radius: 5px;

  @media(max-width: 560px) {
    margin: 0 auto;
  };
`;

export const Select = styled.select`
  border-radius: 5px;
  background-color: rgb(229, 248, 251);
  text-align: center;

  @media(max-width: 560px) {
    text-align: center;
  };
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  padding: 5px;
  color: #461d1d;
  background-color: rgb(36, 209, 209);
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px -3px #394660;
  font-weight: 700;

  &:hover {
    background-color: rgb(40, 190, 209);
    box-shadow: 2px 2px 22px 1px rgba(40, 189, 209, 0.082);
    transition: 0.3s;
  };

  &:active {
    background-color: rgb(36, 175, 209)
  };
`;

export const Result = styled.div`
  display: flex;
  justify-content: center;

  @media(max-width: 560px) {
    margin: 0;
  };
`;

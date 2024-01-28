import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: var(--third-color);
  justify-content: center;
  align-items: center;
  padding: 2em;
`;

// CSS for Text
export const StyledH2 = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

export const StyledP = styled.p<{ $center?: boolean }>`
  color: #fff;
  font-size: 1rem;
  text-align: ${props => props.$center ? "center" : "left"};
  font-weight: 500;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

export const LabelForm = styled.label`
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
`;

//CSS for Form, Inputs and Button
export const StyledForm = styled.form`
  background-color: var(--third-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 1em;
  gap: .5em;
  
  div {
    display: flex;
    width: 60%;
  }
  // border: 2px solid var(--secondary-color);
`;

export const InputForm = styled.input<{ $checkbox?: boolean }>`
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  width: ${props => props.$checkbox ? "auto" : "100%"};
  
  /*&:hover, &:focus {
    border-color: #4CAF50;
  }*/
  &::placeholder {
    color: #999;
  }
  &:invalid {
    border-color: red;
  }
  &:valid {
    border-color: #32CD32; 
  }
`;

export const SelectForm = styled.select`
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  outline: none;
  width: 60%;
`;

export const ButtonForm = styled.button`
  height: 2.5rem;
  background-color: var(--secondary-color);
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  width: 60%;
  border-radius: 5px;
`;
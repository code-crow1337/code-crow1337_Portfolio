import "typeface-playfair-display"
import "typeface-raleway"
import styled, { css } from "styled-components";
import { TErrorMessage } from "../../types"

 export const ContactFormContainer = styled.div`
  background-color: #2f4858;
  border: 4px solid #00de92;
  padding: 16px;
  display: flex;
  max-width: 1000px;
  width: 64vw;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:24px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  @media (max-width: 884px) {
    padding: 8px;
    width: 100%;
  }
  @media (max-width: 360px) {
    padding: 4px;
    width: 100%;
  }
`
export const ContactHeader = styled.h3`
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  width: fit-content;
`
export const ContactContext = styled.p`
  color: white;
  padding: 8px;
  width: 72%;
  font-size:1.3rem;
  background-color: #006c82;
  @media (max-width: 884px) {
    font-size: 1.2rem;
    width: 100%;
  }
`
export const FormContainer = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 72%;
  min-height: 500px;
  height: 56vh;
  max-height: 756px;
  label {
    margin: 1.2rem 0 1rem;
    align-self: flex-start;
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    @media (max-width: 884px) {
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
  }
  textarea {
    width: 100%;
    height: 50%;
    resize: none;
    font-family: "Raleway", sans-serif;
    font-size: 1.5rem;
    border: 2px solid #00b9a3;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    &:focus {
      outline: #81ff70 auto 1px;
    }
  }
  @media (max-width: 884px) {
    padding: 8px;
    width: 100%;
    align-items: stretch;
  }
`
export const FormInputText = styled.input`
  height: 2rem;
  font-size: 1.5rem;
  resize: none;
  font-family: "Raleway", sans-serif;
  width: 100%;
  background-color: #2f4858;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border: none;
  border-bottom: 2px solid #00b9a3;
  &:focus {
    outline: #81ff70 auto 1px;
  }
`
export const FormSubmitBtn = styled.input`
  margin: 16px 0;
  align-self: center;
`;
export const ErrorMessageForm = styled.input<TErrorMessage>`
    &:focus {
    outline:red auto 1px;
  }
`;
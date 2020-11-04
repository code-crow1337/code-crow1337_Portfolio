import React from "react"
import styled, { css } from "styled-components"
import "typeface-playfair-display"
import "typeface-raleway"
import { TErrorMessage } from "../../types"
const ContactFormContainer = styled.div`
  background-color: #2f4858;
  border: 4px solid #00de92;
  padding: 16px;
  display: flex;
  max-width: 1000px;
  width: 64vw;
  height: 100%;
  min-width: 340px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  @media (max-width: 884px) {
    padding: 8px;
    width: 100%;
    align-items: stretch;
  }
`
const ContactHeader = styled.h3`
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  width: fit-content;
`
const ContactContext = styled.p`
  color: white;
  padding: 8px;
  width: 72%;
  background-color: #006c82;
  @media (max-width: 884px) {
    font-size: 1.2rem;
    width: 100%;
  }
`
const FormContainer = styled.form`
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
    font-size: 1.2rem;
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
    color: white;
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
const FormInputText = styled.input`
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
const FormSubmitBtn = styled.input`
  margin: 16px 0;
`;
const ErrorMessageForm = styled.input<TErrorMessage>`
    &:focus {
    outline:red auto 1px;
  }
`;
export default function ContactMeForm(props): React.ReactElement {
  return (
    <ContactFormContainer>
      <ContactHeader>{props.headerTitle}</ContactHeader>
      <ContactContext>{props.context}</ContactContext>
      <FormContainer>
        <label htmlFor="name">Your Name</label>
        <FormInputText
          type="text"
          id="name"
          name="name"
          required
          aria-label="Your First and Last name input field"
        />
        <label htmlFor="email">Your Mail</label>
        <FormInputText
          type="text"
          id="email"
          name="email"
          required
          aria-label="Your email for contact"
        />
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          aria-label="Message you want me to recive textfield"
        />
        <FormSubmitBtn type="submit" value="Send" />
      </FormContainer>

    </ContactFormContainer>
  )
}

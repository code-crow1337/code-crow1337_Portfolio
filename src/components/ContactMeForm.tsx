import React from "react"
import {
  ContactFormContainer,
  ContactContext,
  ContactHeader,
  FormContainer,
  FormInputText,
  FormSubmitBtn,
} from "./ContactMeForm.style"

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

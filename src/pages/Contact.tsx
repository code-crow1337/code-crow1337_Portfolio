import React from "react"
import styled from "styled-components"
import ContactMeForm from "../components/ContactMeForm"

const ContactSection = styled.section`
  display: flex;
  width: 100%;
  height:100%;
  justify-content: center;
  background-color: #5b5a5c;
  @media (max-width: 884px) {
    background-color: #5b5a5c;
  }
`

export default function Contact() {
  return (
    <ContactSection id="contact">
      <ContactMeForm headerTitle="Contact Me" context="Interested to collaborate with me in your future projects? Or curios about my current work? Don't hesitate and contact me 🧙🏻‍♀️" />
      
    
    </ContactSection>
  )
}

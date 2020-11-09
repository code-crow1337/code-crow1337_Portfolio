import React from "react"
import styled from "styled-components"
import ContactMeForm from "../components/ContactMeForm"

const ContactSection = styled.section`
  display: flex;
  width: 100%;
  height:100%;
  padding:64px 0;
  justify-content: center;
  background-color: #3E3A41;

`

export default function Contact() {
  return (
    <ContactSection id="contact">
      <ContactMeForm headerTitle="Contact Me" context="Interested to collaborate with me in your future projects? Or curios about my current work? Don't hesitate and contact me 🧙🏻‍♀️" />
      
    
    </ContactSection>
  )
}

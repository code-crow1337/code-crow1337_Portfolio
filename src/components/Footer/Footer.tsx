import React from "react"
import styled from "styled-components"

const FooterSection = styled.footer`
  height: 80px;
  background-color: limegreen;
`
const IconAssetsLink = styled.span`
  font-weight: 600;
  text-decoration:underline;
`
export default function Footer() {
  return (
    <FooterSection>
      I'm the footer Icons by 
      <IconAssetsLink>
        <a href="https://icons8.com/" target="_blank">
          Icons8 
        </a>
      </IconAssetsLink>
      and 
      <IconAssetsLink>
        <a href="https://fontawesome.com/" target="_blank">
          Font Awesome 
        </a>
      </IconAssetsLink>
      .
    </FooterSection>
  )
}

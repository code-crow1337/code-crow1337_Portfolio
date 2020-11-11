import React from "react"
import styled from "styled-components"

const FooterSection = styled.footer`
  height: 120px;
  background-color: #4bbc8e;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  padding: 16px 24px;
  @media (max-width: 340px) {
      padding: 16px 8px;
  }
`
const FooterContent = styled.div`
  font-size: 2rem;
  @media (max-width: 440px) {
    font-size: 1.5rem;
  }
  @media (max-width: 340px) {
    font-size: 1.3rem;
  }
`
const IconAssetsLink = styled.span`
  font-weight: 600;
  text-decoration: underline;
`
const IconsLink = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  @media (max-width: 340px) {
    font-size: 1rem;
  }
`
export default function Footer() {
  return (
    <FooterSection>
      <FooterContent>&#169; 2020 Joséphine Östman</FooterContent>
      <IconsLink>Icons from&nbsp;
        <IconAssetsLink>
          <a href="https://icons8.com/" target="_blank">
            Icons8
          </a>
        </IconAssetsLink>
        &nbsp;and&nbsp;
        <IconAssetsLink>
          <a href="https://fontawesome.com/" target="_blank">
            Font Awesome
          </a>
        </IconAssetsLink>
        .
      </IconsLink>
    </FooterSection>
  )
}

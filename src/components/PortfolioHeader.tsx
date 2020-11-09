import React from "react"
import styled from "styled-components"
import "typeface-playfair-display"
const HeaderFont = styled.h2`
  font-size: 2.7rem;
  margin: 16px 0 40px;
  letter-spacing: 2px;
  width: 80%;
  display: flex;
  font-weight:200;
  padding-bottom:8px;
  justify-content: center;
  border-bottom: 2px solid #81ff70;

  @media (max-width: 438px) {
    font-size: 2rem;
  }
  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`
export default function PortfolioHeader({
  headerText,
}: {
  headerText: string
}): React.ReactElement {
  return <HeaderFont>{headerText}</HeaderFont>
}

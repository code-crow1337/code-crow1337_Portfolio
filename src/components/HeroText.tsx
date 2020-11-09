import React from "react"
import styled, { keyframes } from "styled-components"



const HeroTextContainer = styled.div`
display:flex;
flex-direction:column;
height:fit-content;
margin-top:80px;
margin-left:80px;
width:48vw;

@media (max-width: 1242px) {
  margin-top:24px;
  margin-left:0;
  width:100%;
  }

`
;

const HeroTextStyle = styled.h1`
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 4px;
  font-size: 3rem;
  width: fit-content;
  margin: 16px 0;
  @media (max-width: 884px) {
 font-size:2.5rem;
  }
  @media (max-width:416px) {
 font-size:2.2rem;
  
}
`
const SecondaryCharColor = styled.span`
 width: fit-content;
  color: #81ff70;
`
const SecondaryText = styled.h2`
  text-transform: uppercase;
  font-weight: 200;
  font-size: 2rem;
  letter-spacing: 4px;
  margin: 0;
  @media (max-width: 884px) {
 font-size:1.5rem;
  }
  @media (max-width:416px) {
 font-size:1.2rem;
  
}
`


export default function HeroText() {
  return (
    <HeroTextContainer>
      <HeroTextStyle>
        Hi there<SecondaryCharColor>!</SecondaryCharColor>
        <br />I<SecondaryCharColor>'</SecondaryCharColor>m Joséphine Östman
      </HeroTextStyle>
      <SecondaryText>Software developer</SecondaryText>
    </HeroTextContainer>
  )
}

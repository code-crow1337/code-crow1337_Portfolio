import React from "react"
import styled from "styled-components"
import profileImage from "../assets/profileImage.jpg"
import HeroText from "../components/HeroText"
import SocialIcon from "../components/SocialIcon"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const HeroSection = styled.section`
  height: 100%;
  display: flex;
  width:100%;
  flex-wrap:wrap;
  margin-bottom:80px;
  justify-content:center;
  @media (max-width: 884px) {
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
    transition: all 0s ease 0s;
  }

`
const ImageFrameHexagon = styled.div`
  display: flex;
  position: relative;
  width: 50vw;
  height: 50vw;
  max-width: 633px;
  max-height: 613px;
  min-width:315px;
  min-height:300px;
  background-color: #424242;
  border: 2px solid white;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  img {
    width: 100%;
    height: auto;
    display: block;
    object-position: 0% 100%;
    object-fit: cover;
  }
  @media (max-width: 320px) {
    font-size: 1.6rem;
    min-width:75vw;
    min-height:72vw;
  }
`
const IconsList = styled.div`
display:flex;
margin-top:24px;
justify-content:space-between;
align-self:center;
align-items:center;
position:relative;
padding: 16px;
max-width:320px;
width:320px;
height:fit-content;
&::before {
  content:"";
  position:absolute;
  bottom:0;
  left:0;
  background-color:#81ff70;
  width:100%;
  height:4px;
}

@media (max-width: 884px) {
    width:240px;
  }
`
export default function Hero() {
  return (
    <HeroSection id="home">
      <ImageFrameHexagon>
        <img
          src={profileImage}
          alt="Josephine smiling at the camera for a profile pic."
        />
      </ImageFrameHexagon>
      <HeroText />
      <IconsList>
        <SocialIcon
          iconType={faGithub}
          link="https://github.com/code-crow1337"
        />
        <SocialIcon
          iconType={faLinkedin}
          link="https://www.linkedin.com/in/josephine-een"
        />
        <SocialIcon iconType={faEnvelope} link="mailto:josephine.een@gmail.com" />
      </IconsList>
    </HeroSection>
  )
}

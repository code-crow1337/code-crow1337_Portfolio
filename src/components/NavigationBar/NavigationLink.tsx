import React from "react"
import styled, { keyframes } from "styled-components"
import "typeface-playfair-display"

const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0 32px;
  width: 100%;
`
const rotate = keyframes`
  0% {
    background-position: 100% 0, 0 0% , 0% 100%, 100% 100%;
  background-size: 0 3px, 3px 0, 100% 3px, 3px 0;
  }
  40% {
    background-position: 100% 0%, 0 0% , 100% 100%, 100% 100%;
  background-size: 0% 3px, 3px 0, 0% 3px, 3px 100%;
  }
  60% {
    background-position: 100% 0, 0 0% , 100% 100%, 100% 0%;
  background-size: 100% 3px, 3px 0%, 0% 3px, 3px 100%;
  }
  70% {
    background-position: 0 0, 0 0% , 100% 100%, 100% 100%;
  background-size: 100% 3px, 3px 100%, 0 3px, 3px 0;
  }
  80% {
    background-position: 0 0,  0 100% , 100% 100%, 100% 100%;
  background-size: 0 3px, 3px 100%, 0 3px, 3px 0;
  }

  100% {
    background-position: 100% 0%,  0 100% , 0% 100%, 100% 100%;
  background-size: 0% 3px, 3px 0%, 100% 3px, 3px 0%;
  }
`
const LinkItem = styled.li`
  color: white;
  font-size: 1.4rem;
  font-family: "Playfair Display", serif;
  text-transform: capitalize;
  width: 16vw;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(red, red), linear-gradient(yellow, yellow),
    linear-gradient(blue, blue), linear-gradient(orange, orange);
    background-position: 100% 0%, 0% 100% , 0% 100%, 100% 100%;
  background-size: 0% 3px, 3px 0%, 0% 3px, 3px 0%;
  background-color: transparent;
  background-repeat: no-repeat;

  transition: 3s linear;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border: 3px solid #60daaa;
  }
  &:hover {
    //[left, top]
    background-position: 100% 0, 0 0% , 0% 100%, 100% 100%;
  background-size: 0 3px, 3px 0, 0% 3px, 3px 0;
    animation: ${rotate} 3s linear forwards 0.2s;
  }
`
const LogoItem = styled.li`
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  position: relative;
  top: 8px;
`
const renderLinks = (links: any) => {
  const middleLogoPos = Math.round(links.length / 2) - 1
  const tempArr = links.map((item: string, index: number) => (
    <LinkItem key={`${index}+${item}`}>{item}</LinkItem>
  ))
  tempArr[middleLogoPos] = (
    <LogoItem key={`${middleLogoPos}+${links[middleLogoPos]}`}>
      {links[middleLogoPos]}
    </LogoItem>
  )
  return tempArr
}
export default function NavigationLink({
  links,
}: {
  links: string[]
}): React.ReactElement {
  return <LinksContainer>{renderLinks(links)}</LinksContainer>
}

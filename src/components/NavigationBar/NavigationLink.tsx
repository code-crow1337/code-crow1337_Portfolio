import React, { useState, useEffect } from "react"
import styled, { keyframes,css } from "styled-components"
import "typeface-playfair-display"

const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0 32px;
  width: 100%;
`;

type TLinkItem = {
  selected:boolean; 
}
const rotate = keyframes`
  0% {
  background-position: 100% 0, 0 0% , 100% 100%, 100% 100%;
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
    background-position: 0 0, 0 0% , 100% 100%, 100% 0%;
  background-size: 100% 3px, 3px 100%, 0 3px, 3px 0;
  }
  80% {
    background-position: 0 0,  0 100% , 0% 100%, 100% 100%;
  background-size: 0 3px, 3px 100%, 0 3px, 3px 0;
  }

  100% {
    background-position: 100% 0%,  0 100% , 0% 100%, 100% 100%;
  background-size: 0% 3px, 3px 0%, 100% 3px, 3px 0%;
  }
`
const LinkItem = styled.li<TLinkItem>`
  color: white;
  font-size: 1.4rem;
  font-family: "Playfair Display", serif;
  text-transform: capitalize;
  width: 8vw;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(#81ff70, #81ff70),
    linear-gradient(#81ff70, #81ff70), linear-gradient(#81ff70, #81ff70),
    linear-gradient(#81ff70, #81ff70);
  background-position: 100% 0%, 0% 100%, 0% 100%, 100% 100%;
  background-size: 0% 3px, 3px 0%, 0% 3px, 3px 0%;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.5s linear;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border: 3px solid transparent;
  }
  &:hover {
    background-position: 100% 0, 0 0%, 0% 100%, 100% 100%;
    background-size: 0 3px, 3px 0, 0% 3px, 3px 0;
    animation: ${rotate} 2s linear forwards;
  }
  ${({ selected }) =>
    selected &&
    css`
     &::after {
       content:"";
       position:absolute;
       background-color:#81ff70;
       width:100%;
       height:3px;
       bottom:0px;
     }
    `}
 
`
const LogoItem = styled.li`
  font-size: 2rem;
  font-family: "Playfair Display", serif;
`;
const currentSelection = styled.li`
  background-color:green;
  color:black;
`;

export default function NavigationLink({
  links,
  location,
}: {
  links: string[]
  location: any
}): React.ReactElement {
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    if (location.hash !== "") {
      const temp = location.hash.replace(/^#/g, '');
      console.log('triggered', location.hash);
      setCurrentPath(temp)
    }
  },)
  console.log('outside', location.hash);

  const renderLinks = (links: any) => {
  const middleLogoPos = Math.round(links.length / 2) - 1
  const tempArr = links.map((item: string, index: number) => (
    <a href={`#${item}`} key={`${index}+${item}`}>
      <LinkItem selected={item === currentPath}>{item}</LinkItem>
    </a>
  ))
  tempArr[middleLogoPos] = (
    <a href={`#home`} key={`${middleLogoPos}+${links[middleLogoPos]}`}>
      <LogoItem>{links[middleLogoPos]}</LogoItem>
    </a>
  )
  return tempArr
}
  return <LinksContainer>{renderLinks(links)}</LinksContainer>
}

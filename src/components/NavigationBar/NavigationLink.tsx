import React from "react"
import styled from "styled-components"
import "typeface-playfair-display"

const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  margin:0;
  padding:0 32px;
  width: 100%;
`
const LinkItem = styled.li`
  color: white;
  font-size: 1.4rem;
  font-family: "Playfair Display", serif;
  text-transform:capitalize;
  width:16vw;
  padding:8px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  &::before {
    content:"";
    width:56%;
    height:2px;
    position:absolute;
    bottom:16px;
    background-color:#81FF70;
    transform:scaleX(0);
    transform-origin:left;
    transition: 0.25s ease-in;
  }
  &:hover, &:hover::before {
    transform:scale(1)
  }
`
const LogoItem = styled.li`
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  position:relative;
  top: 8px;
`
const renderLinks = (links: any) => {
  const middleLogoPos = Math.round(links.length / 2) - 1
  const tempArr = links.map((item: string,index:number) => <LinkItem key={`${index}+${item}`}>{item}</LinkItem>)
  tempArr[middleLogoPos] = <LogoItem key={`${middleLogoPos}+${links[middleLogoPos]}`}>{links[middleLogoPos]}</LogoItem>
  return tempArr
}
export default function NavigationLink({
  links,
}: {
  links: string[]
}): React.ReactElement {
  return <LinksContainer>{renderLinks(links)}</LinksContainer>
}

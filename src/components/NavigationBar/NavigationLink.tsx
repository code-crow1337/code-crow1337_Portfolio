import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled, { keyframes, css } from "styled-components"
import "typeface-playfair-display"

/* const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0 32px;
  width: 100%;
`; */

type TLinkItem = {
  selected: boolean
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
  letter-spacing:1px;
  text-transform: capitalize;
  width: fit-content;
  padding: 8px 24px;
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
        content: "";
        position: absolute;
        background-color: #81ff70;
        width: 100%;
        height: 3px;
        bottom: 0px;
      }
    `}

  @media (max-width: 884px) {
    transition: all 0s ease 0s;
    &:hover {
      animation: none;
    }
  }
  @media (max-width: 360px) {
    padding: 8px;
     font-size:1rem;
    }
`
const LogoItem = styled.li`
  font-size: 2rem;
  margin: 0 24px;
  list-style:none;
  font-family: "Playfair Display", serif;
    @media (max-width: 360px) {
     font-size:1.5rem;
     margin: 0 0px;
    }
`
const currentSelection = styled.li`
  background-color: green;
  color: black;
`

export default function NavigationLink({
  links,
  location,
  handleClick,
}: {
  links: string[]
  location: any
  handleClick: any
}): React.ReactElement {
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    if (location.hash !== "") {
      const temp = location.hash.replace(/^#/g, "")
      console.log("triggered", location.hash)
      setCurrentPath(temp)
    }
  })
  console.log("outside", location.hash)

  const renderLinks = (links: any) => {
    const middleLogoPos = Math.round(links.length / 2) - 1
    const tempArr = links.map((item: string, index: number) => (
      <div key={`${index}+${item}`} onClick={() => handleClick(false)}>
        <Link to={`#${item}`}>
          <LinkItem selected={item === currentPath}>{item}</LinkItem>
        </Link>
      </div>
    ))
    tempArr[middleLogoPos] = (
      <div
        key={`${middleLogoPos}+${links[middleLogoPos]}`}
        onClick={() => handleClick(false)}
      >
        <Link to={`#home`} key={`${middleLogoPos}+${links[middleLogoPos]}`}>
          <LogoItem>{links[middleLogoPos]}</LogoItem>
        </Link>
      </div>
    )
    return tempArr
  }
  return <>{renderLinks(links)}</>
}

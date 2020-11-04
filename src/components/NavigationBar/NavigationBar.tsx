import React, { useEffect, useState } from "react"
import styled, { css, StyledFunction } from "styled-components"
import { PageProps } from "gatsby"
import { THamburgerMenu } from "../../../types"
import NavigationLink from "./NavigationLink"

const Navbar = styled.nav`
  background-color: #2d2a2f;
  height: 64px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: fixed;
  width:100%;
  top: 0;
  // transition: top 10s ease-in-out;
  z-index: 9999;

  @media (max-width: 884px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    background-color: #2d2a2f;
    transition: all 0.3s ease-in;
    top: 0;
  }
`

const Toggle = styled.div<THamburgerMenu>`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 884px) {
    display: flex;
  }
`
const Navbox = styled.div<THamburgerMenu>`
  display: flex;
  height: 100%;
  min-width:800px;
  max-width:1000px;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 884px) {
    flex-direction: column;
    position: fixed;
    min-width: 100%;
    height: 100vh;
    justify-content: flex-start;
    padding-top: 24px;
    background-color: #2d2a2f;
    transition: all 0.3s ease-in;
    top: 64px;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`
const Hamburger = styled.div<THamburgerMenu>`
  background-color: white;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Transition = styled.div`
  .active {
    visibility: visible;

    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`
console.log("window obj", window)

export default function NavigationBar({
  location,
}: {
  location: PageProps["location"]
}) {
  const [scrollPos, setScrollPos] = useState<number>(0)
  const [showNav, setShowNav] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  useEffect(() => {
    setScrollPos(window.pageYOffset)
    const handleScroll = () => {
      const currentPos = window.pageYOffset
      setShowNav(scrollPos > currentPos)
      setScrollPos(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  console.log("navbar locatrion", location.hash)
  return (
    <Transition>
      <Navbar className={showNav ? "active" : "hidden"}>
        <Toggle open={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>

        {isOpen ? (
          <Navbox>
            <NavigationLink
              location={location}
              links={[
                "home",
                "contact",
                "</Joséphine Östman>",
                "projects",
                "skills",
              ]}
              handleClick={setIsOpen}
            />
          </Navbox>
        ) : (
          <Navbox open>
            <NavigationLink
              location={location}
              links={[
                "home",
                "contact",
                "</Joséphine Östman>",
                "projects",
                "skills",
              ]}
              handleClick={setIsOpen}
            />
          </Navbox>
        )}
        {/*         <NavigationLink
          location={location}
          links={[
            "home",
            "contact",
            "</Joséphine Östman>",
            "projects",
            "skills",
          ]}
        /> */}
      </Navbar>
    </Transition>
  )
}

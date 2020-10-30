import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import NavigationLink from "./NavigationLink"
import { PageProps } from "gatsby"

const Navbar = styled.nav`
  padding-top: 1rem;
  background-color: #2d2a2f;
  height: 64px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  transition: top 0.2s ease-in-out;
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
console.log("window obj", window);

export default function NavigationBar({
  location,
}: {
  location: PageProps["location"]
}) {
  const [scrollPos, setScrollPos] = useState(0)
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    setScrollPos(window.pageYOffset)
    const handleScroll = () => {
      const currentPos = window.pageYOffset;
      setShowNav(scrollPos > currentPos);
      setScrollPos(window.pageYOffset);
    }  
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },)

  console.log('navbar locatrion', location.hash)
  return (
    <Transition>
      <Navbar className={showNav ? "active" : "hidden"}>
        <NavigationLink
          location={location}
          links={[
            "home",
            "contact",
            "</Joséphine Östman>",
            "projects",
            "skills",
          ]}
        />
      </Navbar>
    </Transition>
  )
}

import React from "react"
import styled from "styled-components"
import NavigationLink from "./NavigationLink"

const Navbar = styled.nav`
  background-color: #2d2a2f;
  height: 64px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100vw;
  display: flex;
  position: relative;
`
export default function NavigationBar() {
  return (
    <Navbar>
      <NavigationLink
        links={["home", "contact", "</Joséphine Östman>", "projects", "skills"]}
      />

    </Navbar>
  )
}

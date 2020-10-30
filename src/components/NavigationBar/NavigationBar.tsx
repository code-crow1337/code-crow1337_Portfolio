import React from "react"
import styled from "styled-components"
import NavigationLink from "./NavigationLink"
import {PageProps} from 'gatsby';
const Navbar = styled.nav`
margin-top:1rem;
  background-color: #2d2a2f;
  height: 64px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100vw;
  display: flex;
  justify-content:space-between;

`
export default function NavigationBar({location}:{location:PageProps['location']}) {
  return (
    <Navbar>
      <NavigationLink
      location={location}
        links={["home", "contact", "</Joséphine Östman>", "projects", "skills"]}
      />

    </Navbar>
  )
}

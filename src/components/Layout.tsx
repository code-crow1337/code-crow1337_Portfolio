import React from "react"
import { createGlobalStyle } from "styled-components"
import {PageProps} from 'gatsby';
import NavigationBar from "../components/NavigationBar/NavigationBar"
import 'typeface-raleway'
const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  padding:0;
  background-color:#2D2A2F;
  color:white;
  font-family:'Raleway', sans-serif;
  box-sizing:border-box;
}
h1 {
  color:white;
}
a {
  text-decoration:none;
  color:white;
}
`;

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}
export default function Layout({location}:{location:PageProps['location']}):React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <NavigationBar location={location}/>
    </>
  )
}

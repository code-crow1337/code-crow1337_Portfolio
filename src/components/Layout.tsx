import React from "react"
import { createGlobalStyle } from "styled-components"
import {PageProps} from 'gatsby';
import NavigationBar from "../components/NavigationBar/NavigationBar"
import 'typeface-raleway'
import Footer from "./Footer/Footer";
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
main {
  margin: 40px 0; 
}
section {
  padding: 24px 40px;
}
`;

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}
export default function Layout({children, location}:{children:any,location:PageProps['location']}):React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <NavigationBar location={location}/>
      {children}
      <Footer />
    </>
  )
}

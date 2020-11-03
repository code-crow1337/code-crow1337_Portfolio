import React from "react"
import { createGlobalStyle, keyframes } from "styled-components"
import {PageProps} from 'gatsby';
import NavigationBar from "../components/NavigationBar/NavigationBar"
import 'typeface-raleway'
import Footer from "./Footer/Footer";

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1; 
}
`;
const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  padding:0;
  width:100vw;
  background-color:#2D2A2F;
  color:white;
  font-family:'Raleway', sans-serif;
  box-sizing:border-box;
}
h1,h2 {
  color:white;
}
a {
  text-decoration:none;
  color:white;
}
main {
  box-sizing:border-box;
  margin: 40px 0px; 
  padding: 20px 80px;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media (max-width: 884px) {
  margin: 8px 0px; 
  padding: 20px 16px;
  width:100%;
  }
}
section {
  margin: 60px 0 0;
  padding:16px;
  height:100vh;
  opacity:0;
  animation: ${fadeIn}  0.4s ease-in forwards;
  @media (max-width: 1457px) {
  height:33vh;
  width:100%;
  }
}
`;

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}
export default function Layout({children, location}:{children:any,location:PageProps['location']}):React.ReactElement {
 console.log('location in layout',location)
  return (
    <>
      <GlobalStyle />
      <NavigationBar location={location}/>
      {children}
      <Footer />
    </>
  )
}

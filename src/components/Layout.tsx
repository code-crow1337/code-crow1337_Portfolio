import React from "react"
import { createGlobalStyle, keyframes } from "styled-components"
import { PageProps } from "gatsby"
import NavigationBar from "../components/NavigationBar/NavigationBar"
import "typeface-raleway"
import Footer from "./Footer/Footer"
import ToTheTop from "./ToTheTop"

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1; 
}
`
const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
  box-sizing:border-box;
}
body {
  margin:0;
  padding:0;
  width: 100vw;
  height: 100vh;
  max-width:100%; 
  background-color:#2D2A2F;
  color:white;
  font-family:'Raleway', sans-serif;
  box-sizing:border-box;
  overflow-x: hidden;
  position:relative;
}
h1,h2,h3 {
  margin:0;
  color:white;
}
a {
  text-decoration:none;
  color:white;
}
main {
  box-sizing:border-box;
  margin: 40px 0px; 
  padding: 20px 0px;
  width:100%;
   display:flex;
  flex-direction:column;
  justify-content:center; 
  @media (max-width: 884px) {
  margin: 40px 0px; 
  padding: 20px 0px;
  width:100%;
  }
  @media (max-width: 360px) {
    padding: 20px 0px;
  width:100%;
  }
}
section {
  box-sizing:border-box;
/*   margin: 60px 0 0; */
  padding:16px;
  width:100vw;
  height:100vh;
  opacity:0;
  animation: ${fadeIn}  0.4s ease-in forwards;
  @media (max-width: 1457px) {
  height:100%;
  width:100vw;
  }
  @media (max-width: 360px) {
    padding:8px;
  }
  

}
  button, input[type=submit]{
    width:100%;
    min-width:64px;
    max-width:200px;
    padding:4px 4px 8px;
    font-family:'Raleway', sans-serif;
    height:48px;
    font-size:1.3rem;
    font-weight:600;
    border:2px solid white;
    color:white;
    border-radius:24px;
    letter-spacing:2px;
    text-transform:uppercase;
    background-color:#4BBC8E;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    &:focus,&:hover {
      transform:translateY(4px);
      background-color:#81FF70;
      color:black;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
  }
`

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
export default function Layout({
  children,
  location,
}: {
  children: any
  location: PageProps["location"]
}): React.ReactElement {
  console.log("location in layout", location)
  return (
    <>
      <GlobalStyle />
      <NavigationBar location={location} />
      {children}
      <ToTheTop />
      <Footer />
    </>
  )
}

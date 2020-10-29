import React from "react"
import { createGlobalStyle } from "styled-components"
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
`
export default function Layout():React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <NavigationBar/>
    </>
  )
}

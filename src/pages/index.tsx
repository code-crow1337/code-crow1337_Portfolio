import React from "react"
import Layout from "../components/Layout"
import {PageProps} from 'gatsby';
export default function Home(props:PageProps) {
  return (
    <>
    <Layout location={props.location} />
      <h1>Home</h1>
    </>
  )
}

import React from "react"
import Layout from "../components/Layout"
import { PageProps } from "gatsby"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"
import Hero from "./Hero"

export default function Home(props: PageProps) {
  return (
    <>
      <Layout location={props.location}>
        <main>
          <Hero/>
          <Contact />
          <Projects />
          <Skills />
        </main>
      </Layout>
    </>
  )
}

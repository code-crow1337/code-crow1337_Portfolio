import React, { forwardRef, useLayoutEffect, useRef, useState } from "react"
import Layout from "../components/Layout"
import { PageProps } from "gatsby"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"
import Hero from "./Hero"
import Fade from "react-reveal/Fade"
export default function Home(props: PageProps) {
  console.log("location in index.ts", props.location.hash)

  return (
    <>
      <Layout location={props.location}>
        <main>
          <Hero />

          <Fade left>
            <Contact />
          </Fade>
          <Fade left>
            <Projects />
          </Fade>
          <Fade left>
            <Skills />
          </Fade>
        </main>
      </Layout>
    </>
  )
}

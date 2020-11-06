import React from "react"
import styled from "styled-components"
import Project from "../components/Project/Project"
import Fade from "react-reveal/Fade"
import ProjectList from "../components/Project/ProjectList"

const ProjectsSection = styled.section`
  height: 100%;
  display: flex;
  width:100vw;
  background-color:#2f4858;
  flex-direction: column;
  align-items: center;
 
`

export default function Projects():React.ReactElement {
  return (
    <ProjectsSection id="projects">
      <ProjectList />
    </ProjectsSection>
  )
}

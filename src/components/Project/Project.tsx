import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import flutterProject from "/home/josephine/Dev/gatsby/portfolio/src/assets/flutterProject.png"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: lightblue;
  height: 480px;
  padding: 16px;
  width: 364px;
  background-color: #2d2a2f;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 8px 0;
  border: 4px solid white;
`
const ProjectImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 188px;
  /*   max-width: 633px;
  max-height: 613px;
  min-width:300px;
  min-height:315px; */
  background-color: #636e75;
  border: 2px solid white;
  img {
    width: 100%;
    height: auto;
    display: block;
    object-position: 0% 20%;
    object-fit: cover;
  }
`
const ProjectDate = styled.h4`
  font-size: 1.2rem;
  margin: 0px 0px 16px;
`
const ProjectInfo = styled.p`
  font-size: 1rem;
  margin: 0;
  align-self: flex-start;
`
const ProjectBTNContainer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    background-color: #03b375;
    font-size: 0.9rem;
    max-width: 140px;
    height: 56px;
    width: 100%;
    position: relative;
    border-radius: 32px;
    svg {
      font-size: 24px;
    }
  }
`
export default function Project(props): React.ReactElement {
  return (
    <ProjectContainer>
      <ProjectDate>2020/01/05</ProjectDate>
      <ProjectImageContainer>
        <img src={flutterProject} alt="" />
      </ProjectImageContainer>
      <ProjectInfo>
        <strong>
          Name:
          <br />
        </strong>
        Flutter Business Card
      </ProjectInfo>
      <ProjectInfo>
      <strong>
          Technologies:
          <br />
        </strong>Dart
      </ProjectInfo>

      <ProjectBTNContainer>
        <button>Source code</button>
        <button>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          Github Repo
        </button>
      </ProjectBTNContainer>
    </ProjectContainer>
  )
}

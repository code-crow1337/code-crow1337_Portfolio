import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import { TProjectData } from "../../../types"
import flutterProject from "../../assets/flutterProject.png"
import foodMap from "../../assets/FoodMap_homepage.png"
import githubSocial from "../../assets/github_user_info.png"
import lassieApp from "../../assets/startScreen_lassie.png"
import chatApp from "../../assets/chatApp_conversation.png"

const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 900px;
  width: 75vw;
  position: relative;
  height: 100%;
  padding: 24px;
  @media (max-width: 1192px) {
    justify-content: center;
    width: 100vw;
  }
  @media (max-width: 412px) {
    background-color:blue;
    align-items: center;
  }
`
const ProjectPosRight = styled.div`
  align-self: flex-end;

  @media (max-width: 884px) {
    align-items: center;
    background-color:red;
  }

`
const TimeLineStyle = styled.span`
  z-index: -1;
  height: 100%;
  width: 4px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const renderListItems = () => {
  const data: TProjectData[] = [
    {
      name: "Flutter Business Card",
      tech: ["Dart"],
      date: "2020/01/13",
      sourceCode: "https://github.com/code-crow1337/Flutter-Business-Card",
      live: "",
      img: flutterProject,
    },
    {
      name: "Food Map",
      tech: ["Node", "JavaScript", "React", "TypeScript", "CSS"],
      date: "2020/07/30",
      sourceCode: "https://github.com/johnnyka/Food-Map",
      live: "",
      img: foodMap,
    },
    {
      name: "Lassie App",
      tech: ["React Native", "TypeScript", "Expo", "Graphql", "CSS"],
      date: "2020/09/20",
      sourceCode: "https://github.com/code-crow1337/Lassie_app_Frontend",
      live: "",
      img: lassieApp,
    },
    {
      name: "GitHub Social",
      tech: ["TypeScript", "CSS", "React"],
      date: "2020/09/22",
      sourceCode: "https://github.com/code-crow1337/Github-Social",
      live: "",
      img: githubSocial,
    },
    {
      name: "Chat Sky",
      tech: ["Socket.IO", "TypeScript", "SCSS", "HTML", "JavaScript", "Node"],
      date: "2020/10/16",
      sourceCode: "https://github.com/code-crow1337/chatApp_client",
      live: "https://code-crow1337-chat-application.herokuapp.com/",
      img: chatApp,
    },
  ]
  return data.map((project: TProjectData, index: number) => {
    return index % 2 === 0 ? (
      <Fade left delay={500}>
        <Project {...project} />
      </Fade>
    ) : (
      <ProjectPosRight>
        <Fade right delay={500}>
          <Project {...project} left />
        </Fade>
      </ProjectPosRight>
    )
  })
}
import Project from "./Project"
export default function ProjectList() {
  return (
    <ProjectListContainer>
      <TimeLineStyle />

      {renderListItems()}
    </ProjectListContainer>
  )
}

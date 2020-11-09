import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import {
  faReact,
  faHtml5,
  faCss3,
  faWordpress,
  faNode,
  faPhp,
  faJs,
} from "@fortawesome/free-brands-svg-icons"
import PortfolioHeader from "../components/PortfolioHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import ReduxLogo from "../assets/icons8-redux-48.png"
import MaterialUI from '../assets/icons8-material-ui-48.png'
import GitLogo from "../assets/icons8-git-48.png"
import FlutterLogo from "../assets/icons8-flutter-48.png"
import DockerLogo from "../assets/icons8-docker-48.png"
import GraphqlLogo from "../assets/icons8-graphql-48.png"
import JavaLogo from "../assets/icons8-java-48.png"
import NpmLogo from "../assets/icons8-npm-48.png"
import SassLogo from '../assets/icons8-sass-48.png'
import CSharpLogo from "../assets/icons8-c-sharp-logo-2-48.png"
const SkillsSection = styled.section`
  height: 100%;
  display: flex;
  width: 100vw;
  background-color: #3e3a41;
  flex-direction: column;
  align-items: center;
`
const ContainerStack = styled.div`
  border: 4px solid #81ff70;
  width: 255px;
  height: 100%;
  padding: 16px;
  font-size: 3.8rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const ContainerIcon = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size:48px;
`
const IconsHeader = styled.h6`
  font-size: 1rem;
  margin: 8px;
`
const ContainerHeader = styled.h4`
  margin: 4px;
  font-size: 2.4rem;
`

const renderTechIcons = (iconsArr: any): React.ReactElement[] => {
  return iconsArr.map((icon: any) => {
    return (
      <ContainerIcon>
        {icon.isFontAwesome ? (
          <>
            <FontAwesomeIcon icon={icon.icon} />
            <IconsHeader>{icon.name}</IconsHeader>
          </>
        ) : (
          <>
            <img src={icon.icon} />
            <IconsHeader>{icon.name}</IconsHeader>
          </>
        )}
      </ContainerIcon>
    )
  })
}
export default function Projects() {
  const frontEndIcons = [
    { icon: faReact, name: "React", isFontAwesome: true },
    { icon: faHtml5, name: "HTML5", isFontAwesome: true },
    { icon: faCss3, name: "CSS", isFontAwesome: true },
    { icon: faJs, name: "JavaScript", isFontAwesome: true },
    { icon: MaterialUI, name: "Material UI", isFontAwesome: false },
    { icon: ReduxLogo, name: "Redux", isFontAwesome: false },
    { icon: SassLogo, name: "Sass", isFontAwesome: false },

    { icon: faWordpress, name: "Wordpress", isFontAwesome: true },
  ]
  const backEndIcons = [
    { icon: faNode, name: "Node.js", isFontAwesome: true },
    { icon: NpmLogo, name: "NPM", isFontAwesome: false },
    
    { icon: faPhp, name: "PHP", isFontAwesome: true },
    { icon: GraphqlLogo, name: "GraphQL", isFontAwesome: false },
  ]
  const otherSkillsIcons = [
    { icon: FlutterLogo, name: "Flutter", isFontAwesome: false },
    { icon: faReact, name: "React Native", isFontAwesome: true },
   
    { icon: GitLogo, name: "Git", isFontAwesome: false },
    { icon: CSharpLogo, name: "C#", isFontAwesome: false },
    { icon: DockerLogo, name: "Docker", isFontAwesome: false },
    { icon: JavaLogo, name: "Java", isFontAwesome: false },
  ]
  return (
    <SkillsSection id="skills">
      <PortfolioHeader headerText="Technical Skills" />
      <ContainerHeader>Front-End</ContainerHeader>
      <ContainerStack>{renderTechIcons(frontEndIcons)}</ContainerStack>
      <ContainerHeader>Back-End</ContainerHeader>

      <ContainerStack>{renderTechIcons(backEndIcons)}</ContainerStack>
      <ContainerHeader>Other Skills</ContainerHeader>
      <ContainerStack>{renderTechIcons(otherSkillsIcons)}</ContainerStack>
    </SkillsSection>
  )
}

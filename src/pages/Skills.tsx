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
import MaterialUI from "../assets/icons8-material-ui-48.png"
import GitLogo from "../assets/icons8-git-48.png"
import FlutterLogo from "../assets/icons8-flutter-48.png"
import DockerLogo from "../assets/icons8-docker-48.png"
import GraphqlLogo from "../assets/icons8-graphql-48.png"
import JavaLogo from "../assets/icons8-java-48.png"
import NpmLogo from "../assets/icons8-npm-48.png"
import SassLogo from "../assets/icons8-sass-48.png"
import CSharpLogo from "../assets/icons8-c-sharp-logo-2-48.png"
import LinuxLogo from "../assets/icons8-linux-48.png"
import AppleLogo from "../assets/icons8-apple-logo-52.png"
import WindowsLogo from "../assets/icons8-microsoft-40.png"

const SkillsSection = styled.section`
  height: 100%;
  display: flex;
  width: 100vw;
  background-color: #2d2a2f;
  flex-direction: column;
  align-items: center;
`
const SkillSectionContent = styled.div`
  display: flex;
  width: 1980px;
  max-width: 1200px;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    margin:32px;
    display:flex;
    align-items: center;
  }
  @media (max-width: 995px) {
    flex-direction: column;
    align-items: center;
    
  }
`
const ContainerStack = styled.div`
  border: 4px solid #81ff70;
  background-color: #1f1c21;
  min-width: 255px;
  width: 380px;
  height: 100%;
  min-height: 380px;
  margin: 24px;
  padding: 32px 24px 24px;
  font-size: 3.8rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 400px) {
    width: 270px;
  }
`
const ContainerIcon = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 48px;
`
const IconsHeader = styled.h6`
  font-size: 1rem;
  margin: 8px;
`
const ContainerHeader = styled.h4`
  margin: 4px;
  width: 80%;
  text-align: center;
  font-size: 2.4rem;
  position: absolute;
  top: -32px;
  left: 8%;
  z-index: 9999;
  background-color: #685e6e;

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`

const renderTechIcons = (iconsArr: any): React.ReactElement[] => {
  return iconsArr.map((icon: any) => {
    return (
      <ContainerIcon key={`${icon.name}_`}>
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
    { icon: faJs, name: "JavaScript", isFontAwesome: true },
    { icon: faReact, name: "React", isFontAwesome: true },
    { icon: ReduxLogo, name: "Redux", isFontAwesome: false },
    { icon: faWordpress, name: "Wordpress", isFontAwesome: true },
    { icon: MaterialUI, name: "Material UI", isFontAwesome: false },
    { icon: SassLogo, name: "Sass", isFontAwesome: false },
    { icon: faHtml5, name: "HTML5", isFontAwesome: true },
    { icon: faCss3, name: "CSS", isFontAwesome: true },
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
    { icon: LinuxLogo, name: "Linux OS", isFontAwesome: false },
    { icon: AppleLogo, name: "Apple OS", isFontAwesome: false },

    { icon: WindowsLogo, name: "Windows OS", isFontAwesome: false },
  ]
  return (
    <SkillsSection id="skills">
      <PortfolioHeader headerText="Technical Skills" />
      <SkillSectionContent>
        <Fade left>
          <ContainerStack>
            <ContainerHeader>Front-End</ContainerHeader>
            {renderTechIcons(frontEndIcons)}
          </ContainerStack>
        </Fade>
        <Fade right>
          <ContainerStack>
            <ContainerHeader>Back-End</ContainerHeader>
            {renderTechIcons(backEndIcons)}
          </ContainerStack>
        </Fade>
        <Fade bottom>
          <ContainerStack>
            <ContainerHeader>Other Skills </ContainerHeader>
            {renderTechIcons(otherSkillsIcons)}
          </ContainerStack>
        </Fade>
      </SkillSectionContent>
    </SkillsSection>
  )
}

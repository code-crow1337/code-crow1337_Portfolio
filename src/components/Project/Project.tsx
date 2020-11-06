import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import { TProjectData } from "../../../types"

import flutterProject from "/home/josephine/Dev/gatsby/portfolio/src/assets/flutterProject.png"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

type TisLeft = {
  isLeft: boolean
}
const ProjectContainer = styled.div<TisLeft>`
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
  position: relative;
  ${({ isLeft }) =>
    isLeft &&
    `
  &::before {
    content:"";
    height:4px;
    width:64px;
    background-color:white;
    top:50%;
    left:-64px;
    position:absolute;
  }
  `}
  ${({ isLeft }) =>
    !isLeft &&
    `
    &::after {
    content: "";
    height: 4px;
    width: 64px;
    background-color: white;
    top: 50%;
    right: -64px;
    position: absolute;
  }
  `}
    @media (max-width: 893px) {
    &::before,&::after{
      height:0;
      width:0;
    }
  }
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
  margin-top: 18px;
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
const LiveButton = styled.button`
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  padding: 4px 16px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  background-color: #00b9a3;
  &:hover,
  &:active,
  &:focus {
    top: 54%;
    transform: translate(-50%, -50%);
  }
`
const renderTechnologies = (technologiesArr: string[]): string[] => {
  const tempArr = technologiesArr.map((tech: string) => `${tech} `)
  return tempArr.join().split("")
}
export default function Project(props: TProjectData): React.ReactElement {
  const { name, tech, date, sourceCode, live, img, left } = props
  return (
    <ProjectContainer isLeft={left}>
      <ProjectDate>{date}</ProjectDate>
      <ProjectImageContainer>
        <img src={img} alt="" />
        {live !== "" ? (
          <a href={live} target="_blank">
            <LiveButton>online</LiveButton>
          </a>
        ) : (
          ""
        )}
      </ProjectImageContainer>
      <ProjectInfo>
        <strong>
          Name:
          <br />
        </strong>
        {name}
      </ProjectInfo>
      <ProjectInfo>
        <strong>
          Technologies:
          <br />
        </strong>
        {renderTechnologies(tech)}
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

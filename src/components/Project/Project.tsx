import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import { TProjectData } from "../../../types"


type TisLeft = {
  isLeft: boolean
}
const ProjectContainer = styled.div<TisLeft>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  padding: 16px 16px 24px;
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
    &::before,
    &::after {
      height: 0;
      width: 0;
    }
    @media (max-width: 360px) {
      padding: 16px 8px;
      width: 100%;
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
const ProjectTitle = styled.h4`
  font-size: 1.5rem;
  margin:8px 0px;
  border-bottom:2px solid #81ff70;
`
const ProjectInfo = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 0;
`
const ProjectBTNContainer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 18px;
  button {
    background-color: #03b375;
    max-width: 172px;
    height: 56px;
    width: 100%;
    min-width: 124px;
    position: relative;
    border-radius: 32px;
    font-size: 1rem;
  }
  @media (max-width: 360px) {
    button {
      font-size: 0.8rem;
    }
  }
`
const renderTechnologies = (technologiesArr: string[]): string[] => {
  const tempArr = technologiesArr.map((tech: string) => `${tech} `)
  return tempArr.join().split("")
}
export default function Project(props: TProjectData): React.ReactElement {
  const { name, tech, date, sourceCode, live, img, left, text } = props
  console.log("text", text)
  return (
    <ProjectContainer isLeft={left}>
      <ProjectDate>{date}</ProjectDate>
      <ProjectImageContainer>
        <img src={img} alt="" />
      </ProjectImageContainer>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectInfo>
        <strong>
          Technologies:
          <br />
        </strong>
        {renderTechnologies(tech)}
      </ProjectInfo>

      <ProjectBTNContainer>
        <a href={sourceCode} target="_blank">
          <button>Source<br/>code</button>
        </a>
        {text ? (
          <a href={live} target="_blank">
            <button>{text}</button>
          </a>
        ) : (
          ""
        )}
      </ProjectBTNContainer>
    </ProjectContainer>
  )
}

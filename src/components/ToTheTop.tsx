import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const ToTheTopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 40px;
  bottom: 32px;
  right: 32px;
  z-index: 9999;
  height: 40px;
  color: black;
  font-size: 2rem;
  background-color: #9B91A1;
  border: 2px solid white;
  box-shadow: rgb(22, 23, 24) 0px 20px 30px -10px;
  transition: all 0.2s ease-in-out;
  padding: 2px;
  cursor: pointer;
  &:hover,
  &:active {
    transform: translateY(4px);
    background-color: #1df500;
    color: white;
    box-shadow: rgba(22, 23, 23, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`
export default function ToTheTop() {
  return (
    <Link to="#home">
      <ToTheTopContainer>
        <FontAwesomeIcon icon={faAngleUp} />
      </ToTheTopContainer>
    </Link>
  )
}

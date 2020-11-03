import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { TIconType } from "../../types"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

const IconStyle = styled.i`
  cursor: pointer;
  font-size:4rem;
  &:active {
    color: #81ff70;
  }
  @media (max-width: 884px) {
    font-size:2.5rem;
  }
`
export default function SocialIcon({
  iconType,
  link,
}: {
  iconType: IconProp
  link: string
}): React.ReactElement {
  return (
    <a href={link}>
      <IconStyle>
        <FontAwesomeIcon  icon={iconType}></FontAwesomeIcon>
      </IconStyle>
    </a>
  )
}

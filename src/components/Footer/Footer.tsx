import React from 'react'
import styled from 'styled-components';

const FooterSection = styled.footer`
  height:80px;
  background-color:limegreen;
`;
export default function Footer() {
  return (
    <FooterSection>
      I'm the footer
    </FooterSection>
  )
}

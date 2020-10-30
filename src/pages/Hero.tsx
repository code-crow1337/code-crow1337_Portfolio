import React from 'react'
import styled from 'styled-components';

const HeroSection = styled.section`
  height:100vh;
  background-color:gray;
`;

export default function Hero() {
  return (
    <HeroSection id="home">
      <h1>Hero information</h1>
    </HeroSection>
  )
}

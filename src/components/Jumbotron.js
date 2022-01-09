import React from "react"
import styled from 'styled-components'
import { Container } from "react-bootstrap";
import skylineImage from '../assets/skyline.jpg'

const Styles = styled.div`
  .jumbotron {
    background: url(${skylineImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right bottom; 
    height: 20em;
  }

  .overlay {
    color: #fefefe;
    text-shadow: 1px 1px #000;
    padding-top: 6em;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <div className="jumbotron">
      <Container className="overlay">
        <h1>Hi, I'm Emil.</h1>  
        <p>I will get better at programming using Cunningham's Law</p>
      </Container>
    </div>
  </Styles>
)
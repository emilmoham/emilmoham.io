import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const NavigationBar = () => (
  <React.Fragment>
    <Navbar expand="lg" variant='dark' bg='dark'>
      <Container>
      <Navbar.Brand href="/">Emil Mohammed</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Archive">Archive</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </React.Fragment>
)
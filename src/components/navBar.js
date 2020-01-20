import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar top_nav_desktop">
        {/* <Container> */}
        <Link to="/" className="link-no-style top_nav top_nav-left">
          <Navbar.Brand style={{ color: `#7ac143` }} as="span">
            Rebuilding Together Litchfield County
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/about_us" className="link-no-style">
              <Nav.Link
                as="span"
                eventKey="about_us"
                style={{ color: `#35641b` }}
              >
                About Us
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Button className="btn btn-danger">Donate</Button>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar

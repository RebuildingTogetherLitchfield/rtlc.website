import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/Logo_Horizontal_green.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#20232a`,
    }}
  >
    <div
      style={{
        margin: `auto`,
        maxWidth: `640px`,
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          textAlign: `center`,
        }}
      >
        <img src={logo} style={{ margin: 0 }} />{" "}
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

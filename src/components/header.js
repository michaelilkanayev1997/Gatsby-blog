import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: #f8f8f8;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 12px;
  }
`

const LogoLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;

  @media (max-width: 768px) {
    padding: 0px;
    font-size: 15px;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <LogoLink to="/">{siteTitle}</LogoLink>
  </StyledHeader>
)

export default Header

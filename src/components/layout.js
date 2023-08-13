import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure layout stretches to at least full viewport height */
`

const ContentWrapper = styled.div`
  flex: 1; /* Allow content to take up remaining space */
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`

const Footer = styled.footer`
  margin-top: auto; /* Push the footer to the bottom */
  text-align: center;
  padding: var(--space-3) 0;
  font-size: var(--font-sm);
  background-color: #f8f8f8;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
`

const FooterLink = styled.a`
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer>
        © {new Date().getFullYear()} &middot; Built with{" "}
        <FooterLink href="https://www.gatsbyjs.com">Gatsby</FooterLink>
      </Footer>
    </StyledLayout>
  )
}

export default Layout

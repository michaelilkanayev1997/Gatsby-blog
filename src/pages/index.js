import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { styled } from "styled-components"

const StyledIndexPage = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-decoration: underline;
  text-decoration-color: #999;
  text-underline-offset: 11px;
  text-decoration-style: double;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const TotalCount = styled.h4`
  font-size: 1.2rem;
  color: #666;
  text-decoration: underline;
  text-decoration-color: #999;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

const BlogCard = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`

const BlogLink = styled(Link)`
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #007bff;
  &:hover {
    color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`

const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <StyledIndexPage>
        <Title>Michael's Blog</Title>
        <TotalCount>{data.allMarkdownRemark.totalCount} Post's</TotalCount>
        <BlogList>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogCard key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>
                  {node.frontmatter.title} - {node.frontmatter.date}
                </BlogTitle>
              </BlogLink>
              <BlogExcerpt>{node.excerpt}</BlogExcerpt>
            </BlogCard>
          ))}
        </BlogList>
      </StyledIndexPage>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

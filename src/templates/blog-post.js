import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledBlogPost = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333333;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 5px;
      margin-bottom: 0.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #666666;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }

  iframe {
    width: 100%;
    max-width: 560px;
    height: 315px;
    margin: 20px auto;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    @media (max-width: 768px) {
      height: 200px;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 0;
  }
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <StyledBlogPost>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledBlogPost>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

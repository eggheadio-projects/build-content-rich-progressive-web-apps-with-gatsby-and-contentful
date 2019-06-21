import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
function Lesson({ data }) {
  return (
    <Layout>
      <SEO
        title={data.contentfulLesson.seo.title}
        description={data.contentfulLesson.seo.description}
      />
      <div className="lesson__details">
        <h2 className="text-4xl">{data.contentfulLesson.title}</h2>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query lessonQuery($slug: String!) {
    contentfulLesson(slug: { eq: $slug }) {
      title
      seo {
        title
        description
      }
    }
  }
`
export default Lesson

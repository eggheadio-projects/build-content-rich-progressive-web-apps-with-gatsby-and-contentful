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
        {documentToReactComponents(data.contentfulLesson.body.json, {
          renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => (
              <h2 className="text-4xl">{children}</h2>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
              <img src={node.data.target.fields.file["en-US"].url} />
            ),
          },
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query lessonQuery($slug: String!) {
    contentfulLesson(slug: { eq: $slug }) {
      title
      body {
        json
      }
      seo {
        title
        description
      }
    }
  }
`
export default Lesson

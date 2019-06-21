import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

function Instructor({ data }) {
  return (
    <Layout>
      <SEO
        title={data.contentfulInstructor.fullName}
        description={data.contentfulInstructor.bio.bio}
      />
      <div className="md:flex flex-row">
        <Img
          className="shadow-md"
          style={{
            width: "100%", // important for respect the flexing
            maxWidth: "200px",
          }}
          resolutions={{
            ...data.contentfulInstructor.avatar.resolutions,
            base64: data.contentfulInstructor.avatar.sqip.dataURI,
          }}
          alt={data.contentfulInstructor.fullName}
        />

        <div className="px-4 py-4">
          <h2 className="text-4xl my-3">
            {data.contentfulInstructor.fullName}
          </h2>
          <div>{data.contentfulInstructor.bio}</div>
        </div>
      </div>
      {data.contentfulInstructor.lesson && (
        <div className="border-t my-6">
          <h2 className="text-4xl text-grey-dark my-6">Lessons</h2>
          {data.contentfulInstructor.lesson.map(node => (
            <Card
              node={{ ...node, slug: `/lessons/${node.slug}` }}
              key={node.id}
            />
          ))}
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query instructorQuery($slug: String!) {
    contentfulInstructor(slug: { eq: $slug }) {
      fullName
      avatar {
        sqip(numberOfPrimitives: 30, blur: 0) {
          dataURI
        }
        resolutions(width: 200, height: 200) {
          ...GatsbyContentfulResolutions_withWebp_noBase64
        }
      }
      bio
      website
      lesson {
        id
        title
        slug
        image {
          file {
            url
          }
        }
      }
    }
  }
`
export default Instructor

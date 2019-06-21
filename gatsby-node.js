const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const lessonTemplate = path.resolve(`src/templates/lesson.js`)
  const instructorTemplate = path.resolve(`src/templates/instructor.js`)
  return graphql(`
    {
      allContentfulLesson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulLesson.edges.forEach(edge => {
      createPage({
        path: `/lessons/${edge.node.slug}`,
        component: lessonTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}

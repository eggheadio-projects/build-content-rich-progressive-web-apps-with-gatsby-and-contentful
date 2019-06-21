import React from "react"

const Card = ({ node: { title, slug, image, description } }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 px-3 flex flex-col mb-8">
    <a
      href={slug}
      className="no-underline bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition flex-1 flex flex-col overflow-hidden"
    >
      <div>
        <div
          className="bg-cover aspect-ratio-16x9"
          style={{
            height: 200,
            backgroundImage: `url(https:${
              image.file.url
            }?w=640&h=360&fit=thumb)`,
          }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="font-display text-black no-underline mb-4">{title}</h3>
      </div>
    </a>
  </div>
)

export default Card

import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.RichtextSlice} RichtextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichtextSlice>} RichtextProps
 * @param { RichtextProps }
 */
const Richtext = ({ slice }) => {

  return (
    <section className={`container justify-between text-white
      py-52 md:py-42 lg:py-60 barlow`}>
       {slice.items.map((item, idx) => {
        if (item?.text) return (
          <div className={`lg:w-${item?.width} text-base md:text-lg richtext text-left md:text-left leading-normal lg:leading-normal barlow
          tracking-wider max-w-3xl lg:my-auto`} key={`richtext-${idx}`}>
            <PrismicRichText field={item.text}/>
          </div>
          )
        })}
      <style jsx>{`
      `}</style>
    </section>
  )
}

export default Richtext

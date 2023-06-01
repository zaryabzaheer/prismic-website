import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.FooterBottomSlice} FooterBottomSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterBottomSlice>} FooterBottomProps
 * @param { FooterBottomProps }
 */
const FooterBottom = ({ slice }) => {
  return (
    <section className="bg-neutral-800 pb-10 md:py-10">
      <div className="flex space-between">
        {slice.items.map((item) => {
          return <p className='grey font-regular m-auto text-xs md:text-base' key={`${item.item}`}>{item.item}</p>
        })}
      </div>
      <style jsx>{`
      `}</style>
    </section>
  )
}

export default FooterBottom

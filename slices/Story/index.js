import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

/**
 * @typedef {import("@prismicio/client").Content.StorySlice} StorySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StorySlice>} StoryProps
 * @param { StoryProps }
 */
const Story = ({ slice }) => {
  return (
    <section className='container py-20'>
      <div className='accent mb-8'>
        <h2 className='text-lg md:text-[32px]'>{slice.primary?.title}</h2>
      </div>
      <div className='h-48 bg-cover bg-center mb-8 md:hidden'
              style={{ backgroundImage: slice.primary?.image?.url ? `url('${slice.primary.image.url}')` : '' }}>
      </div>
      <div className="grey font-medium text-xl md:text-[64px] md:leading-[77px] mb-8 max-w-6xl">
        <PrismicRichText field={slice.primary.heading}/>
      </div>
      <div className="flex">
        <div className="w-full grey text-lg md:text-[32px] font-medium leading-loose
        md:leading-[140%] md:w-6/12 richtext">
          <PrismicRichText field={slice.primary.description}/>
        </div>
        <div className="hidden md:block w-full ml-auto md:w-5/12 richtext">
          <Image
              src={slice?.primary?.image?.url}
              alt={slice?.primary?.image?.url || "Hér&Nú"}
              width={slice?.primary?.image?.dimensions?.width}
              height={slice?.primary?.image?.dimensions?.height}
              />
        </div>
      </div>
      <style jsx>{`
      `}</style>
    </section>
  )
}

export default Story

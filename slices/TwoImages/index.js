import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import ProjectSectionHeader from "../../components/project-section-header";
/**
 * @typedef {import("@prismicio/client").Content.TwoImagesSlice} TwoImagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TwoImagesSlice>} TwoImagesProps
 * @param { TwoImagesProps }
 */
const TwoImages = ({ slice }) => {
  return (
    <section className='md:container py-10 md:py-36'>
      <ProjectSectionHeader slice={slice} />
      <div className='flex flex-wrap'>
        <div className='w-1/2 md:p-2'>
          <Image
            src={slice.primary.firstimage.url}
            alt={slice.primary.firstimage.alt  || "Hér&Nú"}
            height={slice.primary.firstimage.dimensions.height}
            width={slice.primary.firstimage.dimensions.width}
          />
        </div>
        <div className='w-1/2 md:p-2'>
          <Image
            src={slice.primary.secondimage.url}
            alt={slice.primary.secondimage.alt || "Hér&Nú"}
            height={slice.primary.secondimage.dimensions.height}
            width={slice.primary.secondimage.dimensions.width}
            />
        </div>
      </div>
      <style jsx>{`
      `}</style>
    </section>
  )
}

export default TwoImages

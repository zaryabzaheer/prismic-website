import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
/**
 * @typedef {import("@prismicio/client").Content.ServiceSlice} ServiceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServiceSlice>} ServiceProps
 * @param { ServiceProps }
 */
const Service = ({ slice }) => {
  return (
    <section className='container my-20 md:my-96'>
      <div className="w-full h-72 bg-cover bg-center md:hidden mb-20 grayscale"
      style={{ backgroundImage: `url('${slice.primary?.image?.url}')` }}
      ></div>
      <h2 className='grey underline decoration-hn-lime text-5xl md:text-[80px] mb-10 underline-offset-4 decoration-2 md:decoration-4'>
        {slice.primary.heading}
      </h2>
      <div className='flex justify-between mt-4'>
        <div className='md:w-7/12 mr-10 grey text-2xl md:text-[32px] md:font-medium leading-right md:leading-relaxed max-w-lg richtext'>
          <PrismicRichText field={slice.primary.description}/>
        </div>
        <div className='w-5/12 hidden md:block'>
          <Image
            src={slice.primary?.image?.url}
            alt={slice?.primary?.image?.alt  || "Hér&Nú"}
            height={slice.primary?.image?.dimensions?.height}
            width={slice.primary?.image?.dimensions?.width}
          />
        </div>

      </div>
      <style jsx>{`
      `}</style>
    </section>
  )
}

export default Service

import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'
import Image from 'next/image'

/**
 * @typedef {import("@prismicio/client").Content.LocationSlice} LocationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LocationSlice>} LocationProps
 * @param { LocationProps }
 */
const Location = ({ slice }) => {
  return (
    <section className='container py-24'>
      <div className="mb-14">
        <div className="accent mb-5">
          <h2 className='text-lg font-light md:text-[32px] md:mb-16'>{slice.primary.title}</h2>
        </div>
        <div className="grey text-xl md:text-[64px] md:leading-[77px] font-medium">
          <PrismicRichText field={slice.primary.heading}/>
        </div>
      </div>
      {slice.items.map((location, idx)=> {
        return(
          <div className={`py-5 mb-6 md:mb-16 flex ${idx % 2 == 0 ? 'flex-wrap' : 'flex-row-reverse'}`} key={`location-${idx}`}>
            <div className={`w-5/12 py-4 flex ${idx % 2 == 0 ? 'pr-2' : 'pl-2'}`}>
              <div className="my-auto">
                <h2 className='accent text-lg md:text-[32px] mb-2 md:mb-9'>{location.title}</h2>
                <span className='text-xl grey font-medium md:text-[80px] md:leading-snug'>
                  <PrismicRichText field={location.description}/>
                </span>
                <Link href={`https://maps.google.com/?q=${location.location.latitude},${location.location.longitude}`}
                      className="hover:opacity-80"
                      target='_blank'>
                  <h2 className="mt-3 md:mt-8 grey text-base md:text-2xl underline decoration-hn-lime decoration-1 underline-offset-4">{location.link_text}</h2>
                </Link>
              </div>
            </div>
            <div className={`w-6/12 blank-grey-box ${idx % 2 == 0 ? 'ml-auto' : 'mr-auto'}`}>
              <Image
                src={location?.image?.url}
                alt={location?.image?.url || "Hér&Nú"}
                width={location?.image?.dimensions?.width}
                height={location?.image?.dimensions?.height}
                />
            </div>
          </div>
        )
      })}
      <style jsx>{`

`}</style>
    </section>
  )
}

export default Location

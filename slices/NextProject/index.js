import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import SingleProject from '../../components/single-project';

/**
 * @typedef {import("@prismicio/client").Content.NextProjectSlice} NextProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NextProjectSlice>} NextProjectProps
 * @param { NextProjectProps }
 */
const NextProject = ({ slice }) => {
  return (
    <section className='container py-10 md:py-36'>
      <div className='accent mb-8 md:mb-12'>
        <h3>{slice?.primary?.title}</h3>
      </div>
      <div
        className={`grid -mx-2`}
        style={{ gridTemplate: '"a b"/ 1fr 1fr' }}
      >
          <SingleProject
            project={slice.primary?.first_project}
            gridArea="a"
            display={"pb-[70%]"}
          />
          <SingleProject
            project={slice.primary?.second_project}
            gridArea="b"
            display={"pb-[70%]"}
          />
      </div>
      <style jsx>{`
      `}</style>
    </section>
  )
}

export default NextProject

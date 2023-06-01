import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'
import { useScroll, motion } from "framer-motion"

/**
 * @typedef {import("@prismicio/client").Content.ClientsSlice} ClientsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientsSlice>} ClientsProps
 * @param { ClientsProps }
 */
const Clients = ({ slice }) => {

  return (
    <section className="bg-neutral-800">
      <div className='container pt-14 pb-20 md:py-44'>
        <span className="flex space-between mb-5">
          <span className="accent">
            {slice.primary.title && <h3 className="md:text-2xl">{slice.primary.title}</h3>}
          </span>
          <span className="ml-auto">
            {slice.primary.link_text && <Link href={slice?.primary?.link?.url || '/'} className="hover:opacity-80">
              {slice.primary.link_text}
              </Link>
            }
          </span>
        </span>
        <div className="flex flex-wrap">
          {slice.items.map((item, idx) => {
            return <div className='mr-2' key={`client-${idx}`}>
                <Link href={item?.project?.url || '/'} key={`client-${item.name}`}>
                  <h3 className=' grey leading-normal md:leading-normal relative
                    underline-offset-4 md:decoration-4 text-2xl md:text-[80px] md:leading-[138.5%]'>
                    <p className="relative z-[1]">
                      {item.name}{idx < slice.items?.length-1 && <span>,</span>}
                    </p>
                    <span className={`block w-full pr-2 md:pr-5 pl-0.5 md:pl-2`}>
                      <motion.div
                        className={`h-0.5 w-10 bg-accent duration-1000 -mt-1 md:-mt-4`}
                        initial={{ width: '10px', marginBottom: '3rem' }}
                        whileInView={{ width: '100%', marginBottom: '0rem' }}
                      />
                    </span>
                  </h3>
                </Link>
            </div>
          })}
        </div>
        <style jsx>{`
    `}</style>
      </div>
    </section>

  )
}

export default Clients

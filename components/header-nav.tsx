import React, { useState, useEffect } from 'react';
import { PrismicRichText } from '@prismicio/react'
import Link from "next/link";
import Image from 'next/image'

const HeaderNav = (props : any ) => {
  const { data, navOpen } = props;

  return (
    <>
      <div className={`container flex mt-5vh md:mt-30vh ${navOpen ? 'block' : 'hidden'}`}>
        <div className="md:w-6/12">
            {data?.list && data?.list[0].items.map((item, idx) => (
              <Link href={item?.item?.url || '/'} key={`headernav-${idx}`} className="hover:opacity-80">
                  <h2 className={`relative ${item.mobile_only ? 'md:hidden mb-7' : 'mb-5'}`} 
                    key={`menulist-${idx}`}>
                    {!item.mobile_only &&
                    <span className="transform-rotate absolute left-0 top-2/4 accent text-base md:text-2xl inline-block align-middle">0{idx+1}</span>
                    }
                    <span className={`grey tracking-wide text-4xl md:text-4xl lg:text-5xl xl:text-6xl ${item.mobile_only ? 'accent' : 'ml-7'}`}>
                      {item.title}
                    </span>
                </h2>
              </Link>
            ))}
        </div>
        <div className="w-6/12 hidden md:flex">
          <div className="w-3/12"></div>
          <h2 className="grey tracking-wide text-sm md:text-4xl lg:text-5xl xl:text-6xl 
          font-medium accent-richtext leading-tight">
            <PrismicRichText field={data.text}/>
          </h2>
        </div>
      </div>
      <style jsx>{`
        .transform-rotate {
          transform:  translateX(-50%) translateY(-50%) rotate(-90deg);
        }
        `}</style>
    </>
  )
}

export default HeaderNav

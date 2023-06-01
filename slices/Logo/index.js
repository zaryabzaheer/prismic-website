import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import Image from 'next/image'
import { useState } from 'react'

/**
 * @typedef {import("@prismicio/client").Content.LogoSlice} LogoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoSlice>} LogoProps
 * @param { LogoProps }
 */
const Logo = ({ slice }) => {

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: slice?.items?.length - 1,
    }
  )
  const [thumbnailRef] = useKeenSlider(
    {
      initial: slice?.items?.length - 1,
      slides: {
        perView: slice?.items?.length,
        spacing: 0,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  ) 

  
  return (
    <section className='container py-10 md:py-20'>
      <h2 className="accent text-base md:text-[32px] md:mb-10">{slice?.primary?.title}</h2>
      <div className="grey text-xl md:text-[64px] md:leading-[140%] font-medium mt-5">
        <PrismicRichText field={slice?.primary?.description}/>
      </div>
      <div ref={sliderRef} className="keen-slider md:p-10 mt-20 mb-20">
        {slice?.items?.slice()?.reverse()?.map((item, idx) => {
          return (
                <div key={`logo-slider-${idx}`} className="keen-slider__slide flex flex-col justify-center">
                  <Image
                    src={item?.logo?.url}
                    alt={item?.logo?.alt || 'Hér&Nú'}
                    width={600}
                    height={500}
                    style={{ objectFit: 'contain'}}
                    className="p-10 md:p-0 mx-auto"
                  />  
                </div>
            )
          })}
      </div>
      <div ref={thumbnailRef} className="keen-slider py-10">
        {slice.items.slice().reverse().map((item, idx) => {
          return (
                <div key={`logo-slider-thumbs-${idx}`} className="keen-slider__slide flex flex-col justify-center thumbnail relative">
                  <div className="mx-auto hover:opacity-80 cursor-pointer">
                    <span className="w-full h-px block grey-bg absolute left-0 top-1 md:top-3 z-[-1]"></span>
                    <span className="grey-bg block mx-auto h-3 md:h-6 w-3 md:w-6 rounded-full slider-dot">
                    </span>
                    <p className="text-sm md:text-[32px] md:leading-[138.5%] font-medium mt-5 mx-auto grey">{item.year}</p>
                    
                  </div>
                </div>
            )
          })}
      </div>
      <style jsx>{`
      .keen-slider__slide.active .slider-dot {
        background-color: #E8FF85;
      }
      `}</style>
    </section>
  )
}

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details?.slides?.length-1)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default Logo

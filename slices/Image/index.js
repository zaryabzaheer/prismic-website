import React from "react";
import ProjectSectionHeader from "../../components/project-section-header";

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const SingleImage = ({ slice }) => {
  return (
    <section className={`py-10 md:py-36 mx-auto ${slice?.primary?.fullscreen ? '' : 'px-5 md:px-20'}`}>
      <ProjectSectionHeader slice={slice} />
       <div
        className={`w-full h-auto bg-center bg-cover
        ${slice?.primary?.fullscreen ? 'pb-[56%]' : 'pb-[70%]'}`}
        style={{ backgroundImage: `url('${slice?.primary?.image?.url}')`}}>
       </div>
      <style jsx>{`
      `}</style>
    </section>
  )
}

export default SingleImage;

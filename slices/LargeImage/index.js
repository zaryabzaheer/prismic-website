import React from 'react'
import ProjectSectionHeader from "../../components/project-section-header";

/**
 * @typedef {import("@prismicio/client").Content.LargeImageSlice} LargeImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LargeImageSlice>} LargeImageProps
 * @param { LargeImageProps }
 */
const LargeImage = ({ slice }) => {
  return (
  <section className="py-10 md:py-36">
    <ProjectSectionHeader slice={slice} />
    <div
      className="w-full h-auto bg-center bg-cover"
      style={{ backgroundImage: `url('${slice?.primary?.image?.url}')`,
      paddingBottom: '73%'}}>
    </div>
    <style jsx>{`
    `}</style>
  </section>
)}

export default LargeImage
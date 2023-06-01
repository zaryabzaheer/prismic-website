import React from "react";
import { PrismicRichText } from "@prismicio/react";
/**
 * @typedef {import("@prismicio/client").Content.ProjectDescriptionSlice} ProjectDescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectDescriptionSlice>} ProjectDescriptionProps
 * @param { ProjectDescriptionProps }
 */
const ProjectDescription = ({ slice }) => {
  return (
    <section className="container md:grid md:grid-rows-auto md:grid-flow-col md:gap-10 md:gap-y-5
      py-8 md:pt-28 md:pb-12">
      {slice.items.map((item, idx) => (
        <div
          className={`mb-16 md:mb-0 ${item.position === "Left" ? "row-span-3" : ""}`}
          key={item.title}
        >
          <div className="accent mb-5">
            <h3 className="md:text-2xl">{item.title}</h3>
          </div>
          <span className="grey">
            <h4 className="font-normal md:text-2xl max-w-2xl">
              <PrismicRichText field={item.description} />
            </h4>
          </span>
        </div>
      ))}
      <style jsx>{``}</style>
    </section>
  );
};

export default ProjectDescription;

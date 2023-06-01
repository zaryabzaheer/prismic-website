import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.AccomplishmentsSlice} AccomplishmentsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AccomplishmentsSlice>} AccomplishmentsProps
 * @param { AccomplishmentsProps }
 */
const Accomplishments = ({ slice }) => {
  return (
    <section className="container py-10 md:py-20">
      <div className="accent font-semibold mb-7">
        <h2 className="text-lg md:text-[32px]">{slice.primary.title}</h2>
      </div>
      <div className="grey">
        <h2 className="text-lg md:text-[40px] font-semibold leading-normal md:leading-normal max-w-6xl">
          <PrismicRichText field={slice.primary.description} />
        </h2>
      </div>
      <table className="w-full mb-10 mt-10 md:mt-14">
        <thead>
        </thead>
        <tbody>
            {slice.items.map((item, idx) => { return(
                <tr className={`flex justify-between grey py-4 md:py-7 text-sm md:text-2xl font-medium
                border-b-2 md:border-b border-lime-200
                ${idx == 0 ? 'border-t-2 md:border-t' : ''}`}
                key={`accomplishment-${idx}`}>
                  <td className="w-1/12 md:w-1/12">{item.year}</td>
                  <td className="w-2/12 md:w-1/12">{item.award}</td>
                  <td className="md:w-2/12 hidden md:block whitespace-nowrap">{item.category}</td>
                  <td className="w-4/12 md:w-1/12 md:hidden">{item.category_mobile}</td>
                  <td className="w-3/12 md:w-1/12 font-normal">{item.client}</td>
                  <td className="md:w-3/12 hidden md:block font-normal">{item.project}</td>
                </tr>
            )})}
        </tbody>
      </table>
      <style jsx>{``}</style>
    </section>
  );
};

export default Accomplishments;

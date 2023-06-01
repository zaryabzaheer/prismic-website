import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

const SingleProject = ({ project, display, gridArea }) => {
	// For longer elements in masonry grid. Needs to be updated if font size or margins are changed.
	const height = "calc(100% - 67px - 2.5rem)";
	const mobileHeight = "calc(100% - 40px - 1.5rem)";

  return (
    <Link
      href={project?.url || "/"}
      className={`w-full px-2 py-3 hover:opacity-80`}
      style={{ gridArea: gridArea }}
    >
      <div
        className={`hidden md:block w-full bg-center bg-cover h-auto ${display}`}
        style={{
          backgroundImage: `url('${project?.data?.image?.url}')`,
          height: height,
        }}
      ></div>
      <div
        className={`md:hidden w-full bg-center bg-cover pb-[100%] h-auto`}
        style={{
          backgroundImage: `url('${project?.data?.image?.url}')`,
          height: mobileHeight,
        }}
      ></div>
      <div className="my-3 md:my-5">
        <h3 className="accent md:mb-3 text-base md:text-2xl">
          {project?.data?.title}
        </h3>
        <h4 className="grey text-xs md:text-base">
          <PrismicRichText field={project?.data?.description} />
        </h4>
      </div>
    </Link>
  )
}

export default SingleProject;

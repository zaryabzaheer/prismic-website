import Link from "next/link";
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'

const Footer = (props : any) => {
  const { data } = props;
  return (
    <>
      <div className="footer">
        <SliceZone slices={data} components={components} />
      </div>
      <style jsx>{`
      .footer {
        background-color: ${data?.primary?.background};
      }
        `}</style>
    </>
  )
}

export default Footer

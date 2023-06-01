import Link from "next/link";
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'

const NotFound = (props : any) => {
  const { data } = props;
  return (
    <>
        <section className="container py-40 md:py-80">
            <h1 className="grey tracking-wide text-xl md:text-4xl lg:text-5xl xl:text-6xl 
                font-medium accent-richtext leading-tight">Því miður fannst þessi síða ekki</h1>
            <Link className="grey flex h-full mt-10 hover:opacity-80" href={'/'}>
            <>
                <h4 className="text-sm md:text-lg">Aftur á forsíðu</h4>
                <span
                className="ml-3 md:ml-5 w-8 md:w-32 bg-right bg-no-repeat h-5 md:h-7"
                style={{ backgroundImage: 'url(/images/arrow.svg)' }}>
                </span>
            </>
            </Link>
        </section>
      <style jsx>{`
        `}</style>
    </>
  )
}

export default NotFound

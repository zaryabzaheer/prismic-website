// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import NotFound from '../components/404'

const Page = ({page, layout}) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (!page || !layout) {
  //     router.push('/notfound');
  //   }
  // });
  
  if (layout) {
    return (
      <Layout layout={layout} altLangs={page.alternate_languages} page={page}>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    )
  } else {
    return (
      <Layout layout={layout}>
        <NotFound></NotFound>
      </Layout>
    )
  }
}

export default Page

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData })

  try {
    const layout = await client.getSingle('layout', {
      lang: locale,
      fetchLinks: [
        'project.title', 'project.description', 'project.image',
        'team.slices', 'layout.slices'
      ],
    })
    const page = await client.getSingle('homepage', {
      lang: locale,
      fetchLinks: [
        'project.title', 'project.description', 'project.image',
        'team.slices'
      ],
    })
    return {
      props: {
        page,
        layout
      },
    }
  } catch (error) {
    console.log("Document not found")
    return {
      props: {
        
      },
    }
  }
}

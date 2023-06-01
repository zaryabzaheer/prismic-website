import React, { useEffect } from "react";
import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import NotFound from '../components/404'

const Page = ({page, layout}) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (!page) {
  //     router.push('/notfound');
  //   }
  // });

  if (page) {
    return (
      <Layout layout={layout} altLangs={page.alternate_languages} page={page}>
        <SliceZone slices={page?.data?.slices} components={components} />
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

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData })
  const layout = await client.getSingle('layout', { lang: locale })

  try {
    const page = await client.getByUID('page', params.uid, {
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
        layout
      },
    }
  }

}

export async function getStaticPaths() {
  const client = createClient()

  const documents = await client.getAllByType('page', { lang: '*' })

  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid }, locale: doc.lang }
    }),
    fallback: true,
  }
}

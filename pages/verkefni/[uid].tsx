import React, { useEffect } from "react";
import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import Layout from '../../components/layout'
import NotFound from '../../components/404'
import { useRouter } from 'next/router'

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

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData })
  const layout = await client.getSingle('layout', { lang: locale })

  try {
    const page = await client.getByUID('project', params.uid, {
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

  const pages = await client.getAllByType('project', { lang: '*' })

  return {
    paths: pages.map((page) => {
      return { params: { uid: `/verkefni/${page.uid}` }, locale: page.lang }
    }),
    fallback: true,
  }
}

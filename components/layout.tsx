import Head from 'next/head'
import Footer from './footer'
import Header from './header'
import CookiePopup from './cookie-popup'
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Script from 'next/script'

const Layout = (props : any) => {
  const { children, layout, altLangs, page } = props;
  const [overflow, setOverflow] = useState(false);

  const updateOverflow = (add : any) => {
    setOverflow(add);
    if (add) $('html').removeClass('overflow-hidden');
    else $('html').addClass('overflow-hidden');
  }
  return (
    <>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script id="google-tag-script" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
        <Script
          id="google-tag-code"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      <Head>
        <title>{page?.data?.title_tag || layout?.data?.seo_title_tag}</title>
        <meta name="description" content={page?.data?.meta_description || layout?.data?.seo_meta_description} />
        <link rel="icon" href={layout?.data?.favicon?.url || ''} />
        <meta property="og:type" content="website" />
  			<meta property="og:title" content={page?.data?.meta_title || layout?.data?.seo_meta_title} />
  			<meta property="og:site_name" content={layout?.data?.seo_site_name} />
        <meta name="keywords" content={layout?.data?.seo_keywords} />
  			<meta property="og:description" content={page?.data?.meta_description || layout?.data?.seo_meta_description} />
  			<meta property="og:image" name="image" content={page?.data?.seo_meta_image?.url || layout?.data?.seo_meta_image?.url} />
      </Head>
      <div className={`herognu overflow-hidden min-h-screen`}>
        <Header
          altLangs={altLangs}
          layout={layout?.data}
          page={page?.data}
          navigationdata={{list: layout?.data?.slices2, text: layout?.data?.nav_text}}
          updateOverflow={updateOverflow}
        />
        <div className="layout min-h-[65vh]">{children}</div>
        <Footer data={layout?.data?.slices3} />
        <CookiePopup data={layout?.data} />
      </div>
      <style jsx>{`
        .herognu {
          background-color: ${layout?.data?.site_background}
        }
        `}
      </style>
    </>
  )
}


export default Layout

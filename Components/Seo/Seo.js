import React from 'react'
import Head from 'next/head';
const Seo = (props) => {
  return (
    <Head>
      <title>Code Hustler | { props.SeoTitle}</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    <meta name="name" content="Code Hustler" />
    <meta name="description" content="This blog will help the new beginner to learn to code  faster" />
  </Head>
  )
}

export default Seo
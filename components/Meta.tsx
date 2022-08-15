import type { NextPage } from 'next'
import Head from 'next/head'

interface Props {
  title?: string
  keywords?: string
  description?: string
  websiteUrl?: string
  type?: string
  siteName?: string
  imageSource?: string
  imageType?: string
  imageAltText?: string
  imageWidth?: string
  imageHeight?: string
}

const Meta: NextPage<Props> = ({
  title,
  keywords,
  description,
  websiteUrl,
  type,
  siteName,
  imageSource,
  imageType,
  imageAltText,
  imageWidth,
  imageHeight,
}) => {
  return (
    <Head>
      {/* General */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta charSet="utf-8"></meta>
      <meta name="robots" content="follow, index" />
      <meta name="keywords" content={keywords}></meta>
      <link rel="canonical" href={websiteUrl} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      {/* Open Graph */}
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageSource} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:alt" content={imageAltText} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
    </Head>
  )
}

export default Meta

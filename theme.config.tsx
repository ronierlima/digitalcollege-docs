import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>FS11</span>,
  project: {
    link: 'https://github.com/ronierlima/digitalcollege-docs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/ronierlima/digitalcollege-docs',
  footer: {
    text: 'By Ronier Lima',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://fs11.ronierlima.dev' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'FS11'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Página de documentação para turma fs11'}
        />
      </>
    )
  }
}

export default config

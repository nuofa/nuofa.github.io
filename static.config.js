import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/contacts/',
        component: 'src/containers/Contacts',
      },
      {
        path: '/products/',
        component: 'src/containers/Products',
      },
      {
        path: '/services/',
        component: 'src/containers/Services',
      },
      {
        path: '/eprism/',
        component: 'src/containers/EPrism',
      },
      {
        path: '/paypalbox/',
        component: 'src/containers/Paypalbox',
      },
      {
        path: '/stemiot/',
        component: 'src/containers/StemIot',
      },
      {
        path: '/bitcoinbox/',
        component: 'src/containers/Bitcoinbox',
      },
      {
        path: '/signin/',
        component: 'src/containers/Signin',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    // The styles are collected from each page component
    const html = render(sheet.collectStyles(<Comp />))
    // The collected page styles are stored in `meta`
    meta.styleTags = sheet.getStyleElement()
    // Return the html string for the page
    return html
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    // `renderMeta.styleTags` contains the styles we need to inject
    // into the head of each page.
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta charset="utf-8" />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}

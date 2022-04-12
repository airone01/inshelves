import React from 'react'
import type { AppProps } from 'next/app'

import Ui from '../components/UI'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Ui>
        <Component {...pageProps} />
      </Ui>
    </>
  )
}

export default MyApp

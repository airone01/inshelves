import React from 'react';
import type { AppProps } from 'next/app';

import UI from '../components/UI';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UI>
        <Component {...pageProps} />
      </UI>
    </>
  )
}

export default MyApp

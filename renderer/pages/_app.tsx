import React from 'react';
import type { AppProps } from 'next/app';
import TitleBar from './titlebar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <TitleBar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp

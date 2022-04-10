import React from 'react';
import type { AppProps } from 'next/app';

import UI from '../components/UI';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <UI>
        <Component {...pageProps} />
      </UI>
    </React.Fragment>
  )
}

export default MyApp

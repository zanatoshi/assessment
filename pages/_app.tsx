import {Container} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';
import {HeaderBanner} from '../src/apps/header/HeaderBanner';
import theme from '../src/theme';

const useStyles = makeStyles({
  content: {
    margin: '0 auto',
  },
});
export default function MyApp(props: AppProps) {
  const {Component, pageProps} = props;
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <HeaderBanner />
        <Container className={classes.content}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

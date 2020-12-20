import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang='en' dir='ltr'>
        <Head>
          {/* <script src='https://cdn.lr-ingest.io/LogRocket.min.js' crossOrigin='anonymous' />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.LogRocket && window.LogRocket.init('ushzey/syanpse-prep');
              `
            }}
          /> */}
          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-141292271-1' />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-141292271-1');
          `
            }}
          />
          <script src='https://js.stripe.com/v3/' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          {/* PWA primary color */}
          <meta
            name='theme-color'
            content={pageContext ? pageContext.theme.palette.primary.main : null}
          />
          <meta
            name='description'
            content='Offering in-home and online tutoring. Enroll in a 2-day SAT or ACT
            prep class in Austin, Texas. Our world class tutors guide students through fun and easy
            to follow curriculum.'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
          <link
            rel='stylesheet'
            href='https://everythingfonts.com/font/face/0I2QRA8Tx3q_Wr3LvlRUIweF'
            type='text/css'
          />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='shortcut icon' type='image/x-icon' href='/static/images/favicon.ico' />
          <title>Creative, Fun, and Straightforward Tutoring and Test Prep.</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired
    };

    return WrappedComponent;
  });

  let css;
  // It might be undefined, e.g. after an error.
  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id='jss-server-side'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
        {flush() || null}
      </React.Fragment>
    )
  };
};

export default MyDocument;

import React, { ReactElement } from 'react';
import Helmet from 'react-helmet';

interface AppProps {
  hello: string;
}

/**
 * First App component
 *
 * @returns {ReactElement}
 *
 */
export default ({ hello }: AppProps): ReactElement => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>New App</title>
      <link rel='canonical' href='https://google.com' />
    </Helmet>
    <h2>Hello</h2>
  </>
);

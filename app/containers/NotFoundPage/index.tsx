/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

export default function NotFound() {
  return (
    <article>
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Not found page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>ERROR 404! Page Not Found</H1>
    </article>
  );
}

/*
 * LibraryPage
 *
 * List all the features
 */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Header from '../../components/Header/index';
import H1 from 'components/H1';

export default function LibraryPage() {
  return (
    <div>
      <Helmet>
        <title>Library Page</title>
        <meta
          name="description"
          content="Library page of React.js Boilerplate application for about page"
        />
      </Helmet>
      <Header />
    </div>
  );
}

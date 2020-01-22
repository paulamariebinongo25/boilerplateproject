/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('../LoginPage/index'), {
  fallback: <LoadingIndicator />,
});

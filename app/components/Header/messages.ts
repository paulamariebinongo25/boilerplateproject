/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  stream: {
    id: `${scope}.stream`,
    defaultMessage: 'Stream',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  library: {
    id: `${scope}.library`,
    defaultMessage: 'Library',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'Signup',
  },
});

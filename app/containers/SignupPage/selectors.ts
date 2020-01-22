/**
 * Signuppage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectSignup = (state: ApplicationRootState) => {
  return state.signup || initialState;
};

const makeSelectUsername = () =>
  createSelector(
    selectSignup,
    substate => {
      return substate.username;
    },
  );

export { selectSignup, makeSelectUsername };

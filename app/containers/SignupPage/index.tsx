// /*
//  * SignupPage
//  *
//  * This is the first thing users see of our App, at the '/' route
//  */

// import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import { useDispatch, useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
// import {
//   makeSelectError,
//   makeSelectLoading,
//   makeSelectRepos,
// } from 'containers/App/selectors';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
// import reducer from './reducer';
// import saga from './saga';

// const key = 'signup';

// const stateSelector = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// export default function SignupPage() {
//   const { repos, username, loading, error } = useSelector(stateSelector);
//   const [isModalActive, setIsModalActive] = React.useState(false);
//   const dispatch = useDispatch();

//   // Not gonna declare event types here. No need. any is fine
//   const onChangeUsername = (evt: any) =>
//     dispatch(changeUsername(evt.target.value));
//   const onSubmitForm = (evt?: any) => {
//     if (evt !== undefined && evt.preventDefault) {
//       evt.preventDefault();
//     }
//     if (!username) {
//       return;
//     }
//     dispatch(loadRepos());
//   };

//   useInjectReducer({ key: key, reducer: reducer });
//   useInjectSaga({ key: key, saga: saga });

//   useEffect(() => {
//     // When initial state username is not null, submit the form to load repos
//     if (username && username.trim().length > 0) {
//       onSubmitForm();
//     }
//   }, []);

//   const reposListProps = {
//     loading: loading,
//     error: error,
//     repos: repos,
//   };

//   return <div></div>;
// }

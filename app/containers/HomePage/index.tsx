/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectRepos,
} from 'containers/App/selectors';
import Header from '../../components/Header/index';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import Footer from '../../../app/components/Footer/index';

const key = 'login';

const stateSelector = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function HomePage() {
  const { repos, username, loading, error } = useSelector(stateSelector);

  // const [values, setValues] = React.useState('');
  // const [jsonData, setJonData] = React.useState([]);

  // async function fetchData() {
  //   const res = await fetch(
  //     'https://api.soundcloud.com/users/3207?client_id=YOUR_CLIENT_ID',
  //   );
  // const res1 = await res.json();

  // setJsonData(res1);
  // setData(res1);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const dispatch = useDispatch();

  // // Not gonna declare event types here. No need. any is fine

  return (
    <article>
      <Helmet>
        <title>Home Page - React JS Boilerplate</title>
        <meta
          name="description"
          content="A React.js Boilerplate application home page"
        />
      </Helmet>
      <div>
        <Header />
        <CenteredSection>
          {/* <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p> */}
        </CenteredSection>
        <Section>
          {/* <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form> */}
          {/* <ReposList {...reposListProps} /> */}
        </Section>
      </div>
      <Footer />
    </article>
  );
}

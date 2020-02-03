/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LibraryPage from 'containers/LibraryPage/Loadable';
import StreamPage from 'containers/StreamPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

import 'bulma/css/bulma.css';

const AppWrapper = styled.div`
  /* max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column; */
  height: 100vh;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        // titleTemplate="%s - React.js Boilerplate"
        titleTemplate="%s"
        defaultTitle="ReactJS Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={HomePage} />
        <Route path="/stream" component={StreamPage} />
        <Route path="/library" component={LibraryPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}

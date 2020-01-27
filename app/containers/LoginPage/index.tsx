/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import HeaderLink from '../../components/Header/HeaderLink';
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

const key = 'login';

const stateSelector = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function LoginPage(props: any) {
  const { repos, username, loading, error } = useSelector(stateSelector);
  const [isModalActive, setIsModalActive] = React.useState(false);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    if (isModalActive) {
      setIsModalActive(false);
    } else {
      setIsModalActive(true);
    }
  };

  // Not gonna declare event types here. No need. any is fine
  const onChangeUsername = (evt: any) =>
    dispatch(changeUsername(evt.target.value));
  const onSubmitForm = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    if (!username) {
      return;
    }
    dispatch(loadRepos());
  };

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }, []);

  const reposListProps = {
    loading: loading,
    error: error,
    repos: repos,
  };

  return (
    <div className="columns is-mobile is-centered">
      <div className="box">
        {/* <div className="card"> */}
        {/* <header className="card-header"> */}
        <h3 className="card-header-title is-centered has-text-info">
          Login Page
        </h3>
        {/* </header> */}
        <div className="field">
          <label className="label">Email Address</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email Address"
              // value="hello@"
            />
            <span className="icon has-text-info is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>

            <span className="icon has-text-success is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="password"
              placeholder="Password"
              // value="hello@"
            />
            <span className="icon has-text-info is-small is-left">
              <i className="fas fa-lock"></i>
            </span>

            <span className="icon has-text-success is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <div className="btn">
              <button className="button is-centered is-info has-text-white is-fullwidth is-medium">
                Login
              </button>
            </div>
          </p>
        </div>
        <div className="field">
          <div className="control">
            <h5 className="level">
              <label className="checkbox">
                <input type="checkbox" />
                <span className="text">Rememeber Me</span>
                <a className="link" href="#">
                  Forgot Password?
                </a>
              </label>
            </h5>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <h5 className="container is-pulled-left">
              <label className="level">
                <span>Don't have an account?</span>
                <HeaderLink
                  className={`button is-outlined is-rounded is-info is-light btn-remove ${
                    isModalActive ? 'is-active' : ''
                  }`}
                  onClick={handleOpenModal}
                  data-target="modalClass"
                >
                  <div
                    id="modalClass"
                    className={`modal ${isModalActive ? 'is-active' : ''}`}
                  >
                    <div className="modal-background is-mobile is-centered">
                      <div className="modal-card">
                        <header className="modal-card-head">
                          {/* <div className="level">
                            <span className="icon has-text-info is-large is-left">
                              <i className="fas fa-arrow-left"></i>
                            </span> */}
                            <h3 className="modal-card-title has-text-info">
                              Create Account
                            </h3>
                          {/* </div> */}
                          <button
                            className="delete has-text-primary"n
                            aria-label="close"
                          ></button>
                        </header>
                        <section className="modal-card-body"></section>
                        <footer className="modal-card-foot">
                          <button className="button is-success">
                            Save changes
                          </button>
                          <button className="button">Cancel</button>
                        </footer>
                      </div>
                    </div>
                  </div>
                  Signup
                </HeaderLink>
              </label>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <HeaderLink
                  className={`button is-info has-text-white is-rounded is-info btn ${
                    isModalActive ? 'is-active' : ''
                  }`}
                  onClick={handleOpenModal}
                  data-target="modalClass"
                >
                  <div
                    id="modalClass"
                    className={`modal ${isModalActive ? 'is-active' : ''}`}
                  >
                    <div className="modal-background is-mobile is-centered">
                      <div className="modal-card">
                        <header className="modal-card-head">
                          <h3 className="modal-card-title has-text-info">
                            Signup Page
                          </h3>
                          <button
                            className="delete"
                            aria-label="close"
                          ></button>
                        </header>
                        <section className="modal-card-body"></section>
                        <footer className="modal-card-foot">
                          <button className="button is-success">
                            Save changes
                          </button>
                          <button className="button">Cancel</button>
                        </footer>
                      </div>
                    </div>
                  </div>
                  Create an account
                </HeaderLink> */
}

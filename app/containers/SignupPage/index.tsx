/*
 * SignupPage
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
import HeaderLink from '../../components/Header/HeaderLink';
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

const key = 'signup';

const stateSelector = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function SignupPage() {
  const { repos, username, loading, error } = useSelector(stateSelector);
  // const [isModalActive, setIsModalActive] = React.useState(false);

  const [userName, setUserName] = React.useState(
    localStorage.getItem('Name' || 'userName'),
  );

  const [userEmail, setUserEmail] = React.useState(
    localStorage.getItem('Email' || 'userEmail'),
  );

  const [userPhone, setUserPhone] = React.useState(
    localStorage.getItem('Phone' || 'userPhone'),
  );

  const [userPassword, setUserPassword] = React.useState(
    localStorage.getItem('Password' || 'userPassword'),
  );

  const [userConfirmPassword, setUserConfirmPassword] = React.useState(
    localStorage.getItem('Confirm Password' || 'userConfirmPassword'),
  );

  useEffect(() => {
    localStorage.setItem('Name', userName);
    localStorage.setItem('Email', userEmail);
    localStorage.setItem('Phone', userPhone);
    localStorage.setItem('Password', userPassword);
    localStorage.setItem('Confirm Password', userConfirmPassword);
  }, [userName, userEmail, userPhone, userPassword, userConfirmPassword]);

  const dispatch = useDispatch();

  const handleOnChangeName = e => setUserName(e.target.value);
  const handleOnChangeEmail = e => setUserEmail(e.target.value);
  const handleOnChangePhone = e => setUserPhone(e.target.value);
  const handleOnChangePassword = e => setUserPassword(e.target.value);
  const handleOnChangeConfirmPassword = e =>
    setUserConfirmPassword(e.target.value);

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

  // function useLocalStorage(key, initialValue){
  //   const [storedValue, setStoredValue] = React.useState(()=>{
  //     try {
  //       const item = window.localStorage.getItem(key);
  //       return item ? JSON.parse(item) : initialValue;
  //     }
  //    catch(error){
  //     console.log(error);
  //     return initialValue;
  //    }
  //   })

  //   const setValue = value => {
  //     try {
  //       const valueToStore = value instanceof Function ? value(storedValue) : value;
  //       setStoredValue(valueToStore);
  //       window.localStorage.setItem(key, JSON.stringify(valueToStore));
  //     } catch (error){
  //       console.log(error)
  //     }
  //   }
  //   return [storedValue, setValue]
  // }

  const reposListProps = {
    loading: loading,
    error: error,
    repos: repos,
  };

  return (
    <div>
      <Helmet>
        <title>Signup-ReactJS Boilerplate</title>
        <meta
          name="description"
          content="Signup page of React.js Boilerplate application"
        />
      </Helmet>
      {/* <nav className="nav-header navbar" role="navigation" aria-label="main navigation">
         jsjdjs
        </nav> */}
      <div className="columns is-mobile is-centered">
        <div className="box">
          <div className="form-container container">
            <HeaderLink to="/login">
              <span className="header-icon icon is-large has-text-dark has-text-large is-left">
                <i className="fas fa-arrow-left is is-large"></i>
              </span>
            </HeaderLink>
            <h3 className="header-title card-header-title has-text-centered is-centered has-text-dark">
              Signup Page
            </h3>
          </div>

          <div className="field">
            <label className="label has-text-left">Username</label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="text"
                placeholder="Username"
                value={userName}
                name={'userName'}
                onChange={handleOnChangeName}
              />
              <span className="icon has-text-dark is-medium is-left">
                <i className="fas fa-user"></i>
              </span>

              <span className="icon has-text-success is-medium is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label has-text-left">Email Address</label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="text"
                placeholder="Email Address"
                value={userEmail}
                name={'userEmail'}
                onChange={handleOnChangeEmail}
              />
              <span className="icon has-text-dark is-medium is-left">
                <i className="fas fa-envelope"></i>
              </span>

              <span className="icon has-text-success is-medium is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label has-text-left">Phone Number</label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="number"
                placeholder="Phone Number"
                value={userPhone}
                name={'userPhone'}
                onChange={handleOnChangePhone}
              />
              <span className="icon has-text-dark is-medium is-left">
                <i className="fas fa-mobile"></i>
              </span>

              <span className="icon has-text-success is-medium is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label has-text-left">Password</label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="password"
                placeholder="Password"
                value={userPassword}
                name={'userPassword'}
                onChange={handleOnChangePassword}
              />
              <span className="icon has-text-dark is-medium is-left">
                <i className="fas fa-lock"></i>
              </span>

              <span className="icon has-text-success is-medium is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label has-text-left">Confirm Password</label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type="password"
                placeholder="Confirm Password"
                value={userConfirmPassword}
                name={'userConfirmPassword'}
                onChange={handleOnChangeConfirmPassword}
              />
              <span className="icon has-text-dark is-medium is-left">
                <i className="fas fa-lock"></i>
              </span>

              <span className="icon has-text-success is-medium is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control">
              <div className="submit-btn">
                <button
                  className="button is-centered is-rounded is-dark has-text-white is-fullwidth is-medium"
                  type="submit"
                >
                  Create Account
                </button>
              </div>
            </p>
          </div>
          <div className="field">
            <div className="control">
              <h5 className="container is-pulled-left">
                <label className="level">
                  <span>Already have an account?</span>
                  <HeaderLink to="/">
                    <button className="signup-footer-btn button is-rounded is-outlined is-dark is-light has-text-black">
                      Login
                    </button>
                  </HeaderLink>
                </label>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

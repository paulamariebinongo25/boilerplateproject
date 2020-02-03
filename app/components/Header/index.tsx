import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
// import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import BannerHero from './bannerHero.jpg';
import messages from './messages';
import Logo from '../../images/soundcloud.png';

import '../../styles/appStyles/style.css';

function Header(props: any) {
  const [isBurgerActive, setIsBurgerActive] = React.useState(false);
  const [isModalActive, setIsModalActive] = React.useState(false);

  const handleOnClickMenu = () => {
    if (isBurgerActive) {
      setIsBurgerActive(false);
    } else {
      setIsBurgerActive(true);
    }
  };

  const handleOpenModal = () => {
    if (isModalActive) {
      setIsModalActive(false);
    } else {
      setIsModalActive(true);
    }
  };

  return (
    <nav
      className="navbar is-active is-dark"
      role="navigation"
      ari-label="main navigation"
    >
      <div className="container is-widescreen">
        <div className="navbar-brand">
          <A className="navbar-item" href="https://bulma.io">
            <img src={Logo} width="40" height="100" />
          </A>

          <A
            role="button"
            className={`navbar-burger burger ${
              isBurgerActive ? 'is-active' : ''
            }`}
            onClick={handleOnClickMenu}
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </A>
        </div>

        <div
          id="navMenu"
          className={`navbar-menu ${isBurgerActive ? 'is-active' : ''}`}
        >
          <div className="navbar-start">
            <HeaderLink className="navbar-item" to="/login">
              <FormattedMessage {...messages.home} />
            </HeaderLink>
            <HeaderLink className="navbar-item" to="/stream">
              <FormattedMessage {...messages.stream} />
            </HeaderLink>
            <HeaderLink className="navbar-item" to="/library">
              <FormattedMessage {...messages.library} />
            </HeaderLink>
          </div>

          <div className="btn-left level">
            <div className="navbar-end">
              <div className="buttons">
                <div className="field has-addons">
                  <div className="nav-field-control control">
                    <input className="input" type="text" placeholder="Search" />
                  </div>
                  <div className="nav-field-control control">
                    <a className="button is-dark has-text-white is-rounded">
                      Search
                    </a>
                  </div>
                </div>
                {/* <HeaderLink
              className={`button is-info has-text-white is-rounded is-info ${
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
                      <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                    <div className="field">
                        <label className="label has-text-left">
                          First Name
                        </label>
                        <p className="control has-icons-left has-icons-right">
                          <input
                            className="input is-medium"
                            type="text"
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
                        <label className="label has-text-left">
                          Last Name
                        </label>
                        <p className="control has-icons-left has-icons-right">
                          <input
                            className="input is-medium"
                            type="text"
                           
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
                        <label className="label has-text-left">
                          First Name
                        </label>
                        <p className="control has-icons-left has-icons-right">
                          <input
                            className="input is-medium"
                            type="text"
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
                        <label className="label has-text-left">
                          Last Name
                        </label>
                        <p className="control has-icons-left has-icons-right">
                          <input
                            className="input is-medium"
                            type="text"
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
                        <label className="label has-text-left">Password</label>
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
                    </section>
                    <footer className="modal-card-foot">
                      <button className="button is-success">
                        Save changes
                      </button>
                      <button className="button">Cancel</button>
                    </footer>
                  </div>
                </div>
              </div>

              <FormattedMessage {...messages.signup} />
            </HeaderLink> */}
                <HeaderLink
                  className="button is-dark has-text-white is-rounded"
                  to="/"
                >
                  <FormattedMessage {...messages.login} />
                </HeaderLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
// import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import BannerHero from './bannerHero.jpg';
import messages from './messages';

import '../../styles/appStyles/style.css';

function Header() {
  const [isBurgerActive, setIsBurgerActive] = React.useState(false);

  const handleOnClickMenu = () => {
    if (isBurgerActive) {
      setIsBurgerActive(false);
    } else {
      setIsBurgerActive(true);
    }
  };

  return (
    <nav
      className="navbar is-active is-info"
      role="navigation"
      ari-label="main navigation"
    >
      <div className="navbar-brand">
        <A className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
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
          <HeaderLink className="navbar-item" to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <HeaderLink className="navbar-link" to="/about">
              <FormattedMessage {...messages.about} />
            </HeaderLink>
            <div className="navbar-dropdown">
              <HeaderLink className="navbar-item" to="/">
                <FormattedMessage {...messages.home} />
              </HeaderLink>

              <HeaderLink className="navbar-item" to="/about">
                <FormattedMessage {...messages.about} />
              </HeaderLink>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="buttons">
            <HeaderLink
              className="button is-info has-text-white is-rounded is-info"
              to="/signup"
            >
              <FormattedMessage {...messages.signup} />
            </HeaderLink>

            <HeaderLink
              className="button is-info is-light has-text-info is-rounded is-outlined"
              to="/login"
            >
              <FormattedMessage {...messages.login} />
            </HeaderLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
// import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import BannerHero from './bannerHero.jpg';
import messages from './messages';

import 'bulma/css/bulma.css';
function Header() {
  return (
    <nav
      className="navbar is-info"
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
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </A>
      </div>
      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <HeaderLink className="navbar-item" to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <HeaderLink className="navbar-item" to="/features">
              <FormattedMessage {...messages.features} />
            </HeaderLink>
            <div className="navbar-dropdown">
              <HeaderLink className="navbar-item" to="/">
                <FormattedMessage {...messages.home} />
              </HeaderLink>

              <HeaderLink className="navbar-item" to="/features">
                <FormattedMessage {...messages.features} />
              </HeaderLink>
            </div>
          </div>
          <HeaderLink className="navbar-item" to="/signup">
            <FormattedMessage {...messages.home} />
          </HeaderLink>

          <HeaderLink className="navbar-item" to="/login">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </div>
      </div>
    </nav>
  );
}
//     <nav className="navbar is-primary" role="navigation" ari-label="main navigation">
//       <div className="navbar-brand">
//         <A className="navbar-item" href="https://bulma.io">
//           <img
//             src="https://bulma.io/images/bulma-logo.png"
//             width="112"
//             height="28"
//           />
//         </A>
//         <A
//           role="button"
//           className="navbar-burger burger"
//           aria-label="menu"
//           aria-expanded="false"
//           data-target="navbarBasicExample"
//         >
//           <span>zvbxzbzxc</span>
//           <span>bzzbcvzbc</span>
//           <span>zhcgzchzcgh</span>
//         </A>
//       </div>
//       <div id="navbarBasicExample" className="navbar-menu">
//         <div className="navbar-start">
//           <HeaderLink className="navbar-item" to="/">
//             <FormattedMessage {...messages.home} />
//           </HeaderLink>

//           <HeaderLink className="navbar-item" to="/features">
//             <FormattedMessage {...messages.features} />
//           </HeaderLink>
//           <HeaderLink className="navbar-item" to="/">
//             <FormattedMessage {...messages.home} />
//           </HeaderLink>

//           <HeaderLink className="navbar-item" to="/features">
//             <FormattedMessage {...messages.features} />
//           </HeaderLink>
//           <HeaderLink className="navbar-item" to="/signup">
//             <FormattedMessage {...messages.home} />
//           </HeaderLink>

//           <HeaderLink className="navbar-item" to="/login">
//             <FormattedMessage {...messages.features} />
//           </HeaderLink>
//         </div>
//       </div>
//     </nav>

export default Header;

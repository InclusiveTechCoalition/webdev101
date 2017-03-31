import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

class Header extends React.Component {

  goToHome(event) {
    event.preventDefault();
    this.context.router.transitionTo('/')
  }

  render() {
    return(
      <header className="main-nav">
        <Link to={{pathname: '/webdev101/'}} className="nav-logo clickable">WWCode Web Dev</Link>
      </header>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Header;
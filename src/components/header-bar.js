import React from 'react';
import { connect, } from 'react-redux';
import './header-bar.css';
import { clearAuth, } from '../actions/auth';
import { clearAuthToken, } from '../local-storage';

export class HeaderBar extends React.Component {
  logOut () {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render () {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <a href="#" onClick={() => this.logOut()}>LOG OUT</a>
      );
    }
    return (
      <div className="header-bar">
        <a href="#">ABOUT</a>
        <a href="#">FAQ</a>
        <h1>Front-end learning app</h1>
        <a href="#">CONTACT</a>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({loggedIn: state.auth.currentUser !== null,});

export default connect(mapStateToProps)(HeaderBar);

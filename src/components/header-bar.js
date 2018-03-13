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
        <button onClick={() => this.logOut()}>Log out</button>
      );
    }
    return (
      <div className="header-bar">
        <a href="#">help</a>
        <h1>Front-end learning app</h1>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({loggedIn: state.auth.currentUser !== null,});

export default connect(mapStateToProps)(HeaderBar);

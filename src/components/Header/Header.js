import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>But where are all the aliens ?</h1>
        <span role="img" aria-label="Alien">
          👽
        </span>
        <p>Let's look at some of the most accepted hypotheses...</p>
      </header>
    );
  }
}

export default Header;

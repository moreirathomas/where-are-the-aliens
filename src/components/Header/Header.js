import React from 'react';
import './header.min.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>But where are all the aliens?</h1>
        <img
          src={require('../../images/astronaut.png')}
          alt="lonely astronaut"
        ></img>
        <p>
          It is estimated that there should be about 1,000,000 plantets with
          life just in the Milky Way. But no other life form is yet to be seen.
          Why is this ? <br /> Let's look at some of the most accepted answers
          to the Fermi Paradox!
        </p>
      </header>
    );
  }
}

export default Header;

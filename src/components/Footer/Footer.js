import React from 'react';
import data from '../../data/data.json';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          This website is a personnal project and was inspired by a{' '}
          <a
            href="https://www.reddit.com/r/space/comments/ekcg0e/found_this_a_while_ago_what_are_your_opinions/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Reddit post
          </a>
          .
        </p>

        <div>
          <p>
            For anyone interrested in learning more about this subject, here are
            some links to get you started :
          </p>
          <ul className="references-links">
            {data.references.map((reference, index) => {
              return (
                <li key={index}>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {reference.page}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p>Find more of my stuff here:</p>
          <ul className="social-links">
            {data.social_links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noreferrer noopener">
                    {link.page}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <p>Made by Thomas Moreira © 2020</p>
      </footer>
    );
  }
}
export default Footer;

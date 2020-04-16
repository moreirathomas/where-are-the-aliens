import React from 'react';
import data from '../../data/data.json';
import './footer.min.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          This website is a personnal project that was inspired by a{' '}
          <a
            href="https://www.reddit.com/r/space/comments/ekcg0e/found_this_a_while_ago_what_are_your_opinions/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Reddit post
          </a>{' '}
          and made using{' '}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React
          </a>
          .
        </p>

        <div>
          <p>
            For anyone interrested in learning more about this subject, here are
            some links to get you started. Aslo, please note that I am not an
            expert on this topic and there might be inaccuracies.
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
        <div>
          <p>
            Icons designed by{' '}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              target="_blank"
              rel="noreferrer noopener"
            >
              Smashicons
            </a>{' '}
            from{' '}
            <a
              href="https://www.flaticon.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Flaticon
            </a>
          </p>
          <p>© 2020 Thomas Moreira </p>
        </div>
      </footer>
    );
  }
}
export default Footer;

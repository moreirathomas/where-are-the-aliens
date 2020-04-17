import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import './detail.min.css';

const hypotheses = data.hypotheses;

function Detail({ match }) {
  const [content, setContent] = useState({
    text: '',
    links: [
      {
        page: '',
        url: '',
      },
    ],
    image: 'default.png',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const getContent = () => {
      const content = hypotheses.filter(
        (el) => el.path === match.params.path
      )[0];
      setContent(content);
    };
    getContent();
  }, [match.params.path]);

  return (
    <Fragment>
      <header className="header-small">
        <h1>
          But where are all the aliens?{' '}
          <span role="img" aria-label="Alien">
            👽
          </span>
        </h1>
      </header>
      <main>
        <section className="title-screen">
          <div className="title-text">
            <h1>{content.title}</h1>
            <p>{content.headline}</p>
          </div>

          <figure className="image-container">
            <img src={require(`../../images/${content.image}`)} alt=""></img>
          </figure>
        </section>

        <section className="content">
          <p style={{ whiteSpace: 'pre-line' }}>{content.text}</p>

          <div className="references">
            <p>To learn more:</p>
            <ul>
              {content.links.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.page}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <nav>
          <Link className="back-to-home" to="/where-are-the-aliens">
            Back
          </Link>
        </nav>
      </main>
    </Fragment>
  );
}

export default Detail;

import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import './previews.min.css';

class Preview extends React.Component {
  render() {
    return (
      <section className="previews">
        <div className="layout-container">
          {data.hypotheses.map((hypothesis, index) => {
            return (
              <div className="preview" key={index}>
                <h2>
                  <Link to={'/where-are-the-aliens/' + hypothesis.path}>
                    {hypothesis.title}{' '}
                  </Link>
                </h2>

                <figure className="image-container">
                  <Link to={'/where-are-the-aliens/' + hypothesis.path}>
                    <img
                      src={require(`../../images/${hypothesis.image}`)}
                      alt=""
                    ></img>
                  </Link>
                </figure>
                <p>{hypothesis.headline}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Preview;

import React from 'react';
import data from '../../data/data.json';
import { Link } from 'react-router-dom';
import './previews.css';

class Preview extends React.Component {
  render() {
    return (
      <section className="previews">
        <div className="layout-container">
          {data.hypotheses.map((hypothesis, index) => {
            return (
              <div className="preview" key={index}>
                <h2>
                  <Link to={hypothesis.path}>{hypothesis.title} </Link>
                </h2>

                <figure className="image-container">
                  <Link to={hypothesis.path}>
                    <img
                      src="https://picsum.photos/id/237/200/200"
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

import React from 'react';
import data from '../../data/data.json';
import { Link } from 'react-router-dom';
import './previews.css';

class Preview extends React.Component {
  render() {
    return (
      <section>
        <div className="layout-container">
          {data.hypotheses.map((hypothesis, index) => {
            return (
              <div className="preview" key={index}>
                <h2>{hypothesis.title}</h2>
                <p>{hypothesis.headline}</p>
                <Link to={hypothesis.path}>Link</Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Preview;

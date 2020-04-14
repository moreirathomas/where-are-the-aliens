import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import './detail.css';

const hypotheses = data.hypotheses;

function Detail({ match }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    console.clear();
    console.log('match.params.path =', match.params.path);

    const getContent = () => {
      const content = hypotheses.filter(
        (el) => el.path === match.params.path
      )[0];
      console.log('matching content to be set =', content);
      setContent(content);
    };
    getContent();
  }, [match.params.path]);
  console.log('set content =', content);

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.headline}</p>
      <p>{content.text}</p>
    </div>
  );
}

export default Detail;

import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import './detail.css';

const hypotheses = data.hypotheses;

// function Detail({ match }) {
//   useEffect(() => {
//     fetchHypothesis();
//     console.log(typeof match.params.path);
//   }, []);

//   const [hypothesis, setHypothesis] = useState({
//     title: '',
//     headline: '',
//     text: '',
//     links: [
//       {
//         page: '',
//         url: '',
//       },
//     ],
//     illustration: [
//       {
//         path: '',
//       },
//     ],
//   });

//   console.table(hypotheses);

//   const fetchHypothesis = () => {
//     const hypothesisFetched = hypotheses.filter(
//       (hypothesis) => hypothesis.path === match.params.path
//     );
//     console.log('fetched : ' + hypothesisFetched);
//     setHypothesis(hypothesisFetched);
//   };

//   return (
//     <div>
//       <h1>{hypothesis.title}</h1>
//       <p>{hypothesis.headline}</p>
//       <p>{hypothesis.text}</p>
//     </div>
//   );
// }

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hypothesis: { path: '' } };
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    // console.log(params.path);

    // console.log('hypotheses ' + hypotheses);

    // const data = this.getFilteredData();
    // console.log('data ' + data);
    // this.setState({ data });
    // console.log('state' + this.state);
    // console.log('this...path' + this.state.hypothesis.path);
  }

  getFilteredData() {
    return hypotheses.filter(
      (hypothesis) => hypothesis.path === this.state.hypothesis.path
    );
  }

  render() {
    return (
      <div>
        <h1></h1>
        <p></p>
        <p></p>
      </div>
    );
  }
}

export default Detail;

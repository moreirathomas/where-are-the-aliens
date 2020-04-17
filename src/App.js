import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Preview from './components/Previews/Previews';
import Detail from './components/Detail/Detail';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Router>
          <Switch>
            {/* to allow multiple components to be redered in the same path */}
            <Route
              path="/where-are-the-aliens"
              exact
              render={(props) => (
                <Fragment>
                  <Header />
                  <Preview />
                </Fragment>
              )}
            ></Route>
            <Route
              path="/where-are-the-aliens/:path"
              exact
              render={(props) => (
                <Fragment>
                  <ScrollToTopOnMount />
                  <Detail {...props} />
                </Fragment>
              )}
            ></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

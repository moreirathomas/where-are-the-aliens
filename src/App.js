import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Preview from './components/Previews/Previews';
import Detail from './components/Detail/Detail';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Router>
          <Switch>
            {/* to allow multiple components to be redered in the same path */}
            <Route
              path="/"
              exact
              render={(props) => (
                <Fragment>
                  {/* <ScrollToTop /> */}
                  <Header />
                  <Preview />
                </Fragment>
              )}
            ></Route>
            <Route path="/:path" exact component={Detail}></Route>
            {/* <Fragment>
              <ScrollToTop />
              <Route path="/:path" exact component={Detail} />
            </Fragment> */}
          </Switch>
        </Router>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Preview from './components/Previews/Previews';
import Detail from './components/Detail/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* to allow multiple components to be redered in the same path */}
          <Route
            path="/"
            exact
            render={(props) => (
              <Fragment>
                <Header />
                <Preview />
              </Fragment>
            )}
          ></Route>
          <Route path="/:path" component={Detail}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

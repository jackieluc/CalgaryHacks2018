import React from "react";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={IndexPage} />
          {/* <Route path="*" component={NotFoundPage} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
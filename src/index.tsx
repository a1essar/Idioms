import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import { Layout } from "./components/Layout";
import { Main } from "./components/screens/Main";

import "normalize.css";
import "./index.css";

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={Main} />
      </Layout>
    </Router>
  </Provider>
);

render(<App />, document.getElementById("root"));

import * as React from "react";

import { Panel } from "react-bootstrap";
import "./App.css";

import { Result } from "./components/results/result";
import Search from "./containers/search/search";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Panel>
          <Panel.Body>Flight Delay Predictor</Panel.Body>
        </Panel>
        <Search />
        <Result />
      </div>
    );
  }
}

export default App;

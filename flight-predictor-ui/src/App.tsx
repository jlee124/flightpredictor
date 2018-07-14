import * as React from "react";
import "./App.css";

import { Search } from "./components/search/search";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;

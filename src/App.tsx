import * as React from "react";
import "./App.css";

import HorizontalDepthLoop from "./components/divPatterns/HorizontalDepthLoop";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HorizontalDepthLoop />
      </div>
    );
  }
}

export default App;

import * as React from "react";

import { Panel } from "react-bootstrap";
import { IAirlines } from "../../redux";

import "./results.css";
export interface IResultState {
  airlines: IAirlines[];
  doShow: boolean;
}

export class Result extends React.Component {
  public render() {
    return (
      <div className="main">
        <Panel>
          <Panel.Body>Results</Panel.Body>
        </Panel>
      </div>
    );
  }
}

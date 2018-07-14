import { map } from "lodash";
import * as React from "react";

import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Panel,
  Radio
} from "react-bootstrap";
import { airlines } from "../../data/airlines";
import { IAirlines } from "../../redux";

import "./search.css";

export interface ISearchProps {
  onSearch?: () => void;
  airlines?: () => IAirlines[];
}

export class Search extends React.Component<ISearchProps> {
  public render() {
    return (
      <div className="search">
        <Panel>
          <Panel.Body>Flight Delay Predictor</Panel.Body>
        </Panel>
        <Form horizontal={true}>
          {this.renderAirlines()}
          <FormGroup controlId="formBasicText" className="city">
            <Col componentClass={ControlLabel} sm={2}>
              Departing City
            </Col>
            <Col sm={8}>
              <FormControl type="text" value={""} placeholder="Enter text" />
            </Col>
            <FormControl.Feedback />
          </FormGroup>
        </Form>
        <Button type="submit">Submit</Button>
      </div>
    );
  }

  private renderAirlines() {
    return (
      <FormGroup>
        {map(airlines, airline => (
          <Radio name="airline" inline={true}>
            {airline.name}
          </Radio>
        ))}
      </FormGroup>
    );
  }
}

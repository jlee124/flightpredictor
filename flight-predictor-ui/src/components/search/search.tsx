import { map } from "lodash";
import * as React from "react";

import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
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
        <Form horizontal={true}>
          {this.renderAirlines()}
          <FormGroup controlId="formBasicText" className="city">
            <Col componentClass={ControlLabel} sm={2}>
              Departing City
            </Col>
            <Col sm={8}>
              <FormControl type="text" value={"NY"} placeholder="Enter text" />
            </Col>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="formBasicText" className="city">
            <Col componentClass={ControlLabel} sm={2}>
              Time
            </Col>
            <Col sm={8}>
              <FormControl type="time" value={""} placeholder="Enter text" />
            </Col>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="formBasicText" className="city">
            <Col componentClass={ControlLabel} sm={2}>
              Date Range
            </Col>
            <Col sm={8}>
              <FormControl type="date" value={""} placeholder="Enter text" />
            </Col>
            <FormControl.Feedback />
          </FormGroup>
        </Form>
        <Button type="submit" onClick={this.props.onSearch}>
          Submit
        </Button>
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

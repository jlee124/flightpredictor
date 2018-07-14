import { Search } from "../../components/search/search";

import * as actions from "../../redux/actions";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IStoreState } from "../../redux";

export function mapStateToProps({ airlines }: IStoreState) {
  return {
    airlines
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.airlinesAction>) {
  return {
    onSearch: () => dispatch(actions.populateAirlines())
  };
}

export function mergeProps(
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Search);

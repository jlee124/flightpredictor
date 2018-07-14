// import { Search } from "../../components/search/search";

import * as actions from "../../redux/actions";

// import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IStoreState } from "../../redux";

export function mapStateToProps({ airlines }: IStoreState) {
  return {
    airlines
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.airlinesAction>) {
  return {
    onSearch: () => dispatch(actions.getAirline())
  };
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Search);

import { airlinesAction, GET_AIRLINES, POPLUATE_AIRLINES } from "./actions";
import { IStoreState } from "./index";

// @todo: type actions
export function reduce(state: IStoreState, action: airlinesAction) {
  switch (action.type) {
    case GET_AIRLINES:
      return { ...state };
    case POPLUATE_AIRLINES:
      return {
        ...state,
        airlines: action.airlines
      };
  }
  return state;
}

import { IAirlines } from "./index";
export const GET_AIRLINES = "GET_AIRLINES";
export type GET_AIRLINES = typeof GET_AIRLINES;

export const POPLUATE_AIRLINES = "POPLUATE_AIRLINES";
export type POPLUATE_AIRLINES = typeof POPLUATE_AIRLINES;

export interface IGetAirlines {
  type: GET_AIRLINES;
}

export interface IPopulateAirlines {
  type: POPLUATE_AIRLINES;
  airlines: IAirlines[];
}

export type airlinesAction = IGetAirlines | IPopulateAirlines;

export function getAirline(): IGetAirlines {
  return {
    type: GET_AIRLINES
  };
}

export function populateAirlines(): IPopulateAirlines {
  return {
    airlines: [],
    type: POPLUATE_AIRLINES
  };
}

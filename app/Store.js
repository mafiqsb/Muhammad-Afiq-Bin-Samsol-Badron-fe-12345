'use client';

import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  movieInformation: [],
  timeslotInformation: [],
  theaterInformation: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVIE_INFORMATION':
      const movieInfo = action.payload;

      return {
        ...state,
        movieInformation: movieInfo,
      };
    case 'TIMESLOT_INFORMATION':
      const timeslotInfo = action.payload;

      return {
        ...state,
        timeslotInformation: timeslotInfo,
      };
    case 'THEATER_INFORMATION':
      const theaterInfo = action.payload;

      return {
        ...state,
        theaterInformation: theaterInfo,
      };
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

import { types } from '../types/types';

const initialState = {};

export const elementReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.getElements:
        return {
          state: action.payload
        }


      default:
        return state;

    }
}

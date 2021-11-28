import { types } from '../types/types';

const initialState = {};

export const elementReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.getElements:
        return {
          state: action.payload
        }
        case types.updateElement:
        return {
            state: state.state.map(element => element.idMenu === action.payload.idMenu? action.payload:element)
          }

      default:
        return state;

    }
}

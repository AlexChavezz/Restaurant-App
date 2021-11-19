import { types } from "../types/types";

const initialState = {
    state: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action?.type) {
        case types.pushToCart:
        if (state.state === []) {
                return {
                    state: [ action.payload ]                    
                    }
            } else {
                return {
                    ...state,
                    state: [ ...state.state, action.payload ]
                }
            }
        case types.removeElement:
            return {
                ...state,
                state: (state.state.filter(element => element.id !== action.payload))
            }
            default:
            return state;
    }
}

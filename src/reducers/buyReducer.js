import { types } from "../types/types";

const initialState = null;

export const buyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.elementToBuy:
            return {
                ...action.payload
            }
        case types.cleanElementToBuy:
            return {

            };
        default:
            return state;
    }
}

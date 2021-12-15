import { types } from "../types/types";

const initialState = null;

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setTableNumber:
            return action.payload;
        case types.resetTableNumber:
            return null;
        default:
            return state;
    }
}
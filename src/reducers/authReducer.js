import { types } from "../types/types";

const initialState = null;

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
            }
        case types.logout:
            return null;
        default:
            return state;
    }
}
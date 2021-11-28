import { types } from "../types/types";

export const elementToBuy = (element) => ({
    type: types.elementToBuy,
    payload: element
})
export const cleanElementToBuy = () => ({
    type: types.cleanElementToBuy,
})
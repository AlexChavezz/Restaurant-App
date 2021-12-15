import { types } from "../types/types";
    
export const pushElement = (element) => ({
    type: types.pushToCart,
    payload: element
});
export const removeElement = (id) => ({
    type: types.removeElement,
    payload: id
});

export const removeAllElements = () => ({
    type: types.removeAllElements
})
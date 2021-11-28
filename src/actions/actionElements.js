import { types } from '../types/types';

export const getElementsAsync = () => {
  return async (dispatch) => {
    try {
      const response  = await fetch('http://localhost:8080/api/menu');
      const data = await response.json();
      dispatch(getElements(data));
    } catch (e) {
      console.error("algon malo sucedio");
    }
  }
}
const getElements = (elements) => ({
  type: types.getElements,
  payload: elements
});

export const updateElement = (element) => ({
  type: types.updateElement,
  payload: element,
});
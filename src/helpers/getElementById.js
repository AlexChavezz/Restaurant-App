
export const getElementById = (id, elements) => {
  return elements.find(element => element.name === id);
}

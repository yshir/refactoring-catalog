let defaultOwnerData = { firstName: 'Martin', lastName: 'Fowler' };

export const defaultOwner = () => {
  return defaultOwnerData;
};
export const setDefaultOwner = arg => {
  defaultOwnerData = arg;
};

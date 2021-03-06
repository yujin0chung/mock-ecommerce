const vendors = (state = {}, action) => {
  switch (action.type) {
    case "GET_VENDORS":
      return { ...state, ...action.vendors };
    default:
      return state;
  }
};

export const getVendors = (state) => {
  return state.vendors;
};

export default vendors;

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state = state + 1);
    case "DECREMENT":
      return (state = state - 1);
    case "RESET":
      return 0;
    default:
      return false;
  }
};

export default counterReducer;

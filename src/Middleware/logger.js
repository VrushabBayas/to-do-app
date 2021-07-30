/* eslint-disable no-console */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  console.log("next state", store.getState());
  console.groupEnd();
  return next(action);
};

export default logger;

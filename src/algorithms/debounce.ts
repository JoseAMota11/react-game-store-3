const debounce = (fn: FunctionStringCallback, delay: number) => {
  let timeoutID: number;
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default debounce;

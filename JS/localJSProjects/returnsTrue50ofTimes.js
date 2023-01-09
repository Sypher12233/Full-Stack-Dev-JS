// This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < 0.5) {
    return true;
  } else {
    return false;
  }
};

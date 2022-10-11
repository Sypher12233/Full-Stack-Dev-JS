const factorial = (num) => {
  if (num == 1 || num == 0) {
    return 1;
  } else if (num > 0 ) {
    for (i = num - 1; i > 1; i--) {
    num *= i;
    }
    return num;
  }
};

console.log(factorial(5));
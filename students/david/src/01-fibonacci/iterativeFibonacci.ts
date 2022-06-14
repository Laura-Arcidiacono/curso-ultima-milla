const iterativeFibonacci = (number:number):number | string => {
  let fibonacciNumber:number;
  let previousLastFibonacciNumber = 2;
  let lastFibonacciNumber = 3;
  
  if(number < 0) {
    return ('Number must be positive or equal to zero');
  };
  if(!Number.isInteger(number)) {
    return ('Number must be an integer');
  };
  if(number === 0) {
    return 1;
   };
   if(number !== 0 && number <= 3) {
    return number;
   };
  for(let i = 3; i < number ; i++) {
    fibonacciNumber = lastFibonacciNumber + previousLastFibonacciNumber;
    previousLastFibonacciNumber = lastFibonacciNumber;
    lastFibonacciNumber = fibonacciNumber;
  };

  return fibonacciNumber;
};

export default iterativeFibonacci;
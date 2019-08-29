// Write a method, digital_root(num). 
// It should sum the digits of a positive integer. 
// If it is greater than or equal to 10, sum the digits of the resulting number. 
// Keep repeating until there is only one digit in the result, called the "digital root". 
// Do not use string conversion within your method.

function digital_root(num) {
  while (num >= 10){
    num = digital_root_helper(num);
  }

  return num;
}

function digital_root_helper(num){
  let sum = 0;

  while (num > 0){
    sum += num%10
    num /= 10
    num = Math.floor(num);
  }

  return sum;
}

console.log(digital_root(102));
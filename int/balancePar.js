//function return the min num of parentheses to balance the input str

var minAddToMakeValid = function(S) {
  let arr = S.split('')
   const stack = [];
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === "(") stack.push(arr[i]);
      if(arr[i] === ")")
        stack[stack.length - 1] === "(" 
            ? stack.pop() 
            : stack.push(arr[i]);
  }
  return stack.length;
};

    

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = function([...s]) {

    const hash = {'(': ')', '[': ']', '{': '}'};
  
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
  
      if (hash[s[i]]) stack.push(s[i]);
  
      else if (hash[stack.pop()] !== s[i]) return false;
  
    }
    return stack.length ? false : true;
  };

  //longer but easier to come up with

  var isValid = function(s) {
    let stack = []
    
 
    for(let i = 0; i< s.length;i++){
      console.log(stack)
     
     if((s[i] === ')' || s[i] === '}' || s[i] === ']') && stack.length === 0){
      return false
    }
 
    if(s[i] === '{' || s[i] === '[' || s[i] === '('){
      stack.push(s[i])
    }
 
   if (s[i] === '}' && stack[stack.length-1] === '{' || s[i] === ')' && stack[stack.length-1] === '(' || s[i] === ']' && stack[stack.length-1] === '['){
      stack.pop()
    } else if(s[i] === '}' && stack[stack.length-1] !== '{' || s[i] === ')' && stack[stack.length-1] !== '(' || s[i] === ']' && stack[stack.length-1] !== '['){
      return false
    }
        
 
 
   
    }
    
    console.log(stack)
     return !stack.length ? true : false
    
 };
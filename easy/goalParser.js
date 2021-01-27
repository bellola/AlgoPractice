// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".



//interesting idea

const interpret = (command) => {
    let parts = [];
    
    for (let i = 0; i < command.length;) {
       if (command[i] === 'G') {
           parts.push('G');
           i += 1;
       } else if (command[i + 1] === ')') {
           parts.push('o');
           i += 2;
       } else {
           parts.push('al');
           i += 4;
       }
    }
     
    return parts.join('');
 };

 //simple

 var interpret = function(command) {
    return command.split('()').join('o').split('(al)').join('al')
}



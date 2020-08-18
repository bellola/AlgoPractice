function removeAdjacent(){
   let stack = []
    for(let i = 0; i < S.length; i++){
        let char = S[i]
        let last = stack[stack.length-1]
        if(char !== last) stack.push(char)
        if(char === last){
         stack.pop()
        }
    }

    return stack.join('')
}
//this is a test
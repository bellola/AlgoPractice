function repeatedStringm(s,n){
        let x = Math.floor(n / s.length);
        let count = (s.split("a").length - 1) * x;
        let rem = n % s.length;

        for (var i = 0; i < rem; i++) {
            if (s.charAt(i) === "a") {
                count++;
            }
        }
        return count
}


    
// We must create three variables; One, x, which is the amount of times the full string s appears in the given length n of the infinite string;
// Two, count which will hold the total amount of a's that are in the extended string. We set count to the amount of a's in the given string (s.split("a").length - 1) and then multiply that amount by x (the amount of times it fully appears).
// Three, rem is the remainder (amount of letters) found from dividing the given length n by the length of the string s.

//tried this btut had a memory leak problem

function repeatedString(s, n) {
    let newS = ''
     let count = 0
    for(let i = 0; i < n; i++){

        newS =  newS+=s
    }
    newS = newS.slice(0,10)
    for(let i = 0; i < newS.length; i++){
      if(newS[i] === 'a') count++

    }
    return count
}
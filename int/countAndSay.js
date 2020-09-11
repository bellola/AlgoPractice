var countAndSay = function(n) {
    if(n === 1) return "1";
    let string = "1";
    for(let i = 0; i < n - 1; i++){
       string = countChars(string); 
    }
    return string;
};

function countChars(string){
    let idx = 0;
    let char = "";
    let count = 0;
    let result = "";
    
    while(idx < string.length){
        char = string[idx];
        while(string[idx] === char){
            //if they're the same keep counting and moving
            count++;
            idx++;
        }
        //else add the count plus the letter to the resuult
        result += count + char;
        count = 0;
    }
    return result;
}

//

var countAndSay = function(n) {
    let res = '1';

    for (let i = 1; i < n; i++) {
        res = say(res);
    }

    return res;
};


function say(str) {
    let res = '';
    let count = 0;
    let num = str[0];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === num) {
            count++;
        } else {
            res += count + str[i - 1];
            count = 1;
            num = str[i];
        }
    }

    return res + count + num;
}
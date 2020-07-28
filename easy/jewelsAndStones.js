var numJewelsInStones = function(J, S) {
    let count = 0 
    let hash = {}
    for(let i in J){
       if(!hash[J[i]]) hash[J[i]] = 1
        else hash[J[i]]++
    }
    for(let i in S){
        if(hash[S[i]]) count ++
    }
    return count
};

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
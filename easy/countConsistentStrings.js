// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

const countConsistentStrings = (allowed, words) => {
	let count = 0;
    let map = {}
    
    for(let i = 0; i<allowed.length;i++){
        map[allowed[i]] = true
    }
    
    for(let i = 0; i<words.length;i++){
        let currMatch = 0
        let word = words[i]
        for(let j = 0; j < word.length;j++){
            let letter = word[j]
            if(!map[letter]) break
            currMatch++
        }
        if(currMatch === word.length){
            count++
        }
        
    }        
    console.log(map)

	return count;
};
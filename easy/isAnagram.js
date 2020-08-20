   var isAnagram = function(s, t) {
        if(s.length !== t.length) return false
        if(s===t) return true
        let hash = {};
        for(let i in s){
            let char = s[i]
            if(hash[char]) hash[char]++
            else hash[char] = 1
        }
       ////co
        
        for(let i in t){
            let char = t[i]
            if(!hash[char]) return false
            if (hash[char]) hash[char]--
            
        }
        console.log(hash)
        for(let i in hash){
            console.log(hash[i], 'this is key')
            if(hash[i] !== 0) return false
            return true
        }
    };
    
    isAnagram('ab', 'a')
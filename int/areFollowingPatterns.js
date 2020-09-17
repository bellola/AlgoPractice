function areFollowingPatterns(strings, patterns) {
    let hash1 = {}
    let hash2 = {}
    
    for(let i = 0; i < strings.length;i++){
        let item = strings[i]
        let pattern = patterns[i]
        if(!hash1[pattern]){
            hash1[pattern] = item
        }
        if(!hash2[item]){
            hash2[item] = pattern
        }
        if(hash1[pattern]!==item){
            return false
        }
        if(hash2[item] !== pattern){
            return false
        }
    }
    
    console.log(hash2)
    return true
        
}
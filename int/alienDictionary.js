var isInOrder = function(first, second, letters) {
    const minLen = Math.min(first.length, second.length);
    
    for (let i = 0; i < minLen; i++) {
        const f = letters[first[i]];
        const s = letters[second[i]];
        
        if (f < s) {
            return true;
        } else if (f > s) {
            return false;
        } 
    }
    
  return first.length <= second.length; 
}


var isAlienSorted = function(words, order) {
    const letters = {};
    
    for (let i = 0; i < order.length; i++) {
        letters[order[i]] = i;

    }
    
    for (let i = 1; i < words.length; i++) {
        if (!isInOrder(words[i-1], words[i], letters)) {
            return false;
        }
    }
    
    return true;
};


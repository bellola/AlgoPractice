function makeAnagram(a, b) {
    let hash = {};
    let total = 0;
 

    for(let i = 0; i < a.length; i++){
     hash[a[i]] = hash[a[i]] || 0;
        hash[a[i]]++;
    }
    console.log(hash)
    for(let i = 0; i < b.length; i++){
        hash[b[i]] = hash[b[i]] || 0;
       hash[b[i]]--;
    }
     Object.keys(hash).forEach(k => {
        if (hash[k] !== 0) {
            total += Math.abs(hash[k]);
        }
    })
    console.log(hash)


    return total;
}
//this almost works but in the case when arr is [1,1,1,1] and seq is [1,1,1]
//the hashmap just sets the val to latest idx so does not work

function isValidSubsequence(array, sequence) {
  // Write your code here.
		let hash = {}
		for(let i in array){
			hash[array[i]] = parseInt(i)
		}
    if(sequence.length === 1 && hash[sequence]) return true
	  if(sequence.length === 1 && !hash[sequence]) return false
    let count= 0
    let j = 0
    while(sequence.length > j){
      let val = sequence[j]
      let next = sequence[j+1]
      
      if(hash[val] < hash[next] || val === next) {
        count++
      }
     j++
    }
    if(count === sequence.length-1) return true
    return false
}


//here you start checking same index on array and sequence and if it matches increase 
//sequence idx and array idx

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let seqidx = 0
    let arrayidx = 0
      while(seqidx < sequence.length && arrayidx < array.length){
                  if(array[arrayidx] === sequence[seqidx]) {
                      seqidx++
                  
                  }
                  arrayidx++
      }
      return seqidx === sequence.length
    }

// given an array and a target sum, if any of two values of the array equals the target sum, return them in an array, else return false



function twoNumberSum(array, targetSum) {
	
	
    let hash = {}
    
    for(let i = 0; i < array.length; i++){
        let curr = array[i]
        let y = targetSum - curr
        if(hash[y] === true){
            return [curr, y]
        } else{
            hash[curr] = true
        }
    }
        return []
    }




//a
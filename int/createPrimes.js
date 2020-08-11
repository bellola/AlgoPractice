
  const findTrueIndices = (arr) => {
    let result = []
    for(let i in arr){
      if(arr[i] === true){
        result.push(parseInt(i))
      }
    }
    return result
  }



const sieveOfEratosthenes = (limit) => {
    const output = new Array(limit + 1).fill(true);
    output[0] = false;
    output[1] = false;
  
    for (let i = 2; i <= limit; i++) {
      if (output[i] === true) {
        for (let j = i * 2; j <= limit; j = j + i) {
          output[j] = false;
        }
      }
    }

    return findTrueIndices(output)
  }
  

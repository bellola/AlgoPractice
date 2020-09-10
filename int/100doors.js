function getFinalOpenedDoors(numDoors) {
    // Good luck!
    const doors = new Array(numDoors).fill(false);
    let res = []
  
    for(let i = 1; i <= doors.length;i++){
        //you skip i times thats why j = j+1.
      for(let j = i-1; j < numDoors; j+=i){
        doors[j] = !doors[j]
      }
    }
  
    for(let i = 0; i<doors.length;i++){
      if(doors[i] === true){
        res.push(i+1)
      }
    }
  
    return res
  }
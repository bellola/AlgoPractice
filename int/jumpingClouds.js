function jumpingOnClouds(c) {
    
    let jumps = 0
    let i = 0
  
    while ( i < c.length) {
  
      if (c[i+2] === 0) i += 2 
      
      else  i += 1
  
      if (i !== c.length) jumps++
  
      // This one makes you really understand what is happening
      console.log({jumps, i})
  
    }
  
    return jumps
  }

  //keep looping until i reaches c.length checking everytime if c at i+2 and adding 1 or 2 to i each time and adding 1 to jump each time
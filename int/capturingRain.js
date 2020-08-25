function naiveSolution(heights) {
    let totalWater = 0;
    for (let i = 1; i < heights.length - 1; i++) {
      let leftBound = 0;
      let rightBound = 0;
      // We only want to look at the elements to the left of i, which are the elements at the lower indices
        for (let j = 0; j <= i; j++) { 
            leftBound = Math.max(leftBound, heights[j]);
        }
        // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
        for (let j = i; j < heights.length; j++) {
            rightBound = Math.max(rightBound, heights[j]);
        }
        totalWater += Math.min(leftBound, rightBound) - heights[i];
    }
    return totalWater;
  }

  function efficientSolution(heights) {
    let totalWater = 0;
    let leftPointer = 0;
    let rightPointer = heights.length - 1;
    let leftBound = 0;
    let rightBound = 0;
    
    while (leftPointer < rightPointer) {
      if (heights[leftPointer] <= heights[rightPointer]) {
        leftBound = Math.max(heights[leftPointer], leftBound);
        totalWater += leftBound - heights[leftPointer];
        leftPointer++;
      } else {
        rightBound = Math.max(heights[rightPointer], rightBound);
        totalWater += rightBound - heights[rightPointer];
        rightPointer--;
      }
    }
    return totalWater;
  }
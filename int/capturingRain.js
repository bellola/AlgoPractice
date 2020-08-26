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

//   Takeaway: The Two Pointer Approach
//   The two-pointer approach is one that you can, and should, use in many interview questions. When you see a problem that requires you to iterate through an array (or string), take a moment and think about if it would be possible to iterate through it in sections at the same time instead of in separate loops. Common problems that can be solved using the two-pointer technique are the two sum problem 
//   (finding two numbers in an array that sum to a specified number) and reversing the characters in a string.
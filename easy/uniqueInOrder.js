var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
        let finalArray = [];
      let tempArray = [];
      if (Array.isArray(iterable) === false) {
          tempArray = iterable.split('');
      } else {
          tempArray = iterable;
      }
      for (i = 0; i < tempArray.length; i++) {
          if (tempArray[i] != tempArray[i - 1]) {
              finalArray.push(tempArray[i]);
          }
      }
      return finalArray;
  }
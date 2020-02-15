//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
//The lowest number will not always come first.

function sumAll(arr) {
    let min = Math.min(arr[0], arr[1])
    let max = Math.max(arr[0], arr[1])
    let result = 0
    for(let i = min; i<=max;i++){
      result += i
    }
    return result;
  }


  //Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
  //In other words, return the symmetric difference of the two arrays.

  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }

 // Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
  //Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

  function whatIsInAName(collection, source) {

    var srcKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {
      for (var i = 0; i < srcKeys.length; i++) {
        if (
          !obj.hasOwnProperty(srcKeys[i]) ||
          obj[srcKeys[i]] !== source[srcKeys[i]]
        ) {
          return false;
        }
      }
      return true;
    });
  }
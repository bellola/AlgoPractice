function getDifference(str1, str2,hash,count,result){
    for(let i = 0; i < str1.length; i++){
     if(!hash[str1[i]]) hash[str1[i]] = 1
     else hash[str1[i]] += 1
   }  
     for(let i = 0; i < str2.length; i++){
    if(hash[str2[i]]) hash[str2[i]] -=1
   }  
      for(let i = 0; i < str2.length; i++){
     if(hash[str2[i]] !== 0) count ++
   }  
    result.push(count)
    }
 

function anagram(arr1,arr2){
  let hash = {}
  let count = 0
  let result = []
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i].length === arr2[i].length){
        getDifference(arr1[i], arr2[i], hash, count,result)
      }
      else{
        result.push(-1)
      }
    }
 return result
}


anagram(['tea', 'tea', 'act'], ['ate', 'toe', 'acts'])
anagram(['a', 'jk', 'abb', 'mn', 'abc'], ['bb', 'kj', 'bbc', 'op', 'def'])
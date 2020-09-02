// First, you have to split the string so that you can select each sentence. I chose to create a matrix with one sentence per line and one word per cell. Once it's done, you need to find the sentences that contains all the keys. Then you must select these sentences and return the keys (ie words, cells), that are different from the input keys.

let sentence = "I was in my house,in the driveway,eating in my car"

let keys = ['in', 'my']

function pattern (s, k){
  let hash = {}
  let matching = []
  let res = []
  let arr = s.split(',')
  arr.forEach(sentence =>{
    if(sentence.includes(keys[0]) && sentence.includes(keys[1])){
      matching.push(sentence.split(' '))
    }
  

  })

keys.forEach(key =>{
  if(!hash[key]) hash[key] = true
})

console.log(matching)

for(let i = 0; i < matching.length; i++){
  for(let j = 0; j< matching[0].length; j++){
 
    let val = [matching[i][j]]

    if(val !== undefined && !hash[val]) res.push(val)
  }
}

return res.slice(0,res.length-1)


}

pattern(sentence, keys)


// console.log(undefined)
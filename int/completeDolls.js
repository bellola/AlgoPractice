

var complete_part_list_1 = "eyes,nose,mouth,ears";
var complete_part_list_2 = "eyes,nose,mouth,ears,feet"

var parts = [ 
  "Bette_feet",
  "Bette_eyes", 
  "Colleen_nose", 
  "Astrid_eyes",
  "Doug_eyes",
  "Bette_nose",
  "Astrid_nose",
  "Doug_mouth",
  "Bette_ears",
  "Bette_mouth",
  "Colleen_nose",
  "Colleen_arms",
  "Astrid_feet",
  "Colleen_nose",
  "Colleen_mouth",
  "Doug_nose",
  "Doug_ears",
  "Astrid_hands",
  "Doug_eyes"
];




function completeDoll(parts, list){

  let results = []
  let map = {}
  let partsArray = []
  parts.forEach(part=>{
    partsArray.push(part.split('_'))
  })
//   console.log(partsArray)
  
  for(let i = 0; i < partsArray.length;i++){
//     console.log(partsArray[0])
  
    if(!map[partsArray[i][0]]) {
      map[partsArray[i][0]] = []
      // map[partsArray[i][0]].push(partsArray[i][1])
    }

    else if(!map[partsArray[i][0]] && list.includes(partsArray[i][1])){

    }
    
    else if (map[partsArray[i][0]] && list.includes(partsArray[i][1])) map[partsArray[i][0]].push(partsArray[i][1])
//     else 
  }
//   console.log(partsArray)
  console.log(map)
  
  for(let key in map){

    if(map[key].sort().join(',') === list.split(',').sort().join(',')){
      results.push(key)
    }
  }
  

  return results
}


console.log(completeDoll(parts, complete_part_list_1))
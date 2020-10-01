





////SMS SEGMENT


function smsSeg(message) {
    let total = Math.ceil(message.length/160)
    let count = 1
    let res = '' 
    let maxLength = 160
    
    if(message.lenght<154){
        return message
    }

  for(let i = 0; i < message.length;i+=154){

    let sub = message.substr(i, maxLength)
    sub = sub.substr(0, Math.min(sub.length, sub.lastIndexOf(' '))).trim() +` (${count}/${total})` + '\n'
    res+=sub
    count++
   
  }
    
  return res
    
}



smsSeg(str)

////VANITY NUMBER


let dict = {
  'A':'2', 'B':'2','C':'2','D':'3','E':'3','F':'3','G':'4','H':'4','I':'4','J':'5','K':'5','L':'5','M':'6','N':'6','O':'6','P':'7','Q':'7','R':'7','S':'7','T':'8','U':'8','V':'8','W':'9','X':'9','Y':'9','Z':'9'}

function helper(c, n){
  let i = c.length
  while(i>0){
    if(dict[c[i]] !== n[i]) return false
    i--
  }
  return true
}

function vanityNum(codes, numbers) {
    let res = []
    let nums = []
    numbers.forEach(num => {
        nums.push(num.toString())
    })

    for(let i=0;i<nums.length;i++) {
        for(let j = 0; j<codes.length;j++){
          let code = codes[j]
          let num = nums[i].slice(-code.length)
          if(helper(code,num)){
            res.push(nums[i])
          }
        }
    }

    return res.sort((a,b) =>a-b)
}



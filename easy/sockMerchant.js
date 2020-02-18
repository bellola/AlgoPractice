//John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, 
//determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    let count = 0;
    const hash = {}
    for(let i = 0; i<ar.length;i++){
      if(!hash[ar[i]]){
        hash[ar[i]] = 1
        
      }
      else{
        count++
        delete hash[ar[i]]
      }
    }
    return count
}
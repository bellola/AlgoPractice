//write a function that takes in a non empty array of distinct integers and an integer representing a target sum.
//find all the triplets in the array that sum up to the target sum and return a two dimensional array of all these triplets.

function threeNumSum(array, targetSum){
    array.sort((a,b)=> a-b)
    const triplets = []
    for(let i = 0; i < array.length - 2; i++){
        let left = i +1
        let rigth = array.length-1
        while(left<right){
            const currentSum = array[i] + array[left] + array[rigth]
            if(currentSum === targetSum){
                triplets.push([array[i] + array[left] + array[rigth]])
                left++
                rigth--
            } else if(currentSum<targetSum){
                left++
            }else if(currentSum>targetSum){
                rigth++
            }
        }
    }
    return triplets
}
//given a bst(node, left and right) and a target num, write a function that finds the closest to the target num and return it

function findClosestValue(tree, target){
    return findClosestValueHelper(tree, target, closer)
}

function findClosestValueHelper(tree, target, closest){
    if(tree === null) return closest
    if(Math.abs(target - closest) > Math.abs(target - tree.value)){
        closest = tree.value
    }
    if(target<tree.value){
        return findClosestValue(tree.left, target, closest)
    } 
    else if(target > tree.value){
        return findClosestValue(tree.right, target, closest)
    } else{
        return closest
    }

}

function findClosestValueInBstHelper(tree, target, closest){
	let currentNode = tree
	while(currentNode !== null){
		if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
			closest = currentNode.value
		}
		if(target < currentNode.value){
			currentNode = currentNode.left
		} else if(target > currentNode.value){
			currentNode = currentNode.right
		} else {
			break
		}
	}
	return closest
}
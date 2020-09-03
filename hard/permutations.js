

function perm(arr){

    let result = [];

    function swap(arrToSwap, indexA,indexB){
        [arr[x],arr[y]] = [arr[y],arr[x]]
    }

    function generate(n, heapArr){
        if(n === 1){
            result.push(heapArr.slice())
            return
        }

        generate(n-1, heapArr)

        for(let i = 0; i<n-1; i++){
            if(n%2===0)
        }
    }
	
	

	
}
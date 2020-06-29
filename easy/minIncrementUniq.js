var minIncrementForUnique = function(A) {
    A.sort((a,b)=>a-b);
let res = 0
for (i=1;i<A.length;i++) {
    if (A[i] <= A[i-1]) {
        res+= A[i-1] + 1 - A[i];
        A[i] = A[i-1] + 1
    }
}
return res;
};
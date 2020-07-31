// Solution 1.
// First solution is pretty simple. Because we can truncate decimal digits, we can be sure that answer will always be integer number, so we can just try every number until we hit our target:

const mySqrt = function(x) {
    let result = 1;
    while (result*result <= x) result++;
    return result - 1;
};
// Here we start from 1 and increase it until we will encounter a point where target*target > x. Then, because we overshot our target by 1, we return result - 1.
// Time complexity is O(sqrt(n)).

// Solution 2.
// This solution essentially does the same as a first algorithm, but it uses binary search instead.

const mySqrt = function(x) {
    let start = 0;
    let end = x;
    let res = 0;
    while (start < end) {
        res = Math.ceil((start + end)/2); // 1.
        if (res*res <= x && (res + 1)*(res + 1) > x) return res; // 2.
        if (res*res < x) start = res; // 3.
        else end = res; // 4.
    }
    return res;
};
// It starts search in [0, x], then takes following steps:

// It takes number in the middle: res = Math.ceil((start + end)/2).
// Checks if res is the number we need - it will happen only if res^2 <= x AND (res + 1)^2 > x. Return if correct.
// Otherwise check if it overshot target or not. If not, reduce search segment to [res, end] (i.e. it now knows that every number before res will be less than number we search, so it now searches only for numbers of res or higher).
// Else if it overshot, search in segment [start, res].
// Repeat until required number found.
// Time complexity is O(log2(n)).
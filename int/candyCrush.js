// Write a function to crush candy in one dimensional board. In candy crushing games, groups of like items are removed from the board.
//  In this problem, any sequence of 3 or more like items should be removed and any items adjacent to that sequence should now be considered adjacent to each other.
//   This process should be repeated as many time as possible. You should greedily remove characters from left to right.

// Example 1:

// Input: "aaabbbc"
// Output: "c"
// Explanation:
// 1. Remove 3 'a': "aaabbbc" => "bbbc"
// 2. Remove 3 'b': "bbbc" => "c"
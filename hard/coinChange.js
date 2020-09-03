const coinChange = (coins, amount) => {
    // dp[i] represents the least amount of coins that can make the value equals to the i
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
      for (const coin of coins) {
        console.log(i)
        //if 1,2 or 5 are smaller than the subproblem amount
        if (i - coin >= 0) {
          dp[i] = Math.min(
            dp[i],
            dp[i - coin] + 1,
          );
        }
      }
    }
    //check if the amount exists. If it does return it else return -1
    return dp[amount] === Infinity ? -1 : dp[amount];
  };
  
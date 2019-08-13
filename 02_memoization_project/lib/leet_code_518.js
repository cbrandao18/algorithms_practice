// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount, coins, memo={}){
  let key = amount + '-' + coins;
  if (key in memo) return memo[key];

  let currCoin = coins[coins.length - 1];
  let diffWaysForChange = 0;

  for (let i = 0; i * currCoin <= amount; i++){
    diffWaysForChange += change(amount - i * currCoin, coins.slice(0, -1), memo)
  }

  memo[key] = diffWaysForChange;
  return memo[key];
}
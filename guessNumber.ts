/** 
 * Problem Name: 
 *      Guess Number Higher or Lower
 * Link:
 *      https://leetcode.com/problems/guess-number-higher-or-lower/
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 * 
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var guess = function(num : number) {
  if(num === 6)return 0
  if(num >6)return 1
  if(num <6)return -1
}
var guessNumber = function(n: number) {
    let start = 1
    let end = n
    while(start < end){
      let mid = Math.floor((start+end)/2)
      // console.log(mid)
      let res = guess(mid)
      // console.log(res)
      if(res === 0) return mid
      else if(res === -1){
        start = mid
      }else if(res === 1){
        end=mid
      }
    } 
};

console.log(guessNumber(10));
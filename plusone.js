/**
 * Problem Name:
 *  Plus One
  Input: [1,2,3]
  Output: [1,2,4]
  Link:
    https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let digitsLen= digits.length
  let numtoAdd=1
  for(let i=digitsLen-1; i>=0;i--){
    if(numtoAdd){
      if(digits[i] ===9){
        if(i===0){
          digits[i]=0
          digits.unshift(1)
        }else{
        digits[i]=0
        }
        continue
      }else{
        digits[i]=digits[i]+1
        numtoAdd=0
      }
    }
    
  }
  return digits
};
console.log(plusOne([1,2,9]))
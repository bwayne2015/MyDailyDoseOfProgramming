/*
  Problem Name:
    Set Mismatch
  Input: nums = [1,2,2,4]
  Output: [2,3] 
  
  Link:
      https://leetcode.com/problems/set-mismatch/


*/

var findErrorNums = function(nums) {
  let obj = {}
  let shouldbeNum,errorNum
  let numsLen=nums.length
  for(let i=0; i<numsLen; i++){
    obj[i+1]=0
  }
  
  
  for(let i=0; i<numsLen; i++){
    
      obj[nums[i]] +=1
    }
  
  // console.log(obj)
  errorNum =Object.keys(obj).find(ok => obj[ok]>1)
  shouldbeNum = Object.keys(obj).find(ok => obj[ok]===0)
  return[+errorNum, +shouldbeNum]
};

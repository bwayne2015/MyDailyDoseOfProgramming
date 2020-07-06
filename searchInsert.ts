/*


Problem Name:
       Search Insert Position
Problem Link:
      https://leetcode.com/problems/search-insert-position/       
*/


function searchInsert(nums: number[], target: number): number {
  let start = 0
  let end = nums.length -1
  let found = false
  let foundedNum = -1
  while(start<=end){
    let mid = Math.floor((start+end)/2)
    if(nums[mid] === target){
      found = true
      foundedNum=mid
      break
    }
    else if(nums[mid] < target){
        start = mid+1
    }else{
      end = mid -1
    }
  }
  if(found)return foundedNum
  else return start
};
let x = searchInsert([1,3,5,6], 2)
console.log(x)
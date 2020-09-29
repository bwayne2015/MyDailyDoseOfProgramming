/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 
 * Problem Name:
 *  Find First and Last Position of Element in Sorted Array
 * Link:
 *  https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */
function findAnyOccuerence(target,nums){
  let start=0
  let end = nums.length -1
  
  let x= 0
  while(start <= end){
    let mid = Math.floor((start+end)/2)
    if(nums[mid]===target)return mid
    else if(nums[mid]<target){
      start=mid+1 
    }else if(nums[mid]>target){
      end=mid-1
    }
  }
}

var searchRange = function(nums, target) {
    let val = findAnyOccuerence(target, nums)
    if(val===undefined)return[-1,-1]
    let firstOccurence=val
    let lastOccurence=val
    let anyOccurence=val
  
    while(nums[val-1] === target ){
      firstOccurence=val-1
      val=val-1
    }
    val = anyOccurence
    while(nums[val+1] === target ){
      lastOccurence=val+1
      val=val+1
    }

    return [firstOccurence, lastOccurence]
}
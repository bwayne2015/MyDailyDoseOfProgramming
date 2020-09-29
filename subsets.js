/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
   let numsLen=nums.length
   let powLen = Math.pow(2, numsLen)
   let res=[] 
   res.push([])
  for(let i=1; i<powLen; i++){
    let subset=[]
    for(let j=0; j<numsLen; j++){
      if(i & (1 << j))
        subset.push(nums[j])
    }
    res.push(subset)
  }
  
  return res
};

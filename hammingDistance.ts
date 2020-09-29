/*
  Problem Name: 
       Hamming Distance
  Link:
      https://leetcode.com/problems/hamming-distance/


Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)     
*/
function createBinaryString(nMask:number) {
  // nMask must be between -2147483648 and 2147483647
  let sMask = '';
  for (let nFlag = 0, nShifted = nMask; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
}
function hammingDistance(x: number, y: number): number {
let binryX = createBinaryString(x)
let binryY= createBinaryString(y)
let totaldiff=0
for(let i=0;i<32;i++){
  totaldiff += +binryX[i] ^ +binryY[i]  
}
return totaldiff

};
let xxxxx = hammingDistance(4,14)
console.log(xxxxx)
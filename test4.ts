function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    let length = candidates.length;
    const res: number[][] = [];
    search(0, [], target);
    return res;
    
    function search(idx: number, prefix: number[], target: number){
        if(target === 0) res.push(prefix.slice())
        if(idx === length) return;
        if(target <= 0) return;
        prefix.push(candidates[idx])
        search(idx, prefix, target - candidates[idx])
        prefix.pop()
        search(idx +1, prefix, target)
    }
};

console.log(combinationSum([2,3,6,7], 7))
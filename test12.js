function ways(total, k) {
    let nums = [];
    for (let i = 1; i <= k; i++) {
        nums.push(i);
    }
    const dp = [];
    nums.forEach(n => {dp[n] = 1;});
    for(let i = 1; i <= total; ++i){
        let count = 0;
        for(let j = 0; j < nums.length && nums[j] < i; ++j){
            count += dp[i - nums[j]];
        }
        dp[i] = dp[i] ? dp[i] + count : count;
    }
    return dp[total];
}

console.log(ways(8,2))
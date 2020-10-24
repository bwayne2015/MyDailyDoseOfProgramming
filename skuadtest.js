async function addNum(num1, num2) {
   return new Promise(res => {
       setTimeout(() => {
           res(num1 + num2);
       }, 1000)
   })
   
}

(async () => {
    let sum = await addNum(12, 1);
    console.log(sum)
})()


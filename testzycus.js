let str = "It is an amazing experience to give tests on DoSelect!!"
let num=10
let ptr1=0
let ptr2=0
let resArr = []
let c = 1;
for(let i=0;i<str.length; i++){
    if(str[i] === " ") ptr2 = i;
    if(c * num === i + 1) {
        if(str[i] === " ") {  
            ptr1 = i
        }
        else {
            i = ptr2
        }
        resArr.push(str.substring(ptr1, ptr2 + 1))
        ptr1 = ptr2
        ptr1 += 1
        c += 1
    }
}
resArr.push(str.substring(ptr2 + 1, str.length));
const len = resArr.length;
resArr.forEach((res, i) => {
    console.log(`[${i+1}/${len}]: ${res}`);
})
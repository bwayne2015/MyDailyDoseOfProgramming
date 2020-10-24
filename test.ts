function peakIndexInMountainArray(arr: number[]): number {
    let arrLen = arr.length
    let peak : number=0;
    for(let i =0; i<arrLen; i++){
        if(arr[i] < arr[i+1] && arr[i+1] > arr[i+2]){
            peak = i+1
        }
        
    }
    return peak;
    
};

let x = peakIndexInMountainArray([0,1,0])
console.log(x)
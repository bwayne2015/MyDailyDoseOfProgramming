function findSubString(str1: string, str2: string): number {
        let matchingStr = ""
        let firstMatchingIndex
        let str2Len=str2.length
        for(let i = 0; i< str1.length; i++){
            if(!firstMatchingIndex && str1[i] === str2[0] ){
                firstMatchingIndex = i
            }
            matchingStr +=str1[i]
            if(matchingStr.length !== str2.length) continue
            else if(matchingStr.length === str2.length && matchingStr === str2) return firstMatchingIndex
            else{
                matchingStr = ""
                firstMatchingIndex = null
            }

        }


findSubString("llhehoand", "ho");
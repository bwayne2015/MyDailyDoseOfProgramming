function balancedStringSplit(s: string): number {
        let finalOutput : number = 0
        if(!s) return finalOutput;
        let strLen=s.length
        let balance=0
        for(let i=0; i<strLen; i++){
            if(s[i]=='R')
            balance++;
        if(s[i]=='L')
            balance--;
        if(balance === 0)
            finalOutput++;
        }
        return finalOutput
};
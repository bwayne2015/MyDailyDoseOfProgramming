function preprocessDate(dates){
    let finalDateArr = []
    mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    if(typeof date === 'string'){
    for(let date of dates){

        let splittedDate = date.split(' ')
        let processedDate = splittedDate[2] + '-' + convertMonth(splittedDate[1]) + '-' + convertDay(splittedDate[0])
        finalDateArr.push(processedDate)
    }
}
    return finalDateArr

    function convertMonth(month){
        let index =  mlist.indexOf(month) + 1
        if(index < 10) return "0" + String(mlist.indexOf(month) + 1)
        else return String(mlist.indexOf(month) + 1)

    }
    function convertDay(day){
        let newDay = day.split('')
        let finalDay = ""
        newDay.forEach(n => {
            if(!isNaN(parseInt(n))) finalDay += String(n)    
        })
        if(parseInt(finalDay) < 10) finalDay = "0" + finalDay

        return finalDay 
    }

}
preprocessDate(['20th Oct 2052','6th Jun 1933'])
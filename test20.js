var sortPeople = function(a, b) {
    //Sort people by height as the first priority decreasingly, and by order as the second priority non-decreasingly
         if(a[0] != b[0]) {
            return b[0] - a[0];
         } else {
            return a[1] - b[1];
         }
     }
     
    var reconstructQueue = function(people) {
       people.sort(sortPeople);
       console.log(people)
       var i;
       var res = [];
    //Reconstruct queue by inserting people by its k value
       for(i = 0; i < people.length; i++) {
           console.log(res, 'res b4')
           console.log(people[i][1], 0, people[i], '33333')
           res.splice(people[i][1], 0, people[i]);
           console.log(res, 'res after')
       }
    //    console.log(res, 'res')
       return res;
    };
    reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])
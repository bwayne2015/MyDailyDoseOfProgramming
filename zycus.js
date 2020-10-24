var b = null;
console.log(typeof b === "object");

for(var i=0;i<5;i++){
    setTimeout(function(){
    console.log(i);
    }, i*1000);


    var a = 1+"2"+3+4;
console.log(a);



function test(a){
    a.name=yyy;
 }
 var a = {name: xxx};
 test(a);
 console.log(a.name);


 function sayHello(name) {
    var text = 'Hello ' + name;
    var sayAlert = function() {
 console.log(text);
     }
      sayAlert();
 }
 sayHello('David');


 var a = {};
var b = {};
a.name="Jhon";
b=a;
b.name="Alex";
console.log(a.name);


(function(){
    var a=b=5;
    })();
    console.log(typeof a!=='undefined');
    console.log(typeof b!=='undefined');


    var a = 10;
    function example(){
    console.log(a);
      var a;
    }
    example();
    
    

    function Apple (type) {
        this.type = type;
        this.color = "red";
        this.getInfo = getAppleInfo;
        }
        
        function getAppleInfo() {
        return this.color + ' ' + this.type + ' apple';
        }
        
        var apple = new Apple('macintosh');
        apple.color = "reddish";
        
        console.log(apple.getInfo());


        var A = function(name) {
            this.name = name;
            }
            var a = new A('xxx');
            A.prototype.name = 'yyy';
            console.log(a.name);
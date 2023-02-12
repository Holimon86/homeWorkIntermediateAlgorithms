const addTogether =  (...args) =>{
    const [arg1, arg2] = args;

    if (typeof arg1 !== 'number'){
        return undefined
    }

    if ( arg2 === undefined) {
        return num =>
            typeof num !== 'number'
                ? undefined
                : arg1 + num;
    }

    if (typeof arg2 !== 'number') {
        return undefined;
    }

    return arg1 + arg2;

};

console.log(addTogether(2, 3));


var Person = function(firstAndLast) {

    let fullName = firstAndLast;
    this.getFirstName = function(){
      return fullName.split(" ")[0];
    }
    this.getLastName = function(){
      return fullName.split(" ")[1];
    }
    this.getFullName = function(){
      return fullName;
    }
    this.setFirstName = function(name){
      fullName = name + " " + fullName.split(" ")[1];
    }
    this.setLastName = function(name){
      fullName = fullName.split(" ")[0] + " " + name;
    }
    this.setFullName = function(name){
      fullName = name;
    }
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();

  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
  
    var getOrbPeriod = function(obj){
      var c = Math.pow(earthRadius + obj.avgAlt, 3);
      var b = Math.sqrt(c / GM);
      var orbPeriod = Math.round(a * b);
      return {name: obj.name, orbitalPeriod: orbPeriod};
    }
    for(var elem in arr){
      newArr.push(getOrbPeriod(arr[elem]));
    }
    return newArr;
  }
  
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

    function palindrome(str) {
        return (
          str.replace(/[\w_]/g, "").toLowercase() ===
          str
          .replace((/[\w_]/g, ""))
          .toLowerCase()
          .split("")
          .reverse()
          .join("")
        );
      }
      
      
      
      palindrome("eye");
// function tipcalculator(bill){
//      var parcentage
//      if (bill<50) {parcentage = .2 }
//      else if(bill > 50 && bill < 200){parcentage = .15}
//      else{   parcentage = .1 }
//      return parcentage*bill
// }
// // console.log(tipcalculator(199))

// var bills = [124,48,268]
// // console.log(bills)
// var tips ="Total_TIP\'S : " +   [tipcalculator(bills[0]),
//             tipcalculator(bills[1]),
//             tipcalculator(bills[2])]
// console.log(tips)

// var totalbill = "Total_BIL\'S : " +  [bills[0] + tips[0],
//                 bills[1] + tips[1],
//                 bills[2] + tips[2]]
// console.log(totalbill)

//  BMI CALCULATION & COMPARE

var john ={
     fulname : 'Mohammad Almamun',
     mass : 75,
     height : 1.77,
     calcBmi : function(){
          this.bmi = this.mass/(this.height * this.height)
          return this.bmi
     }
}
var mark ={
     fulname : 'Mohammad Khirul',
     mass : 75,
     height : 1.66,
     calcBmi : function(){
          this.bmi = this.mass/(this.height * this.height)
          return this.bmi
     }
}
john.calcBmi()
mark.calcBmi()
console.log(john,mark)

if (john.bmi>mark.bmi){console.log(john.fulname + "Has Higher BMI off" + " " + john.bmi)}
else if(mark.bmi>john.bmi){console.log(mark.fulname + "Has Higher BMI off" + " " + mark.bmi)}
else{console.log("Both are Same BMI")}
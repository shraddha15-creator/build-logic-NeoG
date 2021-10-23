var readlineSync = require('readline-sync')
var day = readlineSync.question("Enter a Day: ");

if(day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday' ){
  console.log("Its a weekday")
}else{
  console.log("Its a weekend")
}

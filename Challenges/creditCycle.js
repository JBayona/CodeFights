/*
Bob is trying to keep track of his credit card balance, and he would like to know how many days he is into the billing cycle in order to gauge his spending. Given the current date and the day of the month on which the billing cycle ends (the "cycle day"), calculate the number of days he is into his credit cycle.

Day 1 is the day of the month after the cycle day. The cycle day is the last day of the cycle.

Example
For month = 8, day = 26, year = 2017 and cycleDay = 20, the output should be
creditCycle(month, day, year, cycleDay) = 6.

For August 26, 2017 and a cycle date of the 20th of the month, Bob is 6 days into the cycle. Day 1 is August 21, so the 26th is day 6.

https://codefights.com/challenge/c95Zq4kqFi84BTwFT/solutions/Rnr32HDBmHxKKaZbG
*/

function creditCycle(month, day, year, cycleDay) {
  let feb = isLeapYeay(year) ? 29 : 28;
  daysofMoth[2] = feb;
  let diff;;
  if(day > cycleDay){
    diff = day - cycleDay;
  }else{
    let tmp = ((month-1)%12) === 0 ? 12 : ((month-1)%12);
    diff = (daysofMoth[tmp] - cycleDay) + day;
  }
  return diff;
}

daysofMoth = {1:31, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12: 31}
isLeapYeay = year => ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;

//Opción 2
creditCycle = (m, d, y, c) => new Date(y,m-1,d-c).getDate();

month = 7;
day = 1;
year = 2047;
cycleDay = 15;
console.log(creditCycle(month, day, year, cycleDay));
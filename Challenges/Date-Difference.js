/*
Calculate the number of days between two given dates, where each date is represented with three integers: day, year and month.

It is guaranteed that the given time interval is valid, i.e. the second date is after the first date in the calendar or coincides with it.

It is also guaranteed that the dates are valid, i.e. for X in [1, 2]:

1 ≤ monthX ≤ 12,
1 ≤ dayX ≤ 31,
1 ≤ dayX ≤ 30 for monthX in [2, 4, 6, 9, 11],
1 ≤ dayX ≤ 29 for monthX = 2,
1 ≤ dayX ≤ 28 for monthX = 2 if yearX is not a leap-year
Note, that year1 and year2 can be negative.
*/

//JS

function uShouldDate(day1, month1, year1, day2, month2, year2) {
    
    function isLeapYear(year) {
        if (year % 4 !== 0) return false;
        if (year % 100 !== 0) return true;
        return (year % 400 === 0);
    }
    
    function daysInYear(year) {
        return (isLeapYear(year)) ? 366 : 365;
    }
    
    function dayInYear(day, month, year) {
        var numDays = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ],
            val;
        val = numDays[month - 1] + day;
        return (isLeapYear(year) && month > 2) ? val + 1 : val;
    }
    
    var y = year1, 
        sum = -dayInYear(day1, month1, year1);
    if (y < year2) {
        sum += daysInYear(year1);
        y++;
    };
    while (y < year2) {
        sum += daysInYear(y);
        y++
    };
    sum += dayInYear(day2, month2, year2);
    return sum;

}

//Vandre solution

//Is Leap Year
l=y=> (y % 4 == 0) && ( (y % 100 != 0) || (y % 400 == 0) )
//Hash Table days transcurred
k=y=> l(y)? [ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 ]:[ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ]
//Is Date1 Before Date2
lt=(y1, m1,d1,y2,m2, d2)=> y1 < y2 ? true : m1 < m2 ? true : d1 < d2? true : false 
//Get Remaining Days in Year
rd=( m,  d,  y)=> l(y)? 366- k(y)[m-1] - d:365 - k(y)[m-1] - d
//Days in Year Till Date
dy=( m,  d,  y)=> k(y)[m-1] + d

//Diff in days same year
dd=(m1,d1,m2,d2,y)=>k(y)[m2-1] - k(y)[m1-1] + (d2 - d1)

uShouldDate=(d1, m1, y1, d2, m2, y2)=> {
 //Same year special case
 if (y1==y2) return dd(m1, d1, m2, d2, y1);
 var x = 0;
 // Step 1: handle first (incomplete) year 
 x = rd(m1, d1, y1);
 // First year is now handled 
 y1++;
 // Step 2: handle 'full' years */
    while (y1 < y2)
    {
      x += l(y1) ? 366 : 365;
      y1++;
    }
 //Step 3: handle last (incomplete) year */
    x += dy(m2, d2, y2);
    return x;
}

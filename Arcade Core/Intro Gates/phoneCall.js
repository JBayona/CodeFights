/*
Some phone usage rate may be described as follows:

first minute of a talk costs min1 cents,
each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
each minute after 10th costs min11 cents.
You have S cents on your account before the call. What is the duration of the longest call (in minutes) you can have?

Example

For min1 = 3, min2_10 = 1, min11 = 2 and S = 20, the output should be
phoneCall(min1, min2_10, min11, S) = 14.

https://codefights.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta
*/

function phoneCall(min1, min2_10, min11, S) {
    var minutes = 0;
    while(S >= 0){
        if(minutes <= 0 && S >= min1){
            S -= min1;
            minutes++;
        }else if(minutes >=1  && minutes < 10 && S >= min2_10){
            S -= min2_10;
            minutes++;
        }else if(minutes >= 10 && S >= min11){
            S -= min11;
            minutes++;
        }else{
            return minutes;
        }
    }
}

min1 = 3; 
min2_10 = 1;
min11 = 2; 
S = 20;
console.log(phoneCall(min1, min2_10, min11, S));
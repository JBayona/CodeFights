countDigitsToN = n => {
    r = 0
    for (p = 1; p <= n; p *= 10)
        r += n - p + 1
    return r
}


n =  13; //1,2,3,4,5,6,7,8,9,10,11,12,13 => 17 digits
console.log(countDigitsToN(n));
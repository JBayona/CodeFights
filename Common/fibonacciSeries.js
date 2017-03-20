function fibonacciSeries(num) {
    num1 = 0;
    num2 = 1;
    temp = 0;
    console.log(num1);
    console.log(num2);
    while(temp <= num){
        temp = num1+num2;
        if(temp <= num) console.log(temp);
        num1 = num2;
        num2 = temp;
    }
}

num = 21;
fibonacciSeries(num);
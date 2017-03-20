EquationCaptcha = e => {
    //Replace x with 1x and -x with -1x
    eq = e.replace(/([-+])([a-z]+)/gi, R)        
    //find the x and its multiplier
    Nx = eq.match(/([-])?(\d*)(x)/)[0].split("x")[0]
    //Nx = Nx.split("x")[0]
    N = eq.match(/-?\d+/g,'')
    //Remove the x from the array of constants
    if(Nx)
        N.splice(N.indexOf(Nx), 1)
    //If x stands alone then set Nx to 1 
    Nx = (Nx) ? Nx : 1    
    //Find out on which side of x is the equal sign
    p =(e.indexOf("=")<e.indexOf("x"))?1:0
    //The solution is constant1-constant2 divided by the multiplier of x
    s = (N[0] - N[1])/Nx
    //If the equal sign is righ to the x, then multiply by -1
    if(p == 0)
        s = s*(-1)
    return s
}
f = R = (eq, g1, g2) =>
     g1 + "1" + g2 ;

/* function EquationCaptcha(equation) {
    //Replace x with 1x and -x with -1x
    var eq = equation.replace(/([-+])([a-z]+)/gi, R);
        console.log(eq)
    //find the x and its multiplier
    var Nx = eq.match(/([-])?(\d*)(x)/)[0]
    Nx = Nx.split("x")[0]
    var Numbers = eq.match(/-?\d+/g,'')
    console.log(Numbers)
    //If x stands alone then set Nx to 1
    if(Nx){
        Nx = Nx
        //Remove the x from the array of constants
        var indexOfX = Numbers.indexOf(Nx);
        Numbers.splice(indexOfX, 1)
    }
    else {
        Nx = 1
        eq.replace(/x/g, '1x')
        console.log(eq)
    }
    
    //Find out on which side of x is the equal sign
    var pos;
    if(equation.indexOf("=")<equation.indexOf("x"))
        pos = "left"
    else
        pos = "right"
    console.log(pos)

    console.log("constants are: " + Numbers)
    //The solution is constant1-constant2 divided by the multiplier of x
    var Solution = (Numbers[0] - Numbers[1])/Nx
    //If the equal sign is righ to the x, then multiply by -1
    if(pos == "right")
        Solution = Solution*(-1)
    return Solution
}
*/


     

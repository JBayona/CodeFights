/*
Return the last non-zero digit of n!.

Example

For n = 5, the output should be
lastNotZero(n) = 2.

5! = 120

For n = 10, the output should be
lastNotZero(n) = 8.

10! = 3628800
*/

//JS

lastNotZero = n =>{
    g=1
    while(n){
        g*=n
        while (g%10<1)
           g/=10 
        g%=Math.pow(10,9)
        n-=1
    }
 return g%10
}

/*
1. G se multiplica por n (el valor del factorial que queremos calcular)
2. Checamos si el modulo de 10 de nuestro número multiplicado es menor a uno.
3. Si es menor (0) significa que tenemos un cero en nuestro factorial y lo eliminamos asignándole a g la división de nuestro factorial entre 10, de esta forma quitamos el cero.
4. Si no es menor significa que nuestro número no es un múltiplo de 10 y seguimos multiplicando nuestra g por el número n (limite de factorial), por cada iteracion se restará en uno n, esto se ciclará hasta que hayamos llegado a cero el valor de n y retornaremos el módulo de 10 de nuestro valor de g, así tendremos el último número del factorial.

I.E para n=6  n! = 720, resultado = 2
n | g
6 | 1
5 | 6
4 | 30
3 | 3
2 | 12
1 | 36
0 | 72

retorna 72%10 = 2
*/
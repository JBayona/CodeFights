/*
Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.
Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

Complejidad = O(n)


*/

function lengthOfLongestSubstring(s) {
     
    var arr = s.split('');
    var pre = 0, len;
 
    var map = {};
 
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]] == null) { //Checamos si la letra ya esta en nuestro mapa
            map[arr[i]] =  i; //Si no esta, ponemos la letra como clave y el valor ponemos el index, ejemplo a: 0
        } else {
            len = Object.keys(map).length; //Cuando encuentra el elemento repetido, almacenamos el tamanio del string
            pre = Math.max(pre, len); //almacenamos el maximo del pre o el tama;o de nuestro current string
            i = map[arr[i]]; // i es igual al index del elemento en donde ya se encontro que estaba en la cadena
            //entonces si empezamos con a, recorremos ahora uno para empezar con b, luego verifica hasta repeticion y luego
            //empieza en c y asi sucesivamente
            map = {}; //limpiamos el mapa, para analizar en donde empezamos a analizar mas uno, el mas uno se hace cuando
            //itera el ciclo
        }
    }
    //Estas dos lineas para obtener el mayor de la ultima iteracion del ciclo que no analizamos
    len = Object.keys(map).length;
    return Math.max(pre, len);
}
console.log(lengthOfLongestSubstring('abcabcbb'));

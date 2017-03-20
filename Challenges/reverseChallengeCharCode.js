//Opcion 1

function getCharCodeValue(str){
    if([...str].length == 1) return str.charCodeAt(0);
    return [...str].reduce(function(previous,current,index){
        if(index == 1) return previous = previous.charCodeAt(0) + current.charCodeAt(0);
        return previous += current.charCodeAt(0);
    });
}

function StringPower(string1, string2) {
    return Math.abs(getCharCodeValue(string1)-getCharCodeValue(string2));
}

//Opcion 2

function getCharCodeValue(str){
    if([...str].length == 1) return str.charCodeAt(0);
    return [...str].reduce((previous,current,index) => index == 1 ? previous = previous.charCodeAt(0) + current.charCodeAt(0) : previous += current.charCodeAt(0))
}

function StringPower(string1, string2) {
    return Math.abs(getCharCodeValue(string1)-getCharCodeValue(string2));
}

//Opcion 3

getCharCodeValue = str => [...str].length == 1 ? str.charCodeAt(0) : [...str].reduce((previous,current,index) => index == 1 ? previous = previous.charCodeAt(0) + current.charCodeAt(0) : previous += current.charCodeAt(0))

StringPower =(string1, string2) => Math.abs(getCharCodeValue(string1)-getCharCodeValue(string2))

//Opcion 4
g = d => a(d).length == 1 ? f(d) : a(d).reduce((p,c,i) => i == 1 ? p = f(p) + f(c) : p += f(c))
a = m => [...m]
f = h => h.charCodeAt(0)
StringPower =(a, b) => Math.abs(g(a)-g(b))

string1 = "[Something]";
string2 = "{ordinary}";

console.log(StringPower(string1,string2));
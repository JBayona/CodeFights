/*
Sea s = "ababaac"
Sus sufijos:
0: ababaac
1: babaac
2: abaac
3: baac
4: aac
5: ac
6: c

Después de ordenar:
4: aac
2: abaac
0: ababaac
5: ac
3: baac
1: babaac
6: c

Output = [4,2,0,5,3,1,6]
*/
function suffix(s){
  var array = [];
  for(var i = 0; i < s.length; i++){
    array[i] = i;
  }
  array.sort(function(a,b){
    return s.substring(a).localeCompare(s.substring(b));
  });
  return array;
}

s = "ababaac";
console.log(suffix(s));
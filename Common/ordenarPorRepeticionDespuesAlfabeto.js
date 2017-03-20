function formatStringRepetitive(str){
  var hash = {};
  var element = '';
  array = [];
  var result = '';
  for(var i = 0; i < str.length; i++){
    element = str[i];
      if(element in hash) hash[element]++;
      else hash[element] = 1;
  }
  //console.log(hash);
  for(var prop in hash){
    array.push({'letter' : prop , 'number' : hash[prop]});
  }
  array = customSort(array); //En este punto tenemos el array sorted con el criterio que establecimos
  array.forEach((item) => result += item.letter.repeat(item.number));
  return result;
}


function customSort(array){
  array.sort(function(a, b){ 
    if(a.number == b.number) return a.letter.localeCompare(b.letter)//si las repeticiones son las mismas
      //return a.letter > b.letter//si las repeticiones son las mismas, que se ordene por lexicografico
    else return b.number - a.number //Si no que el sort sea por numero de repeticiones
  });
  return array
}

n =  'bbaaccc';
console.log(formatStringRepetitive(n));

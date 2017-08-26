function formatString(str) {
  let array = str.split('');
  var num = '';
  var flag = false;
  var currentStr = '';
  var i = 0;
  var result = '';
  while(i < array.length){
    let elem = array[i];
    if(/\d/.test(elem) && !flag){
      num += elem;
    }else if(elem === '(' && !flag){
      flag = true;
      currentStr = '';
    }else if(elem == ')'){
      num = num/1;
      flag = false;
      result += repeat(num, currentStr)
      num = '';
    }else{
      currentStr += elem;
    }
    i++;
  }
  return result;
}

repeat = (num,str) => str.repeat(num);


str =  '2(ab1c)2(b)1(z)';
console.log(formatString(str));
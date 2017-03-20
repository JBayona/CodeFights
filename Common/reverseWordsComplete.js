function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

console.log(reverseInPlace('I am the good boy'));

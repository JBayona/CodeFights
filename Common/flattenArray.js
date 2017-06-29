function flatten(array){
    return array.reduce(function(acum, val){
      return acum.concat(Array.isArray(val) ? flatten(val) : val)
    }, []);
  }

//Equivalente, ES6, reduce puede tomar un valor inicial, en este caso es un arreglo

const flatten = array => array.reduce((acum,val) => acum.concat(Array.isArray(val) ? flatten(val) : val), []);

array = [1,2,3,[4,5,6,[7,8,9,[10,11,12,[13,14,15,[16]]]]]];
console.log(flatten(array));
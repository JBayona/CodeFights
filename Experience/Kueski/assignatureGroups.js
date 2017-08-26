/*
Hay un grupo de estudiantes que sólo están en una materia, "m" = Materia1,
"p" = Materia2.¨, "c" = Materia3, "m"= Materia4, "z" = Materia5, para que 
se forme un grupo completo, debe haber un estudiante en cada materia, si en todas
hay dos estudiantes, entonces tenemos dos grupos, tenemos que regresar cuantos
grupos completos se forman con los estudiantes que tenemos.
Para resolver este problema, tenemos un hash con las materias como llave y a 
los estudiantes como valor, se cuentan todos los estudiantes y el número 
mínimo de estudiantes en el hash, es la respues, ya que no importa cuantos
grupos incompletos haya, debe haber grupos completos y con el mínimo lo 
podemos sacar
*/

function differentTeams(skills){
  var array = skills.split('');
  var hash = {p: 0, c: 0, m: 0, b: 0, z: 0};
  var min = Number.MAX_VALUE;
  array.forEach(item => {
    hash[item]++;
  });
  //Check result
  for(var prop in hash){
    min = hash[prop] < min ? hash[prop] : min;
  }
  return min;
}

skills = 'pcmbz';
console.log(differentTeams(skills));
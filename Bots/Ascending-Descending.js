array = [1,12,16,2,6,100,43,4]

console.log(array.sort(descending));

function compare(value1,value2){
	return value1 - value2;
}

function descending(value1,value2){
	return value2 - value1;
}

El sort() y reverse() pot default están basados en orden alfabético, para basar 
por numero se tiene que implementar el compare como lo mostrado anteriormente.
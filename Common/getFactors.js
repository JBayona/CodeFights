//Get factors

function primeFactors(n){
		  var factors = []; 
		  var divisor = 2;
  
		  while(n>2){
			if(n % divisor == 0){ //Check if the divisor is a factor
			   factors.push(divisor); //if true, me store it in an array
			   n= n/ divisor; //finally we update the number 
			}
			else{
			  divisor++;
			}     
		  }
		  return factors;
}

console.log(primeFactors(69));
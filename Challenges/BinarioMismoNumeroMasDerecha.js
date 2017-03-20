/*
You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of 2position_of_the_found_pair (0-based).

Example

For n = 10 and m = 11, the output should be
equalPairOfBits(n, m) = 2.

1010 = 10102, 1110 = 10112, the position of the rightmost pair of equal bits is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 21 = 2.
*/


function equalPairOfBits(n, m) {
	n = n.toString(2); //Convert to binary
	m = m.toString(2);
	if(n.length < m.length){
		n = zeroPad(n,m.length)
	}else{
		m = zeroPad(m,n.length)
	}
	n = n.split('').reverse();
	m = m.split('').reverse();
	tam = n.length > m.length ? n.length : m.length
	for(var i=0; i < tam; i++){
		if(n[i] == m[i]){
			return Math.pow(2,i)
		}
	} 
}

function zeroPad (str, tam) {
    if (str.length == tam){
        return str;
    }
    return zeroPad('0' + str,tam);
};

n =67
m =0
console.log(equalPairOfBits(n,m));
//Get the number with the major number

function arrayMode(sequence) {
    if(sequence.length == 0) return null;
    var modeMap = {};
    var maxE1 = sequence[0];
	var maxCount = 1;
    for(var i=0; i < sequence.length; i++){
        var e1 = sequence[i];
        if(modeMap[e1] == null){
            modeMap[e1] = 1;
        }else{
            modeMap[e1]++;
        }
        if(modeMap[e1] > maxCount){
            maxE1 = e1;
            maxCount = modeMap[e1];
        }
    }
    return maxE1;
}


console.log(arrayMode([1, 3, 3, 3, 1]))
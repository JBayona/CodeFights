array = [];
function bigSmall(nums) {
    minDig = getLength(nums[0]);
    getMinLenght(nums);
    getMaxNum(nums)
    return Math.max(...array);
}

function getMaxNum(nums){
    for(var  i = 0; i < nums.length; i++){
        if(getLength(nums[i]) == minDig){
            array.push(nums[i]);
        }
    }
}

function getLength(number){
    return Math.abs(number).toString().length;
}

function getMinLenght(nums){
    for(var  i = 0; i < nums.length; i++){
        if(getLength(nums[i]) < minDig){
            minDig = getLength(nums[i]);
        }
    }
}

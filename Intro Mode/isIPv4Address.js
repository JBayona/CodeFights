/*
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
isIPv4Address(inputString) = true;

For inputString = "172.316.254.1", the output should be
isIPv4Address(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
isIPv4Address(inputString) = false.

There is no first number.
*/

function isIPv4Address(inputString) {
    var array = inputString.split('.');
    var elem = 0;
    if(array.length != 4){
        return false;
    }
    for(var i = 0; i < array.length; i++){
        elem = array[i];
        if(elem === "") return false;
        if(isNaN(elem)) return false;
        elem = parseInt(elem);
        if(elem < 0 || elem > 255){
            return false;
        }
    }
    return true;
}

function isIPv4Address(s) {
  var  r = s.split(".");
  return r.length===4 && r.every(x => x!="" && !isNaN(x) && x>=0 && x<256)
}
 
 
inputString = ".254.255.0";
console.log(isIPv4Address(inputString))
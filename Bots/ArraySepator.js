For arguments = ["Code", "Fight", "On", "!"] and separator = "/", the output should be
myConcat(arguments, separator) = "Code/Fight/On/!/".

function myConcat(arguments, separator) {
	var response = "";
  for(var i=0; i < arguments.length; i++){
  	response += arguments[i]+separator;
  }
  return response:
}

myConcat(["Code", "Fight", "On", "!"],"/")
//Code/Fight/On/!/
//myConcat(["Code", "Fight", "On", "!"]," ")
//Code Fight On ! 
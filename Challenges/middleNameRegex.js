/*
You need to insert a bunch of names in the database, but some of them are too large and should be shortened. Each name is given in one of the two formats:

<surname>, <name> <middlename>;
<surname>, <name>.
It is known that <surname> and <middlename> always consist of a single word, and <name> can consist of several words.

Your task is to write a function that will shorten the given name. If it's given in the 1st format, you should cut the middle name and leave only its initial followed by a full stop. If the name is given in the second format, there's no need to shorten it.

Example

For name = "Placedo, Silver Van", the output should be
ShortenName(name) = "Placedo, Silver V".

For name = "Aguilar, Ventura", the output should be
ShortenName(name) = "Aguilar, Ventura".


*/

//Opcion 1

function ShortenName(name) {
    if(/^[A-Za-z\s]+,([a-zA-Z\s]+\s[a-zA-Z\s]+)+$/.test(name)){
      return name.substring(0, name.lastIndexOf(' ')+2)+'.'
    }else{
      return name;
    }
  }


  var name = "Alice, Mooore";
  console.log(ShortenName(name))

//Opcion 2 Regex

ShortenName = n => /^[A-Za-z\s]+,([a-zA-Z\s]+\s[a-zA-Z\s]+)+$/.test(n) ? n.substring(0, n.lastIndexOf(' ')+2)+'.' : n
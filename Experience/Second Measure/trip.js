/*

SFO -> LAX
LAX -> ORD
ORD -> JFK
JFK -> CDG

JFK -> LON

JFK -> ORD

SFO -> LAX -> ORD -> JFK -> CDG
*/

function getTrip(cities){
  let city;
  let values = Object.values(cities);
  for(let origin in cities){
    if(values.indexOf(origin) === -1){
      city = origin;
    }
  }
  //Format result
  let len = Object.keys(cities).length;
  let result = [];
  for(let i = 0; i < len+1; i++){
    result.push(city);
    city = cities[city];
  }
  return result.join(' -> ');
}

trip = {
  SFO:'LAX',
  LAX:'ORD',
  ORD:'JFK',
  JFK:'CDG'
}

console.log(getTrip(trip));
/*
https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/nCMisf4ZKpDLdHevE
*/

function newRoadSystem(roadRegister) {
  let ingress = new Array(roadRegister.length).fill(0);
  let egress = new Array(roadRegister.length).fill(0);
  
  // Find the connections between the graphs, count ingress/egress
  for(let i  = 0; i < roadRegister.length; i++) {
    for(let j = 0; j < roadRegister[i].length; j++) {
      if(roadRegister[i][j]) {
        egress[i]++;
        ingress[j]++;
      }
    }
  }
  
  // If they have the same ingress/egress elements should be the same
  for(let i = 0; i < roadRegister.length; i++) {
    if(ingress[i] !== egress[i]) {
      return false;
    }
  }
  
  return true;
}

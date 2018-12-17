/*
https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/CSzczQWdnYwmyEjvv/solutions
*/

function roadsBuilding(cities, roads) {
  let graph = new Array(cities);
  let result = [];
  // Initialize graph
  for(let i = 0; i < cities; i++) {
    graph[i] = new Array(cities).fill(false);
  }
  
  // Connect cities following input´s connections
  for(let i = 0; i < roads.length; i++) {
    let pair = roads[i];
    let from = pair[0];
    let to = pair[1];
    // It´s an undirected graph so we need to mark them both
    graph[from][to] = true;
    graph[to][from] = true;
  }
  
  // Check current graph connections
  for(let i = 0; i < cities; i++) {
    for(let j = 0; j < cities; j++) {
      // Use i !== j to avoid repeat the connection like [0,0], [1,1], [2,2]
      if(!graph[i][j] && !graph[j][i] && i !== j){
          result.push([i, j]);
          // Mark as visited to avoid duplicates in both as we
          // have a undirected graph
          graph[i][j] = true;
          graph[j][i] = true;
        }
    }
  }
  
  console.log(result);
  return result;
}

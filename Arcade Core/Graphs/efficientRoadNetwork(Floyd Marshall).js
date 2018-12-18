/*

https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/ty4w8WJZ4sZSBNK5Q

Floyd Marshall Algorithm checks the shortest path between all nodes

*/

function efficientRoadNetwork(n, roads) {
    // Initialize graph
    let graph = new Array(n);
    for(let i = 0; i < n; i++) {
        // We just need to put any number greater than 2
        graph[i] = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        // Set diagonal as 0 (own connection)
        graph[i][i] = 0;
    }
    
    // Fill weight of graph
    for(let i = 0; i < roads.length; i++) {
        let pair = roads[i];
        let from = pair[0];
        let to = pair[1];
        graph[from][to] = 1;
        graph[to][from] = 1;
    }
    
    // Floyd Marshall algorithm - Shortest path between nodes
    // O(n^3)
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                if(graph[j][k] > graph[j][i] + graph[i][k]) {
                    graph[j][k] = graph[j][i] + graph[i][k];
                }
            }
        }
    }
    
    // Graph with shortest path
    console.log(graph);
    // Verify if one path is biggest than two per requirements
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(graph[i][j] > 2) {
                return false;
            }
        }
    }
    return true;
}

n = 6;
roads = [[0, 4], [5, 0], [2, 1],
          [1, 4], [2, 3], [5, 2]];
console.log(efficientRoadNetwork(n, roads));

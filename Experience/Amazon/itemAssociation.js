function largestItemAssociation(itemAssociation){
  var graph = {};
  var keys = {};
  var groups = {};
  //Fill the vertices
  const flatten = aray => aray.reduce((acum, current) => acum.concat(Array.isArray(current) ? flatten(current) : current) ,[]);
  flattenArray = flatten(itemAssociation).sort().filter((item, index, arr) => arr.indexOf(item) === index);

  /*Keys with colors*/
  for(let i = 0; i < flattenArray.length; i++){
    keys[flattenArray[i]] = i;
  }

  //Get Vertices
  for(let i = 0; i < flattenArray.length; i++){ 
    if(!(flattenArray[i] in graph)){
      graph[flattenArray[i]] = [];
    }
  }
  //Fill edges
  for(let i = 0; i < itemAssociation.length; i++){
    let item1 = itemAssociation[i][0];
    let item2 = itemAssociation[i][1];
    //Grafo no dirigido
    graph[item1].push(item2);
    graph[item2].push(item1)
  }
  let numComponent = 0;
  //DFS
  //Seen array
  let color = new Array(flattenArray.length).fill(0);
  for(let node in graph){
    if(color[keys[node]] === 0){
      color[keys[node]] = ++numComponent;
      groups[numComponent] = [node];
      dfs(node, color, graph, keys, groups)
    }
  }

  console.log(graph);
  console.log(color);
  console.log(groups);
  //Sort
  for(let group in groups){
    groups[group] = groups[group].sort();
  }
  //Fomat result
  let max = 0;   
  let index;
  for(let group in groups){
    if(groups[group].length > max){
      max = groups[group].length;
      index = group;
    }else if(groups[group].length === max){
      if(groups[group][0] < groups[index][0]){
        index = group;
      }
    }
  }
  return groups[index];
}

function dfs(node, color, graph, keys, groups){
  //Get the values
  for(item of graph[node]){
    if(color[keys[item]] === 0){
      color[keys[item]] = color[keys[node]];
      groups[color[keys[node]]].push(item);
      dfs(item, color, graph, keys, groups);
    }
  }
}

item = [
  ['Item1','Item2'],
  ['Item3', 'Item4'],
  ['Item6', 'Item5'],
  ['Item6', 'Item1'],
];


/*item = [
['Item1','Item2'],
['Item3', 'Item4'],
['Item4', 'Item5']
]*/
console.log(largestItemAssociation(item));
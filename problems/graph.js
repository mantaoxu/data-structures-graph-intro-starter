
class Graph {
  constructor() {
    this.adjList = {};

  }

  addVertex(vertex) { //creating the first vertex(node) in the graph. a helper function
    if(!this.adjList[vertex]) {
      this.adjList[vertex] = []; // we are making a key - value pair in the object
    }
  }

  addEdges(edge1, edge2) {
    // if no edge we add the edge into the graph
    this.addVertex(edge1);
    this.addVertex(edge2);
    this.adjList[edge1].push(edge2)
    this.adjList[edge2].push(edge1)
  }

  buildGraph(edgeList) {
    edgeList.forEach((edge) => {
      if(edge.length === 1){
        this.addVertex(edge[0])
      } else{
      this.addEdges(edge[0], edge[1])
      }
    })
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    let queue = [startingVertex];   // starting point 
    let finalArr = [];
    let visited = {};
    visited[startingVertex] = true;   // the first vertex is already been visited
    let currVertex;    
    while(queue.length){ // if the queue has something(vertex) inside
      currVertex = queue.shift();   // the first vertex shift from the queue
      finalArr.push(currVertex);   // push this current vertex into the finalArr
      this.adjList[currVertex].forEach(neighbor => { // 
        if(!visited[neighbor]){  // if the neighbor has not been visited, then 
          visited[neighbor] = true; // this become true
          queue.push(neighbor); // push neighbor into queue;
        }
      })
    }
    return finalArr;
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};

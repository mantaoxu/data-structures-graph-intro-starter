
class Graph {
  constructor() {
    this.adjList = {};
    
  }

  addVertex(vertex) {
    if(!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
    
  }

  addEdges(srcValue, destValue) {
    // Code goes here ...
  }

  buildGraph(edges) {
    // Code goes here ...
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
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










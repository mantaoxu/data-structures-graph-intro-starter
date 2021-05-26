
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
    // Code goes here ...
    // if no edge we add the edge into the graph
    this.addVertex(edge1);
    this.addVertex(edge2);
    this.adjList[edge1].push(edge2)
    this.adjList[edge2].push(edge1)

  }

  buildGraph(edgeList) {
    // Code goes here ...

    edgeList.forEach((edge) => {

      if(edge.length === 1){
        this.addVertex(edge[0])
      } else{
      this.addEdges(edge[0], edge[1])
      }
    })

    return this.adjList

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

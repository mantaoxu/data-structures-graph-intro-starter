
class Graph {
  constructor() {
    this.adjList = {};

  }

  addVertex(vertex) { //creating the first vertex(node) in the graph. a helper function
    if(!this.adjList[vertex]) {
      this.adjList[vertex] = []; // we are making a key - value pair in the object
    }
  }

  addEdges(edge1, edge2) {  // [[a, b], [a, b]]
    // if no edge we add the edge into the graph
    // this.addVertex(edge1);
    // this.addVertex(edge2);
    // this.adjList[edge1].push(edge2)
    // this.adjList[edge2].push(edge1)

    if (!this.adjList[edge1]) this.addVertex(edge1);   // if the adjList does not have the edge1, then put edge1 as vertex in addVertex method.
    if (!this.adjList[edge2]) this.addVertex(edge2); // if the adjList does not have the edge2, then put edge2 as vertex in addVertex method.
    this.adjList[edge1].push(edge2);  // put the edge2 into the adjList that already have edge1
    this.adjList[edge2].push(edge1); // put the edge1 into the adjList  that already have edge2

  }

  buildGraph(edges) {  // edges  = [[a, b], [b, c], [...]]
    edges.forEach((edge) => {       // loop over the edges, to get one edge
      if(edge.length === 1){    // if the one of the edge.length === 1, then 
        this.addVertex(edge[0])  // just insert the only one / the first index into the addVertex method
      } else{
      this.addEdges(edge[0], edge[1])  // otherwise, insert two index into the addEdges method.
      }
    })
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    // let queue = [startingVertex];   // starting point
    // let finalArr = [];
    // let visited = {};
    // visited[startingVertex] = true;   // the first vertex is already been visited
    // let currVertex;
    // while(queue.length){ // if the queue has something(vertex) inside
    //   currVertex = queue.shift();   // the first vertex shift from the queue
    //   finalArr.push(currVertex);   // push this current vertex into the finalArr
    //   this.adjList[currVertex].forEach(neighbor => { //
    //     if(!visited[neighbor]){  // if the neighbor has not been visited, then
    //       visited[neighbor] = true; // this become true
    //       queue.push(neighbor); // push neighbor into queue;
    //     }
    //   })
    // }
    // return finalArr;

    const visited = new Set();     // a object that collected all the visited value/ vertex
    const vertices = [];    // put all the 'vertice ...s' into this array
    const queue = [startingVertex];      // bfs just like queue, first in first out

    while(queue.length){     // if the queue has vertex
      let currVertex = queue.shift();   // based on first in first out, the vertex come out from the queue is the current vertex;
      if(visited.has(currVertex)) continue;     // if visited object contained the current Vertex, then keep doing something else;
      visited.add(currVertex);    //add  the current Vertex into the visited, means this vertex is already visited
      vertices.push(currVertex);      //also push the current Vertex into the final array/ vertices

      queue.push(...this.adjList[currVertex]); // then push the all the vertices into the queue array
    }
    return vertices
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
    let stack= [startingVertex];    //dfs just like stack, last in first out
    let vertices = [];  // put all the 'vertice...s' into this array
    // let visited = {};
    let visited = new Set(); // a object that collected all the visited value/ vertex

    while(stack.length){ // if the stack has vertex
      let currVertex = stack.pop(); // based on last in first out, the vertex come out from the stack is the current vertex;
      if(visited.has(currVertex)) continue;     // if visited object contained the current Vertex, then keep doing something else;
      visited.add(currVertex);    //add  the current Vertex into the visited, means this vertex is already visited
      vertices.push(currVertex);      //also push the current Vertex into the final array/ vertices

      stack.push(...this.adjList[currVertex]); // then push the all the vertices into the queue array
      
    }
    return vertices;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    if(visited.has(startingVertex)) return;    // if visited object contained the startingVertex, then keep doing something else;
    visited.add(startingVertex);    //add  the startingVertex into the visited, means this vertex is already visited
    vertices.push(startingVertex);      //also push the startingVertex into the final array/ vertices

    for(let neighbor of this.adjList[startingVertex]){     // one of the vertex as the neighbor, then do recursive call
      this.depthFirstTraversalRecursive(neighbor, visited, vertices)
    }
    return vertices;
  }
}

module.exports = {
  Graph
};

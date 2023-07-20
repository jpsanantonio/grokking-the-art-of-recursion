class Graph {
  constructor(numVertices) {
    this.edge = new Array(numVertices).fill([]);
  }
  
  addEdge(v1, v2) {
    this.edge[v1].push(v2);
    this.edge[v2].push(v1);
  }
  
  DFS(node) {
    const visited = new Set();
    
    this.dfs(node, visited);
  }
  
  dfs(node, visited) {
    visited.add(node);
    
    console.log(node);
    
    for (const adjacentNode of this.edge[node]) {
      if (!visited.has(adjacentNode)) {
        this.dfs(adjacentNode, visited);
      }
    }
  }
}

const graph = new Graph(6);
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 4);
graph.addEdge(4, 5);
graph.addEdge(3, 5);

console.log("DFS traversal: ");
graph.DFS(1);
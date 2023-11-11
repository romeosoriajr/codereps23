class Graph {
  constructor(n, edges) {
    this.n = n;
    this.list = new Map();

    for (let i = 0; i < n; i++) {
      this.list.set(i, []);
    }

    for (const edge of edges) {
      this.addEdge(edge);
    }
  }

  // edge = [from, to, cost]
  addEdge(edge) {
    const [from, to, cost] = edge;
    this.list.get(from).push([to, cost]);
  }

  shortestPath(from, to) {
    const runningCosts = new Array(this.n).fill(Number.MAX_SAFE_INTEGER);
    runningCosts[from] = 0;

    const queue = [[from, 0]];

    while (queue.length) {
      const [val, totalCost] = queue.shift();

      if (totalCost > runningCosts[val]) continue;

      if (val == to) {
        return totalCost;
      }

      const neighbors = this.list.get(val);

      for (const [to, cost] of neighbors) {
        if (cost + totalCost < runningCosts[to]) {
          runningCosts[to] = cost + totalCost;
          queue.push([to, cost + totalCost]);
        }
      }

      queue.sort((a, b) => a[1] - b[1]);
    }

    return -1;
  }
}

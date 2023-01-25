function closestMeetingNode(edges, node1, node2) {
  const n = edges.length;
  let result = -1;
  let minDist = Number.MAX_SAFE_INTEGER;

  const dist1 = new Array(n).fill(0);
  const dist2 = new Array(n).fill(0);

  const visited1 = new Array(n).fill(false);
  const visited2 = new Array(n).fill(false);

  helper(node1, dist1, visited1);
  helper(node2, dist2, visited2);

  for (let curr = 0; curr < n; curr++) {
    if (
      visited1[curr] &&
      visited2[curr] &&
      minDist > Math.max(dist1[curr], dist2[curr])
    ) {
      minDist = Math.max(dist1[curr], dist2[curr]);
      result = curr;
    }
  }

  return result;

  function helper(node, dist, visited) {
    visited[node] = true;
    const neighbor = edges[node];
    if (neighbor != -1 && !visited[neighbor]) {
      dist[neighbor] = dist[node] + 1;
      helper(neighbor, dist, visited);
    }
  }
}


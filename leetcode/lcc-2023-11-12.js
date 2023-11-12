function numBusesToDestination(routes, source, target) {
  const n = routes.length;

  //key: stop, value: busses that have that stop
  const map = new Map();

  for (let bus = 0; bus < routes.length; bus++) {
    for (const stop of routes[bus]) {
      if (!map.has(stop)) map.set(stop, new Set());

      map.get(stop).add(bus);
    }
  }

  const queue = [[source, 0]];
  const visited = new Set(); //visited stops
  visited.add(source);
  const visitedRoutes = new Array(n).fill(false);

  while (queue.length) {
    const [currStop, bus] = queue.shift();
    if (currStop == target) return bus;

    for (const nextBus of map.get(currStop)) {
      // if we've been on the route, ignore.
      if (visitedRoutes[nextBus]) continue;

      for (const nextStop of routes[nextBus]) {
        if (!visited.has(nextStop)) {
          visited.add(nextStop);
          queue.push([nextStop, bus + 1]);
        }
      }

      visitedRoutes[nextBus] = true;
    }
  }

  return -1;
}

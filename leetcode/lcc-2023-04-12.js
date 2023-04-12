function simplifyPath(path) {
  const arr = path.split("/");

  const stack = [];

  for (const dir of arr) {
    if (dir == "." || !dir) continue;

    if (dir == "..") {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return "/" + stack.join("/");
}

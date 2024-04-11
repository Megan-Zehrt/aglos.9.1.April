// Destination City

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
// Return the destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

paths1 = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]

paths2 = [["B","C"],["D","B"],["C","A"]]

paths3 = [["A","Z"]]

paths4 = [["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]

var destCity = function(paths) {
    let visited = new Set();
    for (let path of paths) {
        visited.add(path[0]);
    }
    for (let path of paths) {
        if (!visited.has(path[1])) {
            return path[1];
        }
    }
};

console.log(destCity(paths1))
console.log(destCity(paths2))
console.log(destCity(paths3))
console.log(destCity(paths4))
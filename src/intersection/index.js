/*
initialize a new Map
initialize a new Set
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the Set
convert the Set to an array and return
*/

function intersection(a, b) {
  const map = new Map();
  const set = new Set();

  a.forEach((element) => {
    map.set(element, element);
  });

  b.forEach((element) => {
    if (map.get(element)) {
      set.add(element);
    }
  });

  return [...set];
}

module.exports = intersection;

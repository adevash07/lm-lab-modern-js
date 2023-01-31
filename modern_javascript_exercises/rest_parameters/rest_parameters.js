// Instructions can be found in rest_parameters.md

export function add(a, b, ...rest) {
  return rest.reduce((acc, current) => acc + current, a + b);
}

// add(1, 2, 3, 4, 5);

// module.exports = add;

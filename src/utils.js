const uniq = array => [...new Set(array)];
const simplify = locale => locale.replace(/-.*/, '').toLowerCase();
const flatten = (arr = []) => arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);

export {uniq, simplify, flatten};
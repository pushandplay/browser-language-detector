const uniq = array => array.reduce((a, b) => {
  if (a.indexOf(b) < 0) a.push(b);
  return a;
}, []);
const simplify = locale => locale.replace(/-.*/, '').toLowerCase();
const flatten = (array = []) => Array.prototype.concat(...array);
export {uniq, simplify, flatten};
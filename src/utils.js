const uniq = array => [...new Set(array)];
const simplify = locale => locale.replace(/-.*/, '').toLowerCase();

export {uniq, simplify};
const ftoc = function(f) {
  let c = 0;
  c = parseFloat(((f - 32) * 5/9).toFixed(1)); 
  return c;
};

const ctof = function(c) {
  let f = 0;
  f = parseFloat((c * 9/5 + 32).toFixed(1));
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

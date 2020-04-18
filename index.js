module.exports = function every(fns, callback) {
  var index = -1;
  function next(err, result) {
    if (err || !result || ++index >= fns.length) return callback(err, result);
    fns[index](next);
  }
  next(null, true);
};

module.exports = function every() {
  var args = arguments;
  var end = args.length - 1;
  var index = -1;
  function next(err, result) {
    if (err || !result || ++index >= end) return args[end](err, result);
    args[index](next);
  }
  next(null, true);
};

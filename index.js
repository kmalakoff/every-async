module.exports = function every(fns, arg1, arg2, arg3, callback) {
  function call0() {
    fns[index](next);
  }
  function call1() {
    fns[index](arg1, next);
  }
  function call2() {
    fns[index](arg1, arg2, next);
  }
  function call3() {
    fns[index](arg1, arg2, arg3, next);
  }
  function calln(args) {
    fns[index].apply(null, args);
  }

  var call;
  switch (arguments.length) {
    case 2:
      call = call0;
      callback = arg1;
      break;
    case 3:
      call = call1;
      callback = arg2;
      break;
    case 4:
      call = call2;
      callback = arg3;
      break;
    case 5:
      call = call3;
      break;
    default:
      var args = Array.prototype.slice.call(arguments, 1);
      callback = args.pop();
      args.push(next);
      call = calln.bind(null, args);
      break;
  }

  var index = -1;
  function next(err, result) {
    if (err || !result || ++index >= fns.length) return callback(err, result);
    call();
  }
  next(null, true);
};

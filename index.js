function call0(next, fn) {
  fn(next);
}

function call1(arg1, next, fn) {
  fn(arg1, next);
}

function call2(arg1, arg2, next, fn) {
  fn(arg1, arg2, next);
}

function call3(arg1, arg2, arg3, next, fn) {
  fn(arg1, arg2, arg3, next);
}

function call4(arg1, arg2, arg3, arg4, next, fn) {
  fn(arg1, arg2, arg3, arg4, next);
}

function call5(arg1, arg2, arg3, arg4, arg5, next, fn) {
  fn(arg1, arg2, arg3, arg4, arg5, next);
}

function call6(arg1, arg2, arg3, arg4, arg5, arg6, next, fn) {
  fn(arg1, arg2, arg3, arg4, arg5, arg6, next);
}

function calln(args, fn) {
  fn.apply(null, args);
}

module.exports = function every(fns, arg1, arg2, arg3, arg4, arg5, arg6, callback) {
  var call;
  switch (arguments.length) {
    case 2:
      call = call0.bind(null, next);
      callback = arg1;
      break;
    case 3:
      call = call1.bind(null, arg1, next);
      callback = arg2;
      break;
    case 4:
      call = call2.bind(null, arg1, arg2, next);
      callback = arg3;
      break;
    case 5:
      call = call3.bind(null, arg1, arg2, arg3, next);
      callback = arg4;
      break;
    case 6:
      call = call4.bind(null, arg1, arg2, arg3, arg4, next);
      callback = arg5;
      break;
    case 7:
      call = call5.bind(null, arg1, arg2, arg3, arg4, arg5, next);
      callback = arg6;
      break;
    case 8:
      call = call6.bind(null, arg1, arg2, arg3, arg4, arg5, arg6, next);
      break;
    default:
      var args = Array.prototype.slice.call(arguments, 1);
      callback = args.pop();
      args.push(next);
      call = calln.bind(null, args);
  }

  var index = -1;
  function next(err, result) {
    if (err || !result || ++index >= fns.length) return callback(err, result);
    call(fns[index]);
  }
  next(null, true);
};

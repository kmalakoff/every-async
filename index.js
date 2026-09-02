module.exports = function every(fns, arg1, arg2, arg3, arg4, arg5, arg6, callback) {
  var call;
  switch (arguments.length) {
    case 2:
      call = function call0() {
        fns[index](next);
      };
      callback = arg1;
      break;
    case 3:
      call = function call1() {
        fns[index](arg1, next);
      };
      callback = arg2;
      break;
    case 4:
      call = function call2() {
        fns[index](arg1, arg2, next);
      };
      callback = arg3;
      break;
    case 5:
      call = function call3() {
        fns[index](arg1, arg2, arg3, next);
      };
      callback = arg4;
      break;
    case 6:
      call = function call4() {
        fns[index](arg1, arg2, arg3, arg4, next);
      };
      callback = arg5;
      break;
    case 7:
      call = function call5() {
        fns[index](arg1, arg2, arg3, arg4, arg5, next);
      };
      callback = arg6;
      break;
    case 8:
      call = function call6() {
        fns[index](arg1, arg2, arg3, arg4, arg5, arg6, next);
      };
      break;
  }

  var index = -1;
  function next(err, result) {
    if (err || !result || ++index >= fns.length) return callback(err, result);
    call();
  }
  next(null, true);
};

function _call0(next, fn) {
  fn(next);
}

function _call1(arg1, next, fn) {
  fn(arg1, next);
}

function _call2(arg1, arg2, next, fn) {
  fn(arg1, arg2, next);
}

function _call3(arg1, arg2, arg3, next, fn) {
  fn(arg1, arg2, arg3, next);
}

function _call4(arg1, arg2, arg3, arg4, next, fn) {
  fn(arg1, arg2, arg3, arg4, next);
}

function _call5(arg1, arg2, arg3, arg4, arg5, next, fn) {
  fn(arg1, arg2, arg3, arg4, arg5, next);
}

function _call6(arg1, arg2, arg3, arg4, arg5, arg6, next, fn) {
  fn(arg1, arg2, arg3, arg4, arg5, arg6, next);
}

function calln(args, fn) {
  fn.apply(null, args);
}

export type Callback = (error?: Error, value?: unknown) => void;
export type CallFn = (cb: Callback) => void;
type Optional = Callback | unknown;

export default function every(fns: Callback[], ...args: Optional[]): undefined {
  const callback = args[args.length - 1] as Callback;
  args[args.length - 1] = next; // replace callback with next
  const call: CallFn = calln.bind(null, args);
  let index = -1;
  function next(err, result) {
    if (err || !result || ++index >= fns.length) return callback(err, result);
    call(fns[index]);
  }
  next(null, true);
}

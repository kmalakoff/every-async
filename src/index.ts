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

export type Callback = (error?: Error, value?: unknown) => void;
export type CallFn = (cb: Callback) => void;
type Optional = Callback | unknown;

export default function every(fns: Callback[], callback: Callback): undefined;
export default function every(fns: Callback[], arg1: unknown, callback: Callback): undefined;
export default function every(fns: Callback[], arg1: unknown, arg2: unknown, callback: Callback): undefined;
export default function every(fns: Callback[], arg1: unknown, arg2: unknown, arg3: unknown, callback: Callback): undefined;
export default function every(fns: Callback[], arg1: unknown, arg2: unknown, arg3: unknown, arg4: unknown, callback: Callback): undefined;
export default function every(fns: Callback[], arg1: unknown, arg2: unknown, arg3: unknown, arg4: unknown, arg5: unknown, callback: Callback): undefined;
export default function every(fns: Callback[], arg1: unknown, arg2: unknown, arg3: unknown, arg4: unknown, arg5: unknown, arg6: unknown, callback: Callback): undefined;
export default function every(fns: Callback[], arg1?: Optional, arg2?: Optional, arg3?: Optional, arg4?: Optional, arg5?: Optional, arg6?: Optional, _callback?: Optional): undefined {
  let call: CallFn;
  // biome-ignore lint/complexity/noArguments: Apply arguments
  switch (arguments.length) {
    case 2:
      call = call0.bind(null, next);
      break;
    case 3:
      call = call1.bind(null, arg1, next);
      break;
    case 4:
      call = call2.bind(null, arg1, arg2, next);
      break;
    case 5:
      call = call3.bind(null, arg1, arg2, arg3, next);
      break;
    case 6:
      call = call4.bind(null, arg1, arg2, arg3, arg4, next);
      break;
    case 7:
      call = call5.bind(null, arg1, arg2, arg3, arg4, arg5, next);
      break;
    case 8:
      call = call6.bind(null, arg1, arg2, arg3, arg4, arg5, arg6, next);
      break;
    default: {
      // biome-ignore lint/complexity/noArguments: Apply arguments
      const args = Array.prototype.slice.call(arguments, 1);
      args[args.length - 1] = next; // replace callback with next
      call = calln.bind(null, args);
    }
  }

  // biome-ignore lint/complexity/noArguments: Apply arguments
  const callback_ = arguments[arguments.length - 1] as Callback;
  let index = -1;
  function next(err, result) {
    if (err || !result || ++index >= fns.length) return callback_(err, result);
    call(fns[index]);
  }
  next(null, true);
}

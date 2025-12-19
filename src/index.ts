export type Callback = (error?: Error, value?: unknown) => void;
export type CallFn = (cb: Callback) => void;

export default function every<T extends unknown[]>(fns: Callback[], ...args: [...T, Callback]): void {
  const callback = args[args.length - 1] as Callback;
  args[args.length - 1] = next; // replace callback with next
  let index = -1;
  function next(err, result) {
    if (err || !result || ++index >= fns.length) return callback(err, result);
    fns[index].apply(null, args);
  }
  next(null, true);
}

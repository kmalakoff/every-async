export type Callback = (error?: Error | null, value?: unknown) => void;
export type CallFn = (cb: Callback) => void;

export default function every<T extends unknown[]>(fns: Callback[], ...args: [...T, Callback]): void {
  const callback = args[args.length - 1] as Callback;
  args[args.length - 1] = next; // replace callback with next
  let index = -1;
  function next(err?: Error | null, result?: unknown) {
    if (err || !result || ++index >= fns.length) return callback(err, result);
    fns[index].apply(null, args as unknown as Parameters<Callback>);
  }
  next(undefined, true);
}

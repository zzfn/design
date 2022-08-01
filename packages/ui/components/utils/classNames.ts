function classNames(...args: any[]): string {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    if (!arg) continue;

    let argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        var inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      } else {
        return '';
      }
    } else if (argType === 'object') {
      if (arg.toString === Object.prototype.toString) {
        for (var key in arg) {
          if (Object.prototype.hasOwnProperty.call(arg, key)&& arg[key]) {
            classes.push(key);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  }

  return classes.join(' ');
}

export default classNames;

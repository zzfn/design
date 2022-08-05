function classNames(...args: any[]): string {
  const length = args.length;
  let classNames: string[] = [];
  for (let i = 0; i < length; i++) {
    const v = args[i];
    if (!v) {
      continue;
    }
    if (Object.prototype.toString.call(v) === '[object String]') {
      classNames.push(v);
    } else if (Object.prototype.toString.call(v) === '[object Array]') {
      classNames = classNames.concat(v);
    } else if (Object.prototype.toString.call(v) === '[object Object]') {
      Object.keys(v).forEach((k) => {
        if (v[k]) {
          classNames.push(k);
        }
      });
    } else {
      console.warn('arguments must be one of string/array/object.');
    }
  }
  return [...new Set(classNames)].join(' ');
}

export default classNames;

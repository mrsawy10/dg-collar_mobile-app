const cn = (...args: (string | boolean | undefined | null | number)[]): string => {
    return args
      .filter(arg => !!arg) // Filter out falsy values
      .map(arg => {
        if (typeof arg === 'string' || typeof arg === 'number') {
          return arg.toString().trim();
        } else if (typeof arg === 'boolean' && arg) {
          return 'true';
        }
        return '';
      })
      .join(' ');
  };
  
  export default cn;
  
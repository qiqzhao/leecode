var isValid = function(s) {
  const stack = [];
  const pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (pairs[char]) {
          stack.push(char);
      } else {
          const top = stack.pop();
          if (pairs[top] !== char) {
              return false;
          }
      }
  }

  return stack.length === 0;
};

const res = isValid(['(', ')'])
console.log(res)
var generateParenthesis = function(n) {
    var arr = [];
    gpHelper(n, n, '');
    return arr;
  
    function gpHelper(left, right, str) {
      if (!left && !right) return arr.push(str);
      if (left) gpHelper(left - 1, right, str + '(');
      if (right > left) gpHelper(left, right - 1, str + ')');
    }
  };
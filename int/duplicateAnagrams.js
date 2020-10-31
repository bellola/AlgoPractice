function funWithAnagrams(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = a.length - 1; j > i; j--) {
      if (isAnagram(a[i], a[j]) === true) {
        a.splice(j, 1);
      }
    }
  }

  return a.sort();
}

function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  const map = {};

  for (let i = 0; i < b.length; i++) {
    map[b[i]] ? map[b[i]]++ : (map[b[i]] = 1);
  }

  for (let i = 0; i < a.length; i++) {
    if (map[a[i]]) map[a[i]]--;
    else return false;
  }

  return true;
}
// isAnagram('code','doce')
funWithAnagrams(arr);

function moveLargest(a) {
  let max = Math.max(...a);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === max) {
      a.unshift(max);
      a.splice(i + 1, 1);
      break;
    }
  }
  return a;
}


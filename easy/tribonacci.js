function T(n){
    if(n === 0) return 0;
    if(n === 1) return 0;
    if(n === 2) return 1;
    return T(n-1) + T(n-2) + T(n-3);
  }
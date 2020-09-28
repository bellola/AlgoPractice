function kangaroo(x1, v1, x2, v2) {

    let first = x1;
     let second = x2;
     for(let i = Math.min(x1,x2); i < 10000; i++){
       if(first === second) return "YES"
       first+=v1
       second+=v2
     }
   
   return "NO"
   }

   //better

//    static String kangaroo(int x1, int v1, int x2, int v2) {

//     if (v1 > v2) {
        
//         int remainder = (x1 - x2) % (v2 - v1);
        
//         if (remainder == 0) {
//             return "YES";
//         }
//     }
//     return "NO";

// }
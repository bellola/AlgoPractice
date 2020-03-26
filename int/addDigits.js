var addDigits = function(num) {
    let result = 0;
    
    while(num >= 10) {
        result += num % 10;
        num = Math.floor(num / 10);
        
        if (num < 10) {
            num += result;
            result = 0;
        }
    }
    
    return num;
};
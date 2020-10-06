var defangIPaddr = function(address) {
    let arr = address.split('.').join('[.]')
    
    return arr
    
    
    
};


var defangIPaddr = function(address) {
    var result="";
    
    for(var i=0;i<address.length;i++) {
        if(address[i] === ".")
            result += "[.]";
        else
            result += address[i];
    }
    
    return result;    
};
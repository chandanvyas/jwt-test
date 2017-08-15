var browserUrl = window.location.search;

var tokenSplit = browserUrl.split('?')[1];
     
try {  
    var result = parseJwt(tokenSplit);

    function parseJwt (token) { 
        var base64Url = token.split('.')[1];             
        return JSON.parse(window.atob(base64Url));
    };
    
    for (var abc in result){
        if(result.hasOwnProperty(abc))
            if(result.admin===true){
                var match = true;
                break;
            } else {
                break;
            }
    }
    
    if (match==true){
        document.write("Token is Correct");
    } else{
        document.write("Token is Incorrect");
    }
    
} catch(e) {
    document.write("Incorrect token");
}




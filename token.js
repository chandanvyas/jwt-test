var browserUrl = window.location.search;
//document.write(browserUrl);
//var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJudW1iZXIiOiI5ODczNDEyNzY5IiwibmFtZSI6IkNoYW5kYW4gVnlhcyIsImFkbWluIjp0cnVlfQ.B7flYbt1vsMH97OGoD0Q1TKWcPRQNd-ocVgi7poqqqA";

//var valAppnd = browserUrl + "?" + token;
//document.write(valAppnd);

var tokenSplit = browserUrl.split('?')[1];
        //document.write(tokenSplit); 

try {
    
    var result = parseJwt(tokenSplit);
    //console.log("======result=======" +result);
    
    function parseJwt (token) {
        
        var base64Url = token.split('.')[1];
        //document.write(base64Url);              
        return JSON.parse(window.atob(base64Url));
    };
    
    //document.write(JSON.stringify(result));
    
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




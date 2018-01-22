
    // Valid Request
if(responseCode.code == 200){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 200"] = responseCode.code = 200);
    (tests["Status Code Name OK"] = responseCode.name.has("OK"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["pinVerificationId is Not Null"] = jsonData.pinVerificationId !== null);
    
    // Set Environment
    postman.setEnvironmentVariable("pinVerificationId", jsonData.pinVerificationId);
    
    // Next Request
    postman.setNextRequest("Retrieve Sessions");
    
} else if(responseCode.code == 401){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 401"] = responseCode.code = 401);
    (tests["Status Code Name Unauthorized"] = responseCode.name.has("Unauthorized"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["Code is Not Null"] = jsonData.code !== null);
    (tests["Message is Not Null"] = jsonData.message !== null);
    
} else {
    postman.setNextRequest("Retrieve User");
}
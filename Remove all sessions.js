    
    // Valid Request
if(responseCode.code == 200){
    var jsonData = JSON.parse(responseBody);
    var data    = jsonData[data];
        (tests["Status Code is 200"] = responseCode.code = 200);
        (tests["Status Code Name is OK"] = responseCode.name.has("OK"));
        (tests["Body is Not Null"] = responseBody !== null);
        (tests["Data Body is Not Null"] = jsonData.data !== null);
        (tests["Session ID is Not Null"] = jsonData.sessionId !== null);
        (tests["userPublicId is Not Null"] = jsonData.userPublicId !== null);
        (tests["fullName is Not Null"] = jsonData.fullName !== null);
        (tests["Phone is Not Null"] = jsonData.phone !== null);
        (tests["iat is Not Null"] = jsonData.iat !== null);
        (tests["exp is Not Null"] = jsonData.exp !== null);
        (tests["appVersion is Not Null"] = jsonData.appVersion !== null);
        (tests["deviceInfo is Not Null"] = jsonData.deviceInfo !== null);
        (tests["currentSession is True"] = jsonData.currentSession = true);
        (tests["location is Not Null"] = jsonData.location !== null);
        (tests["ip is Not Null"] = jsonData.ip !== null);
        // Set Environment
        postman.setEnvironmentVariable("sessionId", jsonData.sessionId);
        postman.setEnvironmentVariable("userPublicId", jsonData.userPublicId);
        postman.setEnvironmentVariable("iat", jsonData.iat);
        postman.setEnvironmentVariable("exp", jsonData.exp);
        postman.setEnvironmentVariable("appVersion", jsonData.appVersion);
        postman.setEnvironmentVariable("deviceInfo", jsonData.deviceInfo);
        postman.setEnvironmentVariable("location", jsonData.location);
        postman.setEnvironmentVariable("ip", jsonData.ip);
        
    (tests["count is Not Null"] = jsonData.count !== null);
    
    // Set Environment
    postman.setEnvironmentVariable("count", jsonData.count);
    
    // Set Next Request
    postman.setNextRequest("Change Password");
    
} else if(responseCode.code == 401){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 401"] = responseCode.code = 401);
    (tests["Status Code Name is Unauthorized"] = responseCode.name.has("Unauthorized"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["Code is Not Null"] = jsonData.code !== null);
    (tests["Message is Not Null"] = jsonData.message !== null);
    
} else {
    postman.setNextRequest("Retrieve User");
}
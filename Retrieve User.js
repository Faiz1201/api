
    // Test and Response
if(responseCode.code == 200){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 200"] = responseCode.code = 200);
    (tests["Status Code Name is OK"] = responseCode.name.has("OK"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["fullName is Not Null"] = jsonData.fullName !== null);
    (tests["phone is Not Null"] = jsonData.phone !== null);
    (tests["QR is Not Null"] = jsonData.qr !== null);
        
    // Set Environment Variable   
    postman.setEnvironmentVariable("QR", jsonData.qr);
    
    // Set Next Request 
    postman.setNextRequest("Initiate Verify Phone (Send OTP) - User");
    
} else if(responseCode.code == 401){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 401"] = responseCode.code = 401);
    (tests["Status Code Name is Unauthorized"] = responseCode.name.has("Unauthorized"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["Code is Not Null"] = jsonData.code !== null);
    (tests["Message is Not Null"] = jsonData.message !== null);
    
} else {
    postman.setNextRequest("Retrieve Access Token (Login)");
}
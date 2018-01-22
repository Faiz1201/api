var jsonData = JSON.parse(responseBody);

    // Test and Response
    // Valid Input Data 
if(responseCode.code == 200){
    (tests["Status Code is 200"] = responseCode.code = 200);
    (tests["Status Code Name OK"] = responseCode.name.has("OK"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["passwordVerificationId is Not Null"] = jsonData.passwordVerificationId !== null);
    
    // Set Environment
    postman.setEnvironmentVariable("passwordVerificationId", jsonData.passwordVerificationId);
    
    // Set Next Request
    postman.setNextRequest("Create PIN");
    
} else if(responseCode.code == 422){
    (tests["Status Code is 422"] = responseCode.code = 422);
    (tests["Status Code Name is Unprocessable Entity"] = responseCode.name.has("Unprocessable Entity"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["Code is Not Null"] = jsonData.code !== null);
    (tests["Message is Not Null"] = jsonData.message !== null);
        var fields = jsonData[fields];
        (tests["Fields Body is Not Null"] = responseBody !== null);
        (tests["Message is Not Null"] = jsonData.message !== null);
        (tests["Field is Not Null"] = jsonData.field !== null);

} else {
    postman.setNextRequest("Initiate Verify Phone (Send OTP) - User");
}
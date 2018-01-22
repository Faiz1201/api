     
    // Valid Response
if(responseCode.code == 200){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 200"] = responseCode.code = 200);
    (tests["Status Code Name OK"] = responseCode.name.has("OK"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["fullName is Not Null"] = jsonData.fullName !== null);
    (tests["Phone is Not Null"] = jsonData.fullName !== null);
    (tests["QR is Not Null"] = jsonData.qr !== null);
    (tests["Pin Enabled True"] = jsonData.pinEnabled = true);
    
    // Postman Next Request
    postman.setNextRequest("Verify PIN");

} else if(responseCode.code == 422){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 422"] = responseCode.code = 422);
    (tests["Status Code Name Unprocessable Entity"] = responseCode.name.has("Unprocessable Entity"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["Code is Not Null"] = jsonData.code !== null);
    (tests["Message is Not Null"] = jsonData.message !==null);
    
} else if(responseCode.code == 401){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 401"] = responseCode.code = 401);
    (tests["Status Code Name Unauthorized"] = responseCode.name.has("Unauthorized"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["Code is Not Null"] = jsonData.code !== null);
    (tests["Message is Not Null"] = jsonData.code !== null);
    
} else {
    postman.setNextRequest("Retrieve User");
}

    // Valid Request
if(responseCode.code == 204){
    (tests["Status Code is 204"] = responseCode.code = 204);
    (tests["Status Code Name No Content"] = responseCode.name.has("No Content"));
    
    postman.setNextRequest(null);

} else if (responseCode.code == 404){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 404"] = responseCode.code = 404);
    (tests["Status Code Name Not Found"] = responseCode.name.has("Not Found"));
    (tests["code is Not Null"] = jsonData.code !== null);
    (tests["message is Not Null"] = jsonData.message !== null);

} else if (responseCode.code == 422){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 422"] = responseCode.code = 422);
    (tests["Status Code Name Unprocessable Entity"] = responseCode.name.has("Unprocessable Entity"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["code is Not Null"] = jsonData.code !== null);
    (tests["message is Not Null"] = jsonData !== null);
    var fields = jsonData[fields];
        (tests["Message is Not Null"] = jsonData.message !== null);
        (tests["Field is Not Null"] = jsonData.field !== null);

} else if (responseCode.code == 401){
    var jsonData = JSON.parse(responseBody);
    (tests["Status Code is 401"] = responseCode.code = 401);
    (tests["Status Code Name is Unauthorized"] = responseCode.name.has("Unauthorized"));
    (tests["Body is Not Null"] = responseBody !== null);
    (tests["Code is Not Null"] = jsonData.code !== null);
    (tests["Message is Not Null"] = jsonData.message !== null);
    (tests["Code Name is Error"] = jsonData.code.has("Error"));
    (tests["Message Name is Unauthorized"] = jsonData.message.has("Unauthorized"));
} else {
    postman.setNextRequest("Initiate Verify Phone (Send OTP)");
}
const assert = require('assert')
const request= require('request')
const config=require("../utils/config")


/**
 * Code to verify POST query 
 */

describe("Code to verify POST query ",function(){
    
   var token;

   it("Create a resource-POST",function(done){
         const options = {  
            url: config.baseurl+'/posts',
            method: 'POST',
            headers:
            { "Content-type": "application/json; charset=UTF-8"
            },
            
            body: JSON.stringify({
               title: 'foo',
               body: 'bar',
               userId: 1
               }),
            
         };

         request(options, function(error,response,body) {  
            let json = JSON.parse(body);
            console.log(json);
            assert.equal(response.statusCode,'201')
            done();
         });
        
   })
})

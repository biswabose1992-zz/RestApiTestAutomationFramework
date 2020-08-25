const assert = require('assert')
const request= require('request')
const config=require("../utils/config")


/**
 * Code to verify GET query 
 */

describe("Code to verify GET query ",function(){
    
   var token;

   it("Read a resource-GET",function(done){
        const options = {  
            url: config.baseurl+ '/posts/1',
            method: 'GET',
            
        };

        request(options, function(error,response,body) {  
            let json = JSON.parse(body);
            console.log(json);
            assert.equal(response.statusCode,'200')
            done();
        });
        
   })
})

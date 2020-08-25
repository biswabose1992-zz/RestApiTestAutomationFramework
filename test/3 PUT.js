const assert = require('assert')
const request= require('request')
const config=require("../utils/config")

   /**
    * Code to verify PUT query 
    */

   /** PUT is used to update replace the whole doc
    * 
    */

describe("Code to verify PUT & PATCH query ",function(){
    
   var token;

   it("Update a resource-PUT",function(done){
         const options = {  
            url: config.baseurl +'/posts/1',
            method: 'PUT',
            headers:
            { "Content-type": "application/json; charset=UTF-8"
            },
            
            body: JSON.stringify({
               title: 'foo',
               body: 'bar',
               userId: 1,
               id: 1,
               }),
            
         };

         request(options, function(error,response,body) {  
            let json = JSON.parse(body);
            console.log(json);
            assert.equal(response.statusCode,'200')
            done();
         });
        
   })

   /** PATCH is used for minor update or change of just a single value of a perticluar field
    * 
    */

   it("Update a resource-PATCH",function(done){
      const options = {  
         url: config.baseurl +'/posts/1',
         method: 'PATCH',
         headers:
         { "Content-type": "application/json; charset=UTF-8"
         },
         
         body: JSON.stringify({
            title: 'foo1' //title is being updates here
            
            }),
         
      };

      request(options, function(error,response,body) {  
         let json = JSON.parse(body);
         console.log(json);
         assert.equal(response.statusCode,'200')
         done();
      });
     
   })
})

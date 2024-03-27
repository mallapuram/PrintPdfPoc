return new Promise(function(resolve, reject) {

        var totalCount = promiseArray.length;
        var finishedCount = 0;
        var response = {
            success: [],
            failure: []
        };

        var interval = setInterval(function() {
            if (totalCount == finishedCount) {
                
                clearInterval(interval)
                
                if (response.failure.length > 0) {
                    
                    reject(response.failure);
                
                } else if (response.success.length > 0) {
                    
                    resolve(response.success);
                
                } else
                    reject("unable to process..");
            }
        }, 500);

        for (let index = 0; index < promiseArray.length; index++) {
            var promise = promiseArray[index];

            promise.then(function(result) {
                
                response.success[index] = result;
            
            }).catch(function(e) {
                
                response.failure[response.failure.length] = e;
            
            }).finally(function() {
               
                finishedCount++; 
            
            });
        }

    });

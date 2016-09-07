var moment = require("moment.js");

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.job("sendDailyNotification", function(req, res) {
 
var userQuery = new Parse.Query(Parse.User)
var today = moment()

var todayIntroDate = moment().startOf('day');

//var yesterdayIntroDate = todayIntroDate.subtract('days', 1)._d;
var todayIntroDateDay = todayIntroDate._d;
console.log("today:");
console.log(todayIntroDateDay);

userQuery.lessThan("lastCompletedDay", todayIntroDateDay);

 var messageText = "We picked 5 new items just for YOU! It's time to get back #onstreek"

  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.matchesQuery("user", userQuery)

  Parse.Push.send({
    where: pushQuery, // Set our Installation query
    data: {
      alert: messageText
    }
  }).then(function() {
    // Push was successful
    res.success();
  }, function(error) {
    res.error(error.message);
    throw "Got an error " + error.code + " : " + error.message;
  });

 
});

Parse.Cloud.define("setRefCodeUseCount", function(req, res) {
 
  //Parse.Cloud.useMasterKey();
  var userID = req.params.userID;
 
  getUser(userID, {useMasterKey: true}).then
    (   
        //When the promise is fulfilled function(user) fires, and now we have our USER!
        function(user)
        {
            user.increment("refCodeUseCount");
           user.save().then(function(a) {
             }).then(function() {
               res.success();
             }, function(err) {
               res.error(err);
           });
 
            res.success();
        }
        ,
        function(error)
        {
            res.error(error);
        }
    );
});

Parse.Cloud.define("getRefCodeUseCount", function(req, res) {
 
  //Parse.Cloud.useMasterKey();
  var userID = req.params.userID;
 
  getUser(userID, {useMasterKey: true}).then
    (   
        //When the promise is fulfilled function(user) fires, and now we have our USER!
        function(user)
        {
            var count = user.get("refCodeUseCount");
            console.log(count);
            res.success(count);
        }
        ,
        function(error)
        {
            res.error(error);
        }
    );
});

function getUser(userId)
{
    //Parse.Cloud.useMasterKey();
    var userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo("objectId", userId);
 
    //Here you aren't directly returning a user, but you are returning a function that will sometime in the future return a user. This is considered a promise.
    return userQuery.first
    ({
    	useMasterKey: true,
        success: function(userRetrieved)
        {
            //When the success method fires and you return userRetrieved you fulfill the above promise, and the userRetrieved continues up the chain.
            return userRetrieved;
        },
        error: function(error)
        {
            return error;
        }
    });
};

// function getClothing(id)
// {

// 	//Parse.Cloud.useMasterKey();
// 	var query = new Parse.Query("clothing");
// 	query.equalTo("objectId", id);
	 
// 	    //Here you aren't directly returning a user, but you are returning a function that will sometime in the future return a user. This is considered a promise.
// 	    return query.first
// 	    ({
// 	        success: function(userRetrieved)
// 	        {
// 	            //When the success method fires and you return userRetrieved you fulfill the above promise, and the userRetrieved continues up the chain.
// 	            return userRetrieved;
// 	        },
// 	        error: function(error)
// 	        {
// 	            return error;
// 	        }
// 	    });

// };

Parse.Cloud.job("setItemTypesandCategories", function(req, res) {

    var productArray = []; 

	var data = req.body;
	var promise = new Parse.Promise();
	var dataJson = JSON.parse(data);
    
    //Parse.Cloud.useMasterKey();
	var length = Object.keys(dataJson).length;
    console.log(length);

    for (var i = 0; i < length; i++) {
        var content = dataJson[i];

        var id = content.objectId;

         var query = new Parse.Query("clothing");
    	query.equalTo("objectId", id);
 

    query.first({
        success: function(theItem){
        
        	console.log("theItem");
        	console.log(theItem);
        	console.log("the content:");

        	for (var j = 0; j < length; j++) {
        		var newContent = dataJson[j]
        		var thisId = theItem.id;
        		console.log(newContent.objectId);
        		console.log(thisId);

        		if (newContent.objectId == thisId) {
        			theItem.set('itemType',newContent.itemType);
        			theItem.set('itemCategory', newContent.itemCategory);
        			productArray.push(theItem);
        			console.log(newContent);
        		}

        		if (productArray.length == length) {
					Parse.Object.saveAll(productArray, {
                    success: function(objects) {
                      console.log("success");
                        promise.resolve();
                        res.success();
                    },
                    error: function(error) {
                      console.log("failure");
                        promise.reject(error.message);
                        res.error(error);
                    }
        			});
				}
        	};




        },
        error: function(error){
            response.error("No se encontró al usuario");
            console.log("didnt find item");
        }
    });


    };   

 

});

Parse.Cloud.job("importProducts", function(req, res) {
  var data = req.body;
    var promise = new Parse.Promise();
    console.log(req.body);
   var dataJson = JSON.parse(data);
    
    //Parse.Cloud.useMasterKey();
      
    var productArray = []; 

var length = Object.keys(dataJson).length;
    console.log(length);

    for (var i = 0; i < length; i++) {
      console.log(i);
        var clothingItem = new Parse.Object("clothing");
        var content = dataJson[i];
        console.log(content);
        console.log(content.Title);
        clothingItem.set('title', content.Title);
        clothingItem.set('imageURL', content.image);
        clothingItem.set('brand', content.Brand);
        clothingItem.set('productCode', content.ProductCode);
        clothingItem.set('price', content.Price);
        clothingItem.set('link', content.Link);
        clothingItem.set('itemCategory', content.itemCategory)
        clothingItem.set('itemType', content.itemType)
        

        // Parse.Object.save(clothingItem, {
        //             success: function(objects) {
        //               console.log("success");
        //                 promise.resolve();
        //             },
        //             error: function(error) {
        //               console.log("failure");
        //                 promise.reject(error.message);
        //             }
        // });


        productArray.push(clothingItem);

    };   
  
        Parse.Object.saveAll(productArray, {
                    success: function(objects) {
                      console.log("success");
                        promise.resolve();
                        res.success();
                    },
                    error: function(error) {
                      console.log("failure");
                        promise.reject(error.message);
                        res.error(error);
                    }
        });
  
});

Parse.Cloud.job("getPasswordToUser", function(request, response){
    //Parse.Cloud.useMasterKey();
 
    var query = new Parse.Query(Parse.User);
    console.log(request.params.userID);
    query.equalTo("objectId", request.params.userID);
 
    query.first({

    	useMasterKey: true,

        success: function(theUser){
          console.log("got the user");
          console.log(theUser.objectId);
          console.log(theUser.username);
          console.log(theUser);
            var password = theUser.password;

            console.log("The Password: " + password);
 
        },
        error: function(error){
            response.error("No se encontró al usuario");
        }
    });
});
 
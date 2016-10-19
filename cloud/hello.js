var Parse = require('parse/node');
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY, process.env.MASTER_KEY);
Parse.serverURL = process.env.SERVER_URL;
Parse.Cloud.useMasterKey();
var moment = require("../node_modules/moment/moment.js");




function hello(name) {
	console.log("hello melanie");
	console.log(name);

	process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

	console.log(process.argv[2])
	var data = process.argv[2]

	  var dataJson = JSON.parse(data);
    
    //Parse.Cloud.useMasterKey();
      
    var productArray = []; 

var length = Object.keys(dataJson).length;
    console.log(length);

    for (var i = 0; i < length; i++) {
      console.log(i);
        
        var content = dataJson[i];
        console.log(content);
        console.log(content.Title);

    };  
}

hello();



// Parse.Cloud.job("sendDailyNotification", function(req, res) {
 
// var userQuery = new Parse.Query(Parse.User)
// var today = moment()

// var todayIntroDate = moment().startOf('day');

// //var yesterdayIntroDate = todayIntroDate.subtract('days', 1)._d;
// var todayIntroDateDay = todayIntroDate._d;
// console.log("today:");
// console.log(todayIntroDateDay);

// userQuery.lessThan("lastCompletedDay", todayIntroDateDay);

//  var messageText = "We picked 5 new items just for YOU! It's time to get back #onstreek"

//   var pushQuery = new Parse.Query(Parse.Installation);
//   pushQuery.matchesQuery("user", userQuery)

//   Parse.Push.send({
//     where: pushQuery, // Set our Installation query
//     data: {
//       alert: messageText
//     }
//   }).then(function() {
//     // Push was successful
//     res.success();
//   }, function(error) {
//     res.error(error.message);
//     throw "Got an error " + error.code + " : " + error.message;
//   });



//   Parse.Cloud.job("setItemTypesandCategories", function(req, res) {

//     var productArray = []; 

// 	var data = req.body;
// 	var promise = new Parse.Promise();
// 	var dataJson = JSON.parse(data);
    
//     //Parse.Cloud.useMasterKey();
// 	var length = Object.keys(dataJson).length;
//     console.log(length);

//     for (var i = 0; i < length; i++) {
//         var content = dataJson[i];

//         var id = content.objectId;

//          var query = new Parse.Query("clothing");
//     	query.equalTo("objectId", id);
 

//     query.first({
//         success: function(theItem){
        
//         	console.log("theItem");
//         	console.log(theItem);
//         	console.log("the content:");

//         	for (var j = 0; j < length; j++) {
//         		var newContent = dataJson[j]
//         		var thisId = theItem.id;
//         		console.log(newContent.objectId);
//         		console.log(thisId);

//         		if (newContent.objectId == thisId) {
//         			theItem.set('itemType',newContent.itemType);
//         			theItem.set('itemCategory', newContent.itemCategory);
//         			productArray.push(theItem);
//         			console.log(newContent);
//         		}

//         		if (productArray.length == length) {
// 					Parse.Object.saveAll(productArray, {
//                     success: function(objects) {
//                       console.log("success");
//                         promise.resolve();
//                         res.success();
//                     },
//                     error: function(error) {
//                       console.log("failure");
//                         promise.reject(error.message);
//                         res.error(error);
//                     }
//         			});
// 				}
//         	};




//         },
//         error: function(error){
//             response.error("No se encontró al usuario");
//             console.log("didnt find item");
//         }
//     });


//     };   

 

// });

// Parse.Cloud.job("importProducts", function(req, res) {
//   var data = req.body;
//     var promise = new Parse.Promise();
//     console.log(req.body);
//    var dataJson = JSON.parse(data);
    
//     //Parse.Cloud.useMasterKey();
      
//     var productArray = []; 

// var length = Object.keys(dataJson).length;
//     console.log(length);

//     for (var i = 0; i < length; i++) {
//       console.log(i);
//         var clothingItem = new Parse.Object("clothing");
//         var content = dataJson[i];
//         console.log(content);
//         console.log(content.Title);
//         clothingItem.set('title', content.Title);
//         clothingItem.set('imageURL', content.image);
//         clothingItem.set('brand', content.Brand);
//         clothingItem.set('productCode', content.ProductCode);
//         clothingItem.set('price', content.Price);
//         clothingItem.set('link', content.Link);
//         clothingItem.set('itemCategory', content.itemCategory)
//         clothingItem.set('itemType', content.itemType)
        

//         // Parse.Object.save(clothingItem, {
//         //             success: function(objects) {
//         //               console.log("success");
//         //                 promise.resolve();
//         //             },
//         //             error: function(error) {
//         //               console.log("failure");
//         //                 promise.reject(error.message);
//         //             }
//         // });


//         productArray.push(clothingItem);

//     };   
  
//         Parse.Object.saveAll(productArray, {
//                     success: function(objects) {
//                       console.log("success");
//                         promise.resolve();
//                         res.success();
//                     },
//                     error: function(error) {
//                       console.log("failure");
//                         promise.reject(error.message);
//                         res.error(error);
//                     }
//         });
  
// });

// Parse.Cloud.job("getPasswordToUser", function(request, response){
//     //Parse.Cloud.useMasterKey();
 
//     var query = new Parse.Query(Parse.User);
//     console.log(request.params.userID);
//     query.equalTo("objectId", request.params.userID);
 
//     query.first({

//     	useMasterKey: true,

//         success: function(theUser){
//           console.log("got the user");
//           console.log(theUser.objectId);
//           console.log(theUser.username);
//           console.log(theUser);
//             var password = theUser.password;

//             console.log("The Password: " + password);
 
//         },
//         error: function(error){
//             response.error("No se encontró al usuario");
//         }
//     });
// });
//  
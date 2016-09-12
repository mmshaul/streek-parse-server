


function sendDailyNotification() {
 

console.log("in the function");

var userQuery = new Parse.Query(Parse.User);
var today = moment();

var todayIntroDate = moment().startOf('day');

//var yesterdayIntroDate = todayIntroDate.subtract('days', 1)._d;
var todayIntroDateDay = todayIntroDate._d;
console.log("today:");
console.log(todayIntroDateDay);

userQuery.lessThan("lastCompletedDay", todayIntroDateDay);

console.log("we got here");

userQuery.find({
    success: function (results) {
    	// console.log(results);
     //    for (var i = 0; i < results.length; i++) {
            
     //    }
     console.log("success");
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }

})
}

sendDailyNotification();

 // var messageText = "We picked 5 new items just for YOU! It's time to get back #onstreek"

 //  var pushQuery = new Parse.Query(Parse.Installation);
 //  pushQuery.matchesQuery("user", userQuery)


 //  Parse.Push.send({
 //    where: pushQuery, // Set our Installation query
 //    data: {
 //      alert: messageText
 //    }
 //  }).then(function() {
 //    // Push was successful
 //    res.success();
 //  }, function(error) {
 //    res.error(error.message);
 //    throw "Got an error " + error.code + " : " + error.message;
 //  });

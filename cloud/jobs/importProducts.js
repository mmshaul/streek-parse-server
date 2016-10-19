var Parse = require('parse/node');
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY, process.env.MASTER_KEY);
Parse.serverURL = process.env.SERVER_URL;
Parse.Cloud.useMasterKey();
var jf = require('jsonfile');


function importProducts() {


var pathToFile = process.argv[2]
    console.log(pathToFile);
    jf.readFile(pathToFile, function(err, obj) {

      if (err) {
        console.log('Error: ' + err);
        return;
      }

      var promise = new Parse.Promise();

        console.log(obj);
        var dataJson = obj;
    
    console.log('the data:');
    console.log(dataJson);
    //Parse.Cloud.useMasterKey();
      
      var productArray = []; 

    var length = Object.keys(dataJson).length;
    console.log(length);

    for (var i = 0; i < length; i++) {
      console.log(i);
        var clothingItem = new Parse.Object("clothing2");
        var content = dataJson[i];
        console.log(content);
        console.log(content.title);
        clothingItem.set('title', content.title);
        clothingItem.set('imageURL', content.image);
        clothingItem.set('brand', content.brand);
        clothingItem.set('productCode', content.productCode);
        clothingItem.set('price', content.price);
        clothingItem.set('link', content.link);
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
  

  console.log('the prodcuts:');
  console.log(productArray);
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


    
    //Parse.Cloud.useMasterKey();
      

  
};

importProducts();
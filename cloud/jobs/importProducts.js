var Parse = require('parse/node');
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY, process.env.MASTER_KEY);
Parse.serverURL = process.env.SERVER_URL;
Parse.Cloud.useMasterKey();


function importProducts() {
  // var data = req.body;


var data = [
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04461976_zi_neon_pink?$ecom880x1020$",
    "productCode": 4461976,
    "title": "Back Pleat Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-back-pleat-top/506110007?di=04461976_zi_neon_pink&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 49
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Outerwear",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04465802_zi_moss?$ecom880x1020$",
    "productCode": 4465802,
    "title": "Draped Front Vest",
    "itemType": "Vest",
    "link": "http://www.dillards.com/p/skies-are-blue-draped-front-vest/506286529?di=04465802_zi_moss&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 89
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04595269_zi_denim_dark?$ecom880x1020$",
    "productCode": 4595269,
    "title": "Denim Tunic",
    "itemType": "Tunic",
    "link": "http://www.dillards.com/p/skies-are-blue-denim-shirt-dress/506286564?di=04595269_zi_denim_dark&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 69
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04619934_zi_denim_blue?$ecom880x1020$",
    "productCode": 4619934,
    "title": "Denim Shirt Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-denim-shirt-dress/506338778?di=04619934_zi_denim_blue&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 89
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04653920_zi_red?$ecom880x1020$",
    "productCode": 4653920,
    "title": "Sleeveless Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-sleeveless-top/506036876?di=04653920_zi_red&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 59
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695288_zi_blue_neon_orange?$ecom880x1020$",
    "productCode": 4695288,
    "title": "Halter Printed Tank Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-halter-printed-tank-top/506111437?di=04695288_zi_blue_neon_orange&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 59
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695295_zi_white_cobalt?$ecom880x1020$",
    "productCode": 4695295,
    "title": "Printed Embroidered Neck Sleeveless Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-printed-embroidered-neck-sleeveless-dress/506237212?di=04695295_zi_white_cobalt&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695297_zi_navy?$ecom880x1020$",
    "productCode": 4695297,
    "title": "Front Bar-Neck Sleeveless Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-front-keyhole-cut-out-sleeveless-dress/506111469?di=04695297_zi_navy&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695298_zi_black_neon_orange?$ecom880x1020$",
    "productCode": 4695298,
    "title": "Stripe Sleeveless Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-stripe-sleeveless-dress/506111475?di=04695298_zi_black_neon_orange&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695304_zi_red_cobalt?$ecom880x1020$",
    "productCode": 4695304,
    "title": "Groovy-Print V-Neck Sleeveless Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-groovy-print-v-neck-sleeveless-dress/506111481?di=04695304_zi_red_cobalt&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695455_zi_cobalt?$ecom880x1020$",
    "productCode": 4695455,
    "title": "Embroidered Chiffon Boho Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-embroidered-chiffon-boho-top/506237218?di=04695455_zi_cobalt&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 69
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695456_zi_cobalt?$ecom880x1020$",
    "productCode": 4695456,
    "title": "Sleeveless V-Neck Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-sleeveless-v-neck-top/506237224?di=04695456_zi_cobalt&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 59
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695457_zi_ivory_neon_pink?$ecom880x1020$",
    "productCode": 4695457,
    "title": "Floral Sleeveless Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-floral-sleeveless-top/506237230?di=04695457_zi_ivory_neon_pink&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 59
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695460_zi_hot_pink?$ecom880x1020$",
    "productCode": 4695460,
    "title": "Sleeveless Sheath Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-side-lace-up-dress/506236209?di=04695460_zi_hot_pink&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 59
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695461_zi_neon_orange?$ecom880x1020$",
    "productCode": 4695461,
    "title": "Pleated Neon Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-pleated-neon-dress/506237236?di=04695461_zi_neon_orange&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 69
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04695462_zi_violet?$ecom880x1020$",
    "productCode": 4695462,
    "title": "Halter Bow Neck Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-halter-bow-neck-dress/506242579?di=04695462_zi_violet&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Bottoms",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04698403_zi_navy_white?$ecom880x1020$",
    "productCode": 4698403,
    "title": "Floral Maxi Skirt",
    "itemType": "Skirt",
    "link": "http://www.dillards.com/p/skies-are-blue-floral-maxi-skirt/506111503?di=04698403_zi_navy_white&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 69
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04699076_zi_neon_pink?$ecom880x1020$",
    "productCode": 4699076,
    "title": "Cut-Out Short-Sleeve Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-cut-out-short-sleeve-top/506237303?di=04699076_zi_neon_pink&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 59
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04704068_zi_navy_pink?$ecom880x1020$",
    "productCode": 4704068,
    "title": "Floral Lace Trim Slip Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-floral-lace-trim-slip-dress/506237340?di=04704068_zi_navy_pink&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04732780_zi_cherry_red?$ecom880x1020$",
    "productCode": 4732780,
    "title": "Bell Sleeve Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-bell-sleeve-top/506289122?di=04732780_zi_cherry_red&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 69
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733433_zi_chambray?$ecom880x1020$",
    "productCode": 4733433,
    "title": "Grid Wrap Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-grid-wrap-top/506289128?di=04733433_zi_chambray&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 69
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733436_zi_white-navy?$ecom880x1020$",
    "productCode": 4733436,
    "title": "Plaid V-Neck Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-plaid-v-neck-top/506289133?di=04733436_zi_white-navy&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 69
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733437_zi_natural?$ecom880x1020$",
    "productCode": 4733437,
    "title": "Bell Sleeve Floral Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-bell-sleeve-floral-dress/506289139?di=04733437_zi_natural&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 89
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733440_zi_ivory_wine?$ecom880x1020$",
    "productCode": 4733440,
    "title": "Folk Print Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-folk-print-dress/506339413?di=04733440_zi_ivory_wine&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 89
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733441_zi_navy-rose?$ecom880x1020$",
    "productCode": 4733441,
    "title": "Bar-Neck Keyhole Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-mock-neck-keyhole-dress/506289144?di=04733441_zi_navy-rose&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733463_zi_burgundy?$ecom880x1020$",
    "productCode": 4733463,
    "title": "Plaid Wrap Top",
    "itemType": "Top",
    "link": "http://www.dillards.com/p/skies-are-blue-plaid-wrap-top/506339424?di=04733463_zi_burgundy&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 69
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Tops",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733464_zi_red_navy?$ecom880x1020$",
    "productCode": 4733464,
    "title": "Mixed Plaid Shirt",
    "itemType": "Shirt",
    "link": "http://www.dillards.com/p/skies-are-blue-mixed-plaid-shirt/506339429?di=04733464_zi_red_navy&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 69
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733465_zi_ivory_black?$ecom880x1020$",
    "productCode": 4733465,
    "title": "Plaid Roll-Tab Sleeve Drawstring Shirt Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-plaid-roll-tab-sleeve-drawstring-shirt-dress/506339435?di=04733465_zi_ivory_black&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733466_zi_black?$ecom880x1020$",
    "productCode": 4733466,
    "title": "Embroidered Shift Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-embroidered-shift-dress/506339440?di=04733466_zi_black&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Skies Are Blue",
    "itemCategory": "Dresses",
    "imageURL": "http://dimg.dillards.com/is/image/DillardsZoom/04733467_zi_red_wine?$ecom880x1020$",
    "productCode": 4733467,
    "title": "Round Neck Long Sleeve Solid Shift Dress",
    "itemType": "Dress",
    "link": "http://www.dillards.com/p/skies-are-blue-round-neck-long-sleeve-solid-shift-dress/506339446?di=04733467_zi_red_wine&categoryId=410&facetCache=pageSize%3D96%26beginIndex%3D0%26orderBy%3D1",
    "price": 79
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/14/_10395474.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 10395474,
    "title": "Slouchy Faux Leather Tote with Pouch",
    "itemType": "Pouch",
    "link": "http://shop.nordstrom.com/s/street-level-slouchy-faux-leather-tote-with-pouch/3962373?origin=category-personalizedsort&fashioncolor=BLACK",
    "price": 56
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/16/_10813636.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 10813636,
    "title": "Faux Leather Bucket Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-faux-leather-bucket-bag-online-only/3965949?origin=category-personalizedsort&fashioncolor=COGNAC",
    "price": 48
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/10/_11505430.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 11505430,
    "title": "Roll Top Crossbody Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-roll-top-crossbody-bag/4291576?origin=category-personalizedsort&fashioncolor=BLACK%2F%20IVORY",
    "price": 36
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/12/_12179872.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12179872,
    "title": "Reversible Faux Leather Tote",
    "itemType": "Tote",
    "link": "http://shop.nordstrom.com/s/street-level-reversible-faux-leather-tote/4512820?origin=category-personalizedsort&fashioncolor=GREY%2F%20STONE",
    "price": 44
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/7/_12292027.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12292027,
    "title": "Mini Faux Leather Tassel Bucket Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-mini-faux-leather-tassel-bucket-bag/4213392?origin=category-personalizedsort&fashioncolor=BLACK",
    "price": 38
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/3/_12360603.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12360603,
    "title": "Leather Crossbody Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-leather-crossbody-bag/4287025?origin=category-personalizedsort&fashioncolor=TAN",
    "price": 98
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/6/_12361546.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12361546,
    "title": "Tassel Flap Crossbody Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-tassel-flap-crossbody-bag/4408882?origin=category-personalizedsort&fashioncolor=TAN",
    "price": 42
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/18/_12368658.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12368658,
    "title": "Perforated Faux Leather Tote with Pouch",
    "itemType": "Pouch",
    "link": "http://shop.nordstrom.com/s/street-level-perforated-faux-leather-tote-with-pouch/4290357?origin=category-personalizedsort&fashioncolor=BLACK",
    "price": 72
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/7/_12384187.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12384187,
    "title": "Stripe Tote",
    "itemType": "Tote",
    "link": "http://shop.nordstrom.com/s/street-level-stripe-tote/4439672?origin=category-personalizedsort&fashioncolor=NAVY%2F%20WHITE",
    "price": 44
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/17/_12492897.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12492897,
    "title": "Faux Leather Tote",
    "itemType": "Tote",
    "link": "http://shop.nordstrom.com/s/street-level-faux-leather-tote/4287017?origin=category-personalizedsort&fashioncolor=TAN",
    "price": 48
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/9/_12599929.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12599929,
    "title": "Mini Faux Leather Tassel Bucket Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-mini-faux-leather-tassel-bucket-bag/4401181?origin=category-personalizedsort&fashioncolor=STONE",
    "price": 38
  },
  {
    "brand": "Everly",
    "itemCategory": "Bodysuits",
    "imageURL": "http://testn.imgix.net/Zoom/17/_12833957.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12833957,
    "title": "Ruffle Print Wide Leg Jumpsuit",
    "itemType": "Jumpsuit",
    "link": "http://shop.nordstrom.com/s/everly-ruffle-print-wide-leg-jumpsuit/4413927?origin=category-personalizedsort&fashioncolor=RUST%20PRINT",
    "price": 46
  },
  {
    "brand": "Everly",
    "itemCategory": "Dresses",
    "imageURL": "http://testn.imgix.net/Zoom/5/_12859505.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12859505,
    "title": "High Neck Trapeze Dress",
    "itemType": "Dress",
    "link": "http://shop.nordstrom.com/s/everly-high-neck-trapeze-dress/4308853?origin=category-personalizedsort&fashioncolor=PLUM",
    "price": 46
  },
  {
    "brand": "Everly",
    "itemCategory": "Dresses",
    "imageURL": "http://testn.imgix.net/Zoom/13/_12974933.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12974933,
    "title": "Rowan' V-Neck Skater Dress",
    "itemType": "Dress",
    "link": "http://shop.nordstrom.com/s/everly-rowan-v-neck-skater-dress/4007404?origin=category-personalizedsort&fashioncolor=ORANGE",
    "price": 46
  },
  {
    "brand": "Everly",
    "itemCategory": "Dresses",
    "imageURL": "http://testn.imgix.net/Zoom/9/_12975129.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12975129,
    "title": "Rowan' V-Neck Skater Dress",
    "itemType": "Dress",
    "link": "http://shop.nordstrom.com/s/everly-rowan-v-neck-skater-dress/4512272?origin=category-personalizedsort&fashioncolor=DEEP%20BLUE",
    "price": 46
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/4/_12977424.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 12977424,
    "title": "Faux Leather Bucket Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-faux-leather-bucket-bag/4395857?origin=category-personalizedsort&fashioncolor=COGNAC",
    "price": 44
  },
  {
    "brand": "Everly",
    "itemCategory": "Dresses",
    "imageURL": "http://testn.imgix.net/Zoom/10/_13052330.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13052330,
    "title": "Mock Neck Sleeveless Midi Dress",
    "itemType": "Dress",
    "link": "http://shop.nordstrom.com/s/everly-mock-neck-sleeveless-midi-dress/4438679?origin=category-personalizedsort&fashioncolor=OLIVE",
    "price": 46
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/14/_13195174.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13195174,
    "title": "Faux Leather Tassel Crossbody Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-faux-leather-tassel-crossbody-bag/4454673?origin=category-personalizedsort&fashioncolor=BLACK",
    "price": 42
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/17/_13198437.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13198437,
    "title": "Faux Leather Bucket Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-faux-leather-bucket-bag/4395861?origin=category-personalizedsort&fashioncolor=BLACK",
    "price": 48
  },
  {
    "brand": "Everly",
    "itemCategory": "Dresses",
    "imageURL": "http://testn.imgix.net/Zoom/3/_13212183.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13212183,
    "title": "Lattice Detail Floral Print Shift Dress",
    "itemType": "Dress",
    "link": "http://shop.nordstrom.com/s/everly-lattice-detail-floral-print-shift-dress/4472662?origin=category-personalizedsort&fashioncolor=DARK%20TEAL%20BROWN",
    "price": 52
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/19/_13232339.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13232339,
    "title": "Contrast Flap Faux Leather Crossbody Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-contrast-flap-faux-leather-crossbody-bag/4457602?origin=category-personalizedsort&fashioncolor=BLACK%20SNAKE",
    "price": 40
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/14/_13232354.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13232354,
    "title": "Faux Leather Pocket Tote",
    "itemType": "Tote",
    "link": "http://shop.nordstrom.com/s/street-level-faux-leather-pocket-tote/4457601?origin=category-personalizedsort&fashioncolor=GREY",
    "price": 48
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/6/_13235366.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13235366,
    "title": "Faux Leather Envelope Bucket Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-faux-leather-envelope-bucket-bag/4457682?origin=category-personalizedsort&fashioncolor=BLACK",
    "price": 39
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/1/_13255621.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13255621,
    "title": "Faux Leather Crossbody Mini Tote & Wristlet",
    "itemType": "Wristlet",
    "link": "http://shop.nordstrom.com/s/street-level-faux-leather-crossbody-mini-tote-wristlet/3962467?origin=category-personalizedsort&fashioncolor=BURGUNDY",
    "price": 44
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/2/_13280922.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13280922,
    "title": "Reversible Faux Leather Tote & Wristlet",
    "itemType": "Wristlet",
    "link": "http://shop.nordstrom.com/s/street-level-reversible-faux-leather-tote-wristlet/3559375?origin=category-personalizedsort&fashioncolor=GREY%2F%20IVORY",
    "price": 48
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/2/_13289482.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13289482,
    "title": "Reversible Faux Leather Tote",
    "itemType": "Tote",
    "link": "http://shop.nordstrom.com/s/street-level-reversible-faux-leather-tote/4165345?origin=category-personalizedsort&fashioncolor=GREY%2F%20CHARCOAL",
    "price": 44
  },
  {
    "brand": "Everly",
    "itemCategory": "Dresses",
    "imageURL": "http://testn.imgix.net/Zoom/0/_13323440.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13323440,
    "title": "Cold Shoulder Shift Dress",
    "itemType": "Dress",
    "link": "http://shop.nordstrom.com/s/everly-cold-shoulder-shift-dress/4472660?origin=category-personalizedsort&fashioncolor=BLACK",
    "price": 49
  },
  {
    "brand": "Everly",
    "itemCategory": "Dresses",
    "imageURL": "http://testn.imgix.net/Zoom/0/_13358940.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13358940,
    "title": "Tie Front Knit Midi Dress",
    "itemType": "Dress",
    "link": "http://shop.nordstrom.com/s/everly-tie-front-knit-midi-dress/4477449?origin=category-personalizedsort&fashioncolor=BURGUNDY",
    "price": 48
  },
  {
    "brand": "Street Level",
    "itemCategory": "Accessories",
    "imageURL": "http://testn.imgix.net/Zoom/2/_13378122.jpg?fit=fill&bg=FFF&fm=jpg&q=60&w=860&h=1318",
    "productCode": 13378122,
    "title": "Faux Leather Bucket Bag",
    "itemType": "Bag",
    "link": "http://shop.nordstrom.com/s/street-level-faux-leather-bucket-bag/4492847?origin=category-personalizedsort&fashioncolor=TAN",
    "price": 72
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/P1975_SWD_BLK_Front.jpg?v=1408129899",
    "productCode": 1408129899,
    "title": "Women's Suede leggings",
    "itemType": "leggings",
    "link": "https://shop.lailajayde.com/collections/bottoms/products/womens-suede-leggings",
    "price": 85
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/P2403_SWD_Front_1360x2040.jpg?v=1408130090",
    "productCode": 1408130090,
    "title": "Women's Suede Draw String Track Pant",
    "itemType": "Pant",
    "link": "https://shop.lailajayde.com/collections/bottoms/products/womans-suede-draw-string-track-pant",
    "price": 78
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Sweaters",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/C2332-SJQ-front.jpg?v=1408408178",
    "productCode": 1408408178,
    "title": "Drapey Cardy",
    "itemType": "Cardy",
    "link": "https://shop.lailajayde.com/collections/cardigans/products/drapey-laila-jayde-cardy",
    "price": 93
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2343_MMS_MDT_Front.jpg?v=1410812044",
    "productCode": 1410812044,
    "title": "Women's Scoop Neck 3/4 Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/womens-scoop-neck-3-4-sleeve",
    "price": 88
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D2517-NGB-BLACK-HONEY-front.jpg?v=1418153094",
    "productCode": 1418153094,
    "title": "Beehive Mesh Yoke Dress",
    "itemType": "Dress",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/beehive-mesh-yoke-dress",
    "price": 170
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/P2495-SWD-CCO-FRONT.jpg?v=1418164668",
    "productCode": 1418164668,
    "title": "Skinny Pant",
    "itemType": "Pant",
    "link": "https://shop.lailajayde.com/collections/bottoms/products/skinny-pant",
    "price": 85
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2536-RWAF-DEEP-CHERRYfront.jpg?v=1418174548",
    "productCode": 1418174548,
    "title": "Off Shoulder Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/off-shoulder-long-sleeve",
    "price": 85
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2617_RPRJ_Taupe-_Front.jpg?v=1429053639",
    "productCode": 1429053639,
    "title": "Side Illusion Tank",
    "itemType": "Tank",
    "link": "https://shop.lailajayde.com/collections/tops/products/side-illusion-tank",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2307_KJB_BLK_Front.jpg?v=1430255218",
    "productCode": 1430255218,
    "title": "Suede Front Pullover",
    "itemType": "Pullover",
    "link": "https://shop.lailajayde.com/collections/tops/products/suede-front-pullover",
    "price": 95
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Accessories",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W1438-I69.png?v=1433785215",
    "productCode": 1433785215,
    "title": "Infinity Scarf",
    "itemType": "Scarf",
    "link": "http://www.myloveappella.com/collections/all/products/infinity-scarf-3",
    "price": 19
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Accessories",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W1438-J03_BROWN_OATMEAL.png?v=1433786383",
    "productCode": 1433786383,
    "title": "Infinity Scarf",
    "itemType": "Scarf",
    "link": "http://www.myloveappella.com/collections/all/products/infinity-scarf-8",
    "price": 19
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Sweaters",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/C2653_LGSS_Bleu_Front_2_copy.jpg?v=1435260261",
    "productCode": 1435260261,
    "title": "Stripe Knit Sheer Kimono",
    "itemType": "Kimono",
    "link": "https://shop.lailajayde.com/collections/cardigans/products/drape-front-sheer-kimono",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/S2240HRSFront.jpg?v=1436898617",
    "productCode": 1436898617,
    "title": "Fiji Water Side Slit Skirt",
    "itemType": "Skirt",
    "link": "https://shop.lailajayde.com/collections/skirts/products/s2240-hrs-fiji-water",
    "price": 110
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2834STPR-_GRW-_Front.jpg?v=1442603739",
    "productCode": 1442603739,
    "title": "Short Sleeve Tee with Ladder Trim",
    "itemType": "Trim",
    "link": "https://shop.lailajayde.com/collections/tops/products/s-s-tee-w-ladder-trim",
    "price": 78
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2887CMSS-Front.jpg?v=1442877468",
    "productCode": 1442877468,
    "title": "French Terry Long Sleeve Cowl Neck",
    "itemType": "Neck",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-long-sleeve-flared-tunic",
    "price": 115
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2886CMSS-Front.jpg?v=1442878066",
    "productCode": 1442878066,
    "title": "French Terry Pointed Hem V-Neck Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-long-sleeve-cowl-neck",
    "price": 108
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2884CMSS-Front2_b93034f3-c3f2-4139-a992-f8ac2ef80fa2.jpg?v=1442878795",
    "productCode": 1442878795,
    "title": "French Terry Pleat Back 3/4 Sleeve Raglan",
    "itemType": "Raglan",
    "link": "https://shop.lailajayde.com/collections/tops/products/pleat-back-3-4-sleeve-raglan",
    "price": 105
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2885CMSS-Front2.jpg?v=1442878833",
    "productCode": 1442878833,
    "title": "French Terry Long Sleeve Flared Tunic",
    "itemType": "Tunic",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-pleat-back-3-4-sleeve-raglan",
    "price": 105
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2851RWJ-SMR-front.jpg?v=1443474506",
    "productCode": 1443474506,
    "title": "Layered Tank",
    "itemType": "Tank",
    "link": "https://shop.lailajayde.com/collections/tops/products/tank",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3071RWAF-WNE-Front.jpg?v=1447458107",
    "productCode": 1447458107,
    "title": "Henley Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/brienne-henley-long-sleeve",
    "price": 100
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3048RWAF-WNE-Front.jpg?v=1447463493",
    "productCode": 1447463493,
    "title": "High Low Hem w/ Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/missandei-hi-low-long-sleeve",
    "price": 95
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2182RSR-WNE-Front.jpg?v=1449265933",
    "productCode": 1449265933,
    "title": "Long Sleeve Raglan",
    "itemType": "Raglan",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-myrcella-cocoon-cardi-1",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bodysuits",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/O3064CMSS-BLK-Front.jpg?v=1449267768",
    "productCode": 1449267768,
    "title": "French Terry Jumpsuit",
    "itemType": "Jumpsuit",
    "link": "https://shop.lailajayde.com/collections/jumpsuits/products/for-the-watch-jumpsuit",
    "price": 125
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3037CMSS-BLK-Front.jpg?v=1449268933",
    "productCode": 1449268933,
    "title": "French Terry 3/4 Sleeve Dress with Back Zipper",
    "itemType": "Zipper",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/gilly-3-4-sleeve-dress-w-zip",
    "price": 110
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3060CMSS-BLK-Front.jpg?v=1449276656",
    "productCode": 1449276656,
    "title": "French Terry Long Sleeve Pullover",
    "itemType": "Pullover",
    "link": "https://shop.lailajayde.com/collections/tops/products/jon-snow-long-sleeve-pullover",
    "price": 95
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Outerwear",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/J3074CMSS-BLK-Front.jpg?v=1449278583",
    "productCode": 1449278583,
    "title": "French Terry Side Zip Jacket",
    "itemType": "Jacket",
    "link": "https://shop.lailajayde.com/collections/jackets/products/castle-black-side-zip-jacket",
    "price": 120
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Outerwear",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/J3015TTRTTR-CHR-Front.jpg?v=1449517701",
    "productCode": 1449517701,
    "title": "Long Hoodie",
    "itemType": "Hoodie",
    "link": "https://shop.lailajayde.com/collections/jackets/products/bolton-long-hoodie",
    "price": 108
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Outerwear",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/J3061TTR-CHR-Front.jpg?v=1449517858",
    "productCode": 1449517858,
    "title": "Cropped Hoodie",
    "itemType": "Hoodie",
    "link": "https://shop.lailajayde.com/collections/jackets/products/catelyn-cropped-hoodie",
    "price": 102
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3027RWVS-BLK-Front.jpg?v=1449526544",
    "productCode": 1449526544,
    "title": "Sleeveless Shirt-tail hem Dress",
    "itemType": "Dress",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/khaleesi-sleeveless-dress",
    "price": 125
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3069RWVS-GDC-Front.jpg?v=1449526712",
    "productCode": 1449526712,
    "title": "Funnel Neck Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/arya-funnel-neck-long-sleeve",
    "price": 95
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D2984RWVS-NVY-Front.jpg?v=1449527166",
    "productCode": 1449527166,
    "title": "Long Sleeve Fitted Dress",
    "itemType": "Dress",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/dragon-long-sleeve-dress",
    "price": 115
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/P2699-INT-BLK-FRONT_a47b6a7c-7e9c-465c-a690-42ba5681f80f.jpg?v=1458852978",
    "productCode": 1458852978,
    "title": "Jogger",
    "itemType": "Jogger",
    "link": "https://shop.lailajayde.com/collections/bottoms/products/jogger",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/P3010CMSS-BLK-Front.jpg?v=1459037677",
    "productCode": 1459037677,
    "title": "French Terry Jogger Pants",
    "itemType": "Pants",
    "link": "https://shop.lailajayde.com/collections/bottoms/products/guards-jogger",
    "price": 90
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Outerwear",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2591BOT-_Nebula-Front.jpg?v=1459038000",
    "productCode": 1459038000,
    "title": "Yogi Hoodie",
    "itemType": "Hoodie",
    "link": "https://shop.lailajayde.com/collections/jackets/products/yogi-hoodie",
    "price": 140
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2868HLGJS-Black-Camel-front_copy.jpg?v=1459181269",
    "productCode": 1459181269,
    "title": "Scoop Neck Long Sleeve with Suede",
    "itemType": "Suede",
    "link": "https://shop.lailajayde.com/collections/tops/products/scoop-neck-long-sleeve-with-suede",
    "price": 90
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D2927RSKK-Grey-Mauve-Front2.jpg?v=1459265720",
    "productCode": 1459265720,
    "title": "Swing Tank Dress",
    "itemType": "Dress",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/swing-tank-dress",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3030RSR_Jet.jpg?v=1459269245",
    "productCode": 1459269245,
    "title": "Dolman in Ribbed Jersey Knit",
    "itemType": "Knit",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-myrcella-cocoon-cardi",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/S2485SWD_blk.jpg?v=1459270710",
    "productCode": 1459270710,
    "title": "Curved Side Slit Long Skirt",
    "itemType": "Skirt",
    "link": "https://shop.lailajayde.com/collections/skirts/products/curved-side-slit-long-skirt",
    "price": 86
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2835STPR-_GSA-_Front.jpg?v=1459440097",
    "productCode": 1459440097,
    "title": "Dolman with Back Yoke",
    "itemType": "Yoke",
    "link": "https://shop.lailajayde.com/collections/tops/products/dolman-w-back-yoke",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2729HLGJS.jpg?v=1459894826",
    "productCode": 1459894826,
    "title": "Long Sleeve Jersey Knit Top W/ Key Hole At Back",
    "itemType": "Back",
    "link": "https://shop.lailajayde.com/collections/tops/products/long-sleeve-jersey-knit-top-w-key-hole-at-back",
    "price": 88
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3072RWAF-DKD-Front.jpg?v=1460854913",
    "productCode": 1460854913,
    "title": "Long Sleeve Top With Pockets",
    "itemType": "Pockets",
    "link": "https://shop.lailajayde.com/collections/tops/products/tyrion-long-sleeve-top",
    "price": 95
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2182RSR-DKD-Front.jpg?v=1460855310",
    "productCode": 1460855310,
    "title": "1/2 Sleeve Fitted Top",
    "itemType": "Top",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-margaery-dolman",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3054RSR-BLK-Front_b8a8646b-0fc9-4366-9d0c-35086b9e6e8a.jpg?v=1460855442",
    "productCode": 1460855442,
    "title": "3/4 Sleeve Maxi Dress",
    "itemType": "Dress",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/cersei-3-4-sleeve-maxi-dress",
    "price": 105
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Sweaters",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/C2989RWAF-WNE-Front.jpg?v=1460855509",
    "productCode": 1460855509,
    "title": "Hooded Drape Cardi w/Pockets",
    "itemType": "w/Pockets",
    "link": "https://shop.lailajayde.com/collections/cardigans/products/melisandre-drape-cardi",
    "price": 110
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3276TBJ_Salvia.jpg?v=1461803592",
    "productCode": 1461803592,
    "title": "Sleeveless V-Neck",
    "itemType": "V-Neck",
    "link": "https://shop.lailajayde.com/collections/tops/products/sleevless-v-neck",
    "price": 60
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3254TBJ_Charcoal.jpg?v=1461803639",
    "productCode": 1461803639,
    "title": "Tank Top W/ High-Low Hem",
    "itemType": "Hem",
    "link": "https://shop.lailajayde.com/collections/tops/products/tank-top-w-high-low-hem",
    "price": 55
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3084TBJ_Cactus.jpg?v=1461804014",
    "productCode": 1461804014,
    "title": "Rolled Sleeve V-Neck Tee",
    "itemType": "Tee",
    "link": "https://shop.lailajayde.com/collections/tops/products/rolled-sleeve-v-neck-tee",
    "price": 70
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3066MVS-CMO-Front.jpg?v=1462152375",
    "productCode": 1462152375,
    "title": "Double Layered 3/4 Sleeve Tunic",
    "itemType": "Tunic",
    "link": "https://shop.lailajayde.com/collections/tops/products/isosceles-3-4-sleeve-tunic",
    "price": 95
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2342RWVS-RDC-Front.jpg?v=1462154912",
    "productCode": 1462154912,
    "title": "Highland V-Neck Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/highland-v-neck-long-sleeve",
    "price": 95
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2661-ORS-_Oatmeal-Front_60f578aa-77eb-46fe-8503-03d339ac9814.jpg?v=1462204393",
    "productCode": 1462204393,
    "title": "Banded Neck Shirt-Tail in Heather Oatmeal",
    "itemType": "Oatmeal",
    "link": "https://shop.lailajayde.com/collections/tops/products/banded-neck-shirt-tail-more-colors-available",
    "price": 65
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2661-RS-_Storm-Front_makeover.jpg?v=1462211784",
    "productCode": 1462211784,
    "title": "Banded Neck Shirt-Tail In Rayon Spandex",
    "itemType": "Spandex",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-banded-neck-shirt-tail",
    "price": 65
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2598MMS_Dafodile.jpg?v=1462221283",
    "productCode": 1462221283,
    "title": "Scoop Neck Shell In Micro Modal Spandex",
    "itemType": "Spandex",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-scoop-neck-shell-in-rayon-spandex-more-colors-available",
    "price": 60
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2600HRS_Oatmeal_Heather.jpg?v=1462293480",
    "productCode": 1462293480,
    "title": "Bateau Neck Off-Shoulder Oatmeal Heather",
    "itemType": "Heather",
    "link": "https://shop.lailajayde.com/collections/tops/products/bateau-neck-off-shoulder-oatmeal-heather",
    "price": 65
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2882CLH-Regal_-makeover.jpg?v=1462400319",
    "productCode": 1462400319,
    "title": "3/4 Sleeve Dolman W/ Neckband & Waistband",
    "itemType": "Waistband",
    "link": "https://shop.lailajayde.com/collections/tops/products/dolman",
    "price": 70
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Outerwear",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/J2528-NGB-BLACK-HONEY-Front_2.jpg?v=1462898311",
    "productCode": 1462898311,
    "title": "Hoody Vest",
    "itemType": "Vest",
    "link": "https://shop.lailajayde.com/collections/jackets/products/hoody-vest",
    "price": 138
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/S2212_RPL_Front_bd07946a-edbc-4499-8dae-e18dbfc4dd28.jpg?v=1462900019",
    "productCode": 1462900019,
    "title": "Long Straight Skirt",
    "itemType": "Skirt",
    "link": "https://shop.lailajayde.com/collections/skirts/products/long-straight-skirt-1",
    "price": 93
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3259SFTM_Dk_Grey.jpg?v=1463617871",
    "productCode": 1463617871,
    "title": "3/4 Sleeve Top with Grommets laced Up At Side",
    "itemType": "Side",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-sleeveless-top-with-grommets-laced-up",
    "price": 112
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Sweaters",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/C2990RSR-JET-Front.jpg?v=1464197012",
    "productCode": 1464197012,
    "title": "Cocoon Cardi",
    "itemType": "Cardi",
    "link": "https://shop.lailajayde.com/collections/cardigans/products/copy-of-tyrion-long-sleeve-top",
    "price": 105
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/S2212_STR_Front.jpg?v=1464394253",
    "productCode": 1464394253,
    "title": "Long Straight Skirt",
    "itemType": "Skirt",
    "link": "https://shop.lailajayde.com/collections/skirts/products/long-straight-skirt",
    "price": 93
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2342_MMS_CAB_Front.jpg?v=1464395782",
    "productCode": 1464395782,
    "title": "Women's V-Neck Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/womens-v-neck-long-sleeve",
    "price": 88
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2352_MMS_PIN_Front.jpg?v=1464712503",
    "productCode": 1464712503,
    "title": "Women's Basic Cap Sleeve Tee",
    "itemType": "Tee",
    "link": "https://shop.lailajayde.com/collections/tops/products/womens-basic-cap-sleeve-tee",
    "price": 88
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2433_CLH-_DSW-makeover.jpg?v=1464715147",
    "productCode": 1464715147,
    "title": "3/4 Sleeve Dolman W/ Center Front Seam Detail",
    "itemType": "Detail",
    "link": "https://shop.lailajayde.com/collections/tops/products/dolman-sleeve-top-with-center-front-seam",
    "price": 70
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2533-NGB-Black-Honey-front.jpg?v=1464715592",
    "productCode": 1464715592,
    "title": "Twin Zipper Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/twin-zipper-long-sleeve",
    "price": 98
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2553-RWAF-Dark_Teal-FRONT_2.jpg?v=1464716269",
    "productCode": 1464716269,
    "title": "V-Neck Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/v-neck-long-sleeve",
    "price": 85
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2592BOT-_Stardust-Front.jpg?v=1464716946",
    "productCode": 1464716946,
    "title": "Asymmetrical Zip Long Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/asymmetrical-zip-long-sleeve",
    "price": 110
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2601_limoncello_blue_makeover_copy.jpg?v=1464718159",
    "productCode": 1464718159,
    "title": "Scoop Neck Boyfriend Dress Modal Spandex",
    "itemType": "Spandex",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-scoop-neck-boyfriend-dress-micro-modal-spandex-more-colors-available",
    "price": 63
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2806MVS-_Iris_-makeover.jpg?v=1464722620",
    "productCode": 1464722620,
    "title": "3/4 Sleeve Side Drape Tunic",
    "itemType": "Tunic",
    "link": "https://shop.lailajayde.com/collections/tops/products/3-4-sleeve-side-drape-tunic",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2966MVS-MUL-Front.jpg?v=1464730159",
    "productCode": 1464730159,
    "title": "Sleeveless High Low Eclipse Top",
    "itemType": "Top",
    "link": "https://shop.lailajayde.com/collections/tops/products/sleeveless-high-low-eclipse-top",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3258SFTM_Beige.jpg?v=1464741185",
    "productCode": 1464741185,
    "title": "Shirt Dress With Laced Up Front Neck",
    "itemType": "Neck",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/shirt-dress-with-laced-up-front-neck-more-colors-available",
    "price": 110
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bodysuits",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/O3238SFTM_Dk_Grey.jpg?v=1464741651",
    "productCode": 1464741651,
    "title": "Short Sleeve Romper",
    "itemType": "Romper",
    "link": "https://shop.lailajayde.com/collections/jumpsuits/products/short-sleeve-romper-more-colors-available",
    "price": 110
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bodysuits",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/O3239SFTM_Light_Grey_F.jpg?v=1464741697",
    "productCode": 1464741697,
    "title": "Sleeveless Jumpsuit",
    "itemType": "Jumpsuit",
    "link": "https://shop.lailajayde.com/collections/jumpsuits/products/sleeveless-jumpsuit-more-colors-available",
    "price": 120
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3139RSPP_NAV.jpg?v=1465487414",
    "productCode": 1465487414,
    "title": "Short Sleeve Tee With Bib Hem",
    "itemType": "Hem",
    "link": "https://shop.lailajayde.com/collections/tops/products/short-sleeve-tee-with-bib-hem-more-colors-available",
    "price": 85
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3181RSSP_BLK.jpg?v=1465487815",
    "productCode": 1465487815,
    "title": "Long Sleeve Tee With Bib Hem",
    "itemType": "Hem",
    "link": "https://shop.lailajayde.com/collections/tops/products/long-sleeve-tee-with-bib-hem",
    "price": 88
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3251RSPP_NAV_2.jpg?v=1465489285",
    "productCode": 1465489285,
    "title": "Stripe Tank Dress",
    "itemType": "Dress",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/copy-of-mock-neck-swing-dress-more-colors-available",
    "price": 90
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3124RSPP-001-Black.jpg?v=1465489445",
    "productCode": 1465489445,
    "title": "Stripe Mock Neck Swing Dress",
    "itemType": "Dress",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/mock-neck-swing-dress-more-colors-available",
    "price": 90
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3252RSPP_NAVY_2.jpg?v=1465489557",
    "productCode": 1465489557,
    "title": "Stripe 3/4 Sleeve Dress",
    "itemType": "Dress",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/stripe-3-4-sleeve-dress-more-colors-available",
    "price": 98
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6037-K26.JPG?v=1465601789",
    "productCode": 1465601789,
    "title": "3/4 Sleeve Fit and Flare Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/3-4-sleeve-fit-and-flare",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6145-J48_7641a3d1-4142-441c-a2de-139c2fbaad72.JPG?v=1465601860",
    "productCode": 1465601860,
    "title": "Asymetrical Mini Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/asymetrical-mini",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6119-M06_SD.JPG?v=1465602036",
    "productCode": 1465602036,
    "title": "Button Drawstring Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/button-drawstring-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Tops",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W5135-G42_SD.JPG?v=1465602086",
    "productCode": 1465602086,
    "title": "Crossfront Tank",
    "itemType": "Tank",
    "link": "http://www.myloveappella.com/collections/all/products/crossfront-tank",
    "price": 48
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2844-TCR.JPG?v=1465602142",
    "productCode": 1465602142,
    "title": "Deep V-Kimono Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/dress-deep-v-kimono-dress",
    "price": 58
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2831-TZD.JPG?v=1465602197",
    "productCode": 1465602197,
    "title": "Drape Front Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/drape-front-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2831-TLB.JPG?v=1465602263",
    "productCode": 1465602263,
    "title": "Drape Front Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/drape-front-dress-1",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6414-N67.JPG?v=1465602345",
    "productCode": 1465602345,
    "title": "Drawstring Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/drawstring-dress",
    "price": 58
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Bottoms",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W4398-G07.JPG?v=1465602503",
    "productCode": 1465602503,
    "title": "Flare Maxi Skirt",
    "itemType": "Skirt",
    "link": "http://www.myloveappella.com/collections/all/products/flare-maxi-skirt-1",
    "price": 48
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6120-M09.JPG?v=1465602546",
    "productCode": 1465602546,
    "title": "Funnel Neck Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/funnel-neck-dress",
    "price": 58
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Sweaters",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W3233-N99_OLIVE.JPG?v=1465602595",
    "productCode": 1465602595,
    "title": "Funnel Neck Sweater",
    "itemType": "Sweater",
    "link": "http://www.myloveappella.com/collections/all/products/funnel-neck-sweater",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6084-SMO_red.JPG?v=1465602785",
    "productCode": 1465602785,
    "title": "Keyhole Tulip Wrap Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/keyhole-tulip-wrap-dress",
    "price": 58
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Bottoms",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W4483-_G49.JPG?v=1465603260",
    "productCode": 1465603260,
    "title": "Maxi Flared Skirt",
    "itemType": "Skirt",
    "link": "http://www.myloveappella.com/collections/all/products/maxi-flared-skirt",
    "price": 48
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2195-TDI.JPG?v=1465603414",
    "productCode": 1465603414,
    "title": "Maxi Halter Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/maxi-halter-dress",
    "price": 88
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2470-TLT_353994dc-d210-443d-84f4-e9e781b183da.JPG?v=1465603593",
    "productCode": 1465603593,
    "title": "Maxi Tank Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/maxi-tank-maxi-dress",
    "price": 88
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Bottoms",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W4464-G31.JPG?v=1465603724",
    "productCode": 1465603724,
    "title": "Mini Swing Skirt",
    "itemType": "Skirt",
    "link": "http://www.myloveappella.com/collections/all/products/mini-swing-skirt",
    "price": 38
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Bottoms",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W4464-G43.JPG?v=1465604316",
    "productCode": 1465604316,
    "title": "Mini Swing Skirt",
    "itemType": "Skirt",
    "link": "http://www.myloveappella.com/collections/all/products/mini-swing-skirt-2",
    "price": 38
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2537-TLT_BLK.JPG?v=1465604384",
    "productCode": 1465604384,
    "title": "Pleated Day Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/dress-pleated-day-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2330-TBS_SD.JPG?v=1465604508",
    "productCode": 1465604508,
    "title": "Racer Back Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/racer-back-dress",
    "price": 58
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Tops",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W9696-_TLT_562cd19f-ae0b-4675-9e7c-2da9c8d043ba.JPG?v=1465604559",
    "productCode": 1465604559,
    "title": "Racerback Tank",
    "itemType": "Tank",
    "link": "http://www.myloveappella.com/collections/all/products/racerback-tank",
    "price": 48
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2848-_TCD.JPG?v=1465606358",
    "productCode": 1465606358,
    "title": "Spaghetti Maxi Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/spaghetti-maxi-dress",
    "price": 88
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2857-TZD_BLUE.JPG?v=1465606461",
    "productCode": 1465606461,
    "title": "Strapless Tulip Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/strapless-tulip-dress",
    "price": 78
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Tops",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W9948-TLB.png?v=1465606643",
    "productCode": 1465606643,
    "title": "Tie Dye Tank",
    "itemType": "Tank",
    "link": "http://www.myloveappella.com/collections/all/products/tie-dye-tank-1",
    "price": 48
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Bottoms",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W4308-SMO.JPG?v=1465606751",
    "productCode": 1465606751,
    "title": "Slit Maxi Skirt",
    "itemType": "Skirt",
    "link": "http://www.myloveappella.com/collections/all/products/skirt-slit-maxi-skirt",
    "price": 48
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2797-TLB_TAUPE.JPG?v=1465607142",
    "productCode": 1465607142,
    "title": "Wide Strap Maxi Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/wide-strap-maxi-dress",
    "price": 88
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/P2471-PON-BLACK-front.jpg?v=1466186660",
    "productCode": 1466186660,
    "title": "Ponte Leggings",
    "itemType": "Leggings",
    "link": "https://shop.lailajayde.com/collections/bottoms/products/ponte-leggings",
    "price": 90
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3152CRP_b.jpg?v=1466449399",
    "productCode": 1466449399,
    "title": "Long Sleeve Sweater w/ Front Zippers",
    "itemType": "Sweater",
    "link": "https://shop.lailajayde.com/collections/tops/products/long-sleeve-sweater-w-front-zippers",
    "price": 84
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T1363MVS_f.jpg?v=1466450816",
    "productCode": 1466450816,
    "title": "Drapey Poncho",
    "itemType": "Poncho",
    "link": "https://shop.lailajayde.com/collections/tops/products/drapey-poncho",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3243SFTM_Beige_F.jpg?v=1466696081",
    "productCode": 1466696081,
    "title": "Short Sleeve Top with Grommets laced Up At Front Neck",
    "itemType": "Neck",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-3-4-sleeve-top-with-grommets-laced-up-at-side",
    "price": 105
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3257SFTM_Navy.jpg?v=1466696135",
    "productCode": 1466696135,
    "title": "Sleeveless Top with Grommets laced Up",
    "itemType": "Up",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-kangaroo-pocket-stripe-french-terry-top",
    "price": 100
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3242SFTM_Navy.jpg?v=1466696280",
    "productCode": 1466696280,
    "title": "Tunic Dress with Tie",
    "itemType": "Tie",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/tunic-dress-with-tie-more-colors-available",
    "price": 105
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3244SFTM_Navy_B.jpg?v=1466696458",
    "productCode": 1466696458,
    "title": "Kangaroo Pocket Stripe French Terry Top",
    "itemType": "Top",
    "link": "https://shop.lailajayde.com/collections/tops/products/kangaroo-pocket-stripe-french-terry-top",
    "price": 110
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6278-G234.JPG?v=1466726432",
    "productCode": 1466726432,
    "title": "Tulip Tee Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/tulip-tee-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6382-CBL_BK.JPG?v=1466727533",
    "productCode": 1466727533,
    "title": "Hi Low Colorblock Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/hi-low-colorblock-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6467-G98.JPG?v=1466730343",
    "productCode": 1466730343,
    "title": "Shoulder Cutout Tank Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/shoulder-cutout-tank-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6619-SMO_BLACK.JPG?v=1466731356",
    "productCode": 1466731356,
    "title": "Wrap Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/wrap-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2884-TCW_CHAMPAGNE.JPG?v=1466785345",
    "productCode": 1466785345,
    "title": "Hi Low 3/4 Sleeve Surplus Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/dress-hi-lo-3-4-sleeve-surplus-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6394-G45.JPG?v=1466789627",
    "productCode": 1466789627,
    "title": "Maxi Wrap Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/maxi-wrap-dress",
    "price": 78
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6142-SMO_3cc64925-1034-4d69-af8e-6f5278dae229.JPG?v=1466789711",
    "productCode": 1466789711,
    "title": "Faux Belt Tank Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/faux-belt-tank-dress",
    "price": 78
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6095-SMO.JPG?v=1466791266",
    "productCode": 1466791266,
    "title": "Scoop Neck Gathered Maxi",
    "itemType": "Maxi",
    "link": "http://www.myloveappella.com/collections/all/products/scoop",
    "price": 78
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3275SSRS-Raison-MAIN.png?v=1467746082",
    "productCode": 1467746082,
    "title": "Short Sleeve Pleat Front Top",
    "itemType": "Top",
    "link": "https://shop.lailajayde.com/collections/tops/products/short-sleeve-pleat-front-top",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3291SSRS-EGS-FRONT_ccc6d6ad-11b5-4540-8ce1-3cc6fa9e918b.png?v=1467752981",
    "productCode": 1467752981,
    "title": "Butterfly Keyhole Top",
    "itemType": "Top",
    "link": "https://shop.lailajayde.com/collections/tops/products/butterfly-keyhole-top",
    "price": 90
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/t3255-Main.png?v=1467761674",
    "productCode": 1467761674,
    "title": "Rolled Sleeve Boxy Tee",
    "itemType": "Tee",
    "link": "https://shop.lailajayde.com/collections/tops/products/rolled-sleeve-boxy-tee",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/t3268-blush-main.png?v=1467762336",
    "productCode": 1467762336,
    "title": "Muscle Tank High Low Hem",
    "itemType": "Hem",
    "link": "https://shop.lailajayde.com/collections/tops/products/muscle-tank-high-low-hem-more-colors-available",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/t3269ssrs-main.png?v=1467764169",
    "productCode": 1467764169,
    "title": "Open Back Short Sleeve Top",
    "itemType": "Top",
    "link": "https://shop.lailajayde.com/collections/tops/products/open-back-short-sleeve-top",
    "price": 80
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3270SSRS-MAIN.png?v=1467822392",
    "productCode": 1467822392,
    "title": "Lush Longsleeve W/ Pleated Back",
    "itemType": "Back",
    "link": "https://shop.lailajayde.com/collections/tops/products/lush-longsleeve-w-pleated-back",
    "price": 85
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2598RS_sandstone.jpg?v=1468274491",
    "productCode": 1468274491,
    "title": "Scoop Neck Shell In Rayon Spandex",
    "itemType": "Spandex",
    "link": "https://shop.lailajayde.com/collections/tops/products/scoop-neck-shell",
    "price": 60
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2598-MS-Hot_Pink-Side_makeover.jpg?v=1468274547",
    "productCode": 1468274547,
    "title": "Scoop Neck Shell In Modal Spandex",
    "itemType": "Spandex",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-scoop-neck-shell-in-rayon-spandex-more-colors-available-1",
    "price": 60
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2600RS_Haute_Coral.jpg?v=1468274864",
    "productCode": 1468274864,
    "title": "Bateau Neck Off-Shoulder Rayon/Spandex",
    "itemType": "Rayon/Spandex",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-bateau-neck-off-shoulder",
    "price": 65
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2661-RS-_Iris-Front.jpg?v=1468275189",
    "productCode": 1468275189,
    "title": "Banded Neck Shirt-Tail In Modal Spandex Iris",
    "itemType": "Iris",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-banded-neck-shirt-tail-more-colors-available-1",
    "price": 65
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2661HPRS_DCH_F.jpg?v=1468275267",
    "productCode": 1468275267,
    "title": "Banded Neck Shirt-Tail in Heather Greys",
    "itemType": "Greys",
    "link": "https://shop.lailajayde.com/collections/tops/products/copy-of-banded-neck-shirt-tail-more-colors-available",
    "price": 65
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2669-HPRS-DCH-_Front.jpg?v=1468275426",
    "productCode": 1468275426,
    "title": "Deep V-Neck Draped Shoulder Heather Jersey Dark Charcoal Heather",
    "itemType": "Heather",
    "link": "https://shop.lailajayde.com/collections/tops/products/deep-v-neck-draped-shoulder-heather-jersey-more-colors-available",
    "price": 65
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2788-MS-TZN-Side.jpg?v=1468275970",
    "productCode": 1468275970,
    "title": "V-Neck Banded T-Shirt Tanzanite",
    "itemType": "Tanzanite",
    "link": "https://shop.lailajayde.com/collections/tops/products/banded-neck-t-shirt-1",
    "price": 60
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Sweaters",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/DSC_0870.JPG?v=1468282212",
    "productCode": 1468282212,
    "title": "Lace Panel Sweater",
    "itemType": "Sweater",
    "link": "http://www.myloveappella.com/collections/all/products/lace-panel-sweater",
    "price": 58
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2711-G78_F_2.JPG?v=1468531015",
    "productCode": 1468531015,
    "title": "Racerback Tank Side Slit Maxi Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/racerback-tank-side-slit-maxi-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Bodysuits",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2813-SMO_F_3_ed919d43-5cd2-44a7-ba32-3efc4c05a408.JPG?v=1469216058",
    "productCode": 1469216058,
    "title": "Cross Over Romper",
    "itemType": "Romper",
    "link": "http://www.myloveappella.com/collections/all/products/cross-over-romper",
    "price": 58
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3414TBJ_Salvia.jpg?v=1470334333",
    "productCode": 1470334333,
    "title": "Tank Flare Dress W/ Pockets",
    "itemType": "Pockets",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/tank-flare-dress-w-pockets",
    "price": 75
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6060-G22_F.JPG?v=1470844606",
    "productCode": 1470844606,
    "title": "Crossfront Maxi Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/crossfront-romper-1",
    "price": 88
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6207-G313_F_2.JPG?v=1470850115",
    "productCode": 1470850115,
    "title": "T-Shirt Flare Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/t-shirt-flare-dress-1",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6207-G348.JPG?v=1470850442",
    "productCode": 1470850442,
    "title": "T-Shirt Flare Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/t-shirt-flare-dress-2",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6207-SMO_F.JPG?v=1470853665",
    "productCode": 1470853665,
    "title": "T-Shirt Flare Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/t-shirt-flare-dress-3",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6467-G81_F_2.JPG?v=1470854815",
    "productCode": 1470854815,
    "title": "Shoulder Slit Tank Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/shoulder-slit-tank-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6467-K44_F_2.JPG?v=1470855001",
    "productCode": 1470855001,
    "title": "Shoulder Slit Tank Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/shoulder-slit-tank-dress-1",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6560-G280_F_2.JPG?v=1470855691",
    "productCode": 1470855691,
    "title": "Cross-Back Tee Dress",
    "itemType": "Dress",
    "link": "http://www.myloveappella.com/collections/all/products/cross-back-tee-dress",
    "price": 68
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W6705-SMO_F.JPG?v=1471625754",
    "productCode": 1471625754,
    "title": "Halter Top Maxi",
    "itemType": "Maxi",
    "link": "http://www.myloveappella.com/collections/all/products/halter-top-maxi",
    "price": 78
  },
  {
    "brand": "Loveapella",
    "itemCategory": "Dresses",
    "imageURL": "http://cdn.shopify.com/s/files/1/0857/9892/products/W2743-_SMO.JPG?v=1471626472",
    "productCode": 1471626472,
    "title": "Cut-out Back Tie Maxi",
    "itemType": "Maxi",
    "link": "http://www.myloveappella.com/collections/all/products/cut-out-back-tie-maxi",
    "price": 0
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3182SWD-DarkElm.png?v=1473978356",
    "productCode": 1473978356,
    "title": "Long Sleeve Suede w/ Stitch Detail",
    "itemType": "Detail",
    "link": "https://shop.lailajayde.com/collections/tops/products/long-sleeve-suede-w-stitch-detail",
    "price": 85
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3144SWD-Slate.png?v=1473979003",
    "productCode": 1473979003,
    "title": "Suede Tee w/ Side Slits & Stitch Detail",
    "itemType": "Detail",
    "link": "https://shop.lailajayde.com/collections/tops/products/suede-tee-w-side-slits-stitch-detail",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3176SWD-Fawn-Front.png?v=1474043563",
    "productCode": 1474043563,
    "title": "Suede Tank w/ Stitch Detail",
    "itemType": "Detail",
    "link": "https://shop.lailajayde.com/collections/tops/products/suede-shift-dress-w-pockets",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Dresses",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/D3145SWD-Almond-Front.png?v=1474043671",
    "productCode": 1474043671,
    "title": "Suede Shift Dress W/ Pockets & Stitch Detail",
    "itemType": "Detail",
    "link": "https://shop.lailajayde.com/collections/designer-picks/products/suede-shift-dress-w-pockets-stitch-detail",
    "price": 90
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Sweaters",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/C3184SWD-Sable-Front.png?v=1474044248",
    "productCode": 1474044248,
    "title": "Suede Cardigan w/ Stitch Details",
    "itemType": "Details",
    "link": "https://shop.lailajayde.com/collections/cardigans/products/suede-cardigan-w-stitch-details",
    "price": 92.5
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2819MVS-MUL-Front.jpg?v=1474056865",
    "productCode": 1474056865,
    "title": "Asymmetrical Drape Tunic",
    "itemType": "Tunic",
    "link": "https://shop.lailajayde.com/collections/tops/products/asymmetrical-drape-tunic",
    "price": 73
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3290-BOR-Front.png?v=1474062575",
    "productCode": 1474062575,
    "title": "V-Neck Side Slit Sweater",
    "itemType": "Sweater",
    "link": "https://shop.lailajayde.com/collections/tops/products/v-neck-side-slit-sweater",
    "price": 100
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2788-BlACK-Front_92be4445-3fa2-4e38-843f-a6831f04195d.jpg?v=1474063786",
    "productCode": 1474063786,
    "title": "Suede V-Neck Banded T-Shirt",
    "itemType": "T-Shirt",
    "link": "https://shop.lailajayde.com/collections/tops/products/suede-v-neck-banded-t-shirt",
    "price": 52
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3067MVS-INI-Front.jpg?v=1474929384",
    "productCode": 1474929384,
    "title": "Equilateral 1/2 Sleeve Top",
    "itemType": "Top",
    "link": "https://shop.lailajayde.com/collections/tops/products/equilateral-1-2-sleeve-top",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2800MVS-MUL-Front.jpg?v=1474929587",
    "productCode": 1474929587,
    "title": "Double Layered Tank",
    "itemType": "Tank",
    "link": "https://shop.lailajayde.com/collections/tops/products/double-layered-tank",
    "price": 73
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3065MVS-CMO-Front.jpg?v=1474930383",
    "productCode": 1474930383,
    "title": "Double Layered Compass Top",
    "itemType": "Top",
    "link": "https://shop.lailajayde.com/collections/tops/products/double-layered-compass-top",
    "price": 75
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2669-MS-magenta-Front.jpg?v=1474932089",
    "productCode": 1474932089,
    "title": "Deep V-Neck Draped Shoulder Rayon Spandex",
    "itemType": "Spandex",
    "link": "https://shop.lailajayde.com/collections/tops/products/deep-v-neck-draped-shoulder",
    "price": 65
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T2601_carolina_blue_front_makeover.jpg?v=1474932151",
    "productCode": 1474932151,
    "title": "Scoop Neck Boyfriend Dress Micro Modal Spandex",
    "itemType": "Spandex",
    "link": "https://shop.lailajayde.com/collections/tops/products/scoop-neck-boyfriend-dress",
    "price": 63
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3335PTT-Charcoal-Front.png?v=1474996002",
    "productCode": 1474996002,
    "title": "Cap Sleeve",
    "itemType": "Sleeve",
    "link": "https://shop.lailajayde.com/collections/tops/products/cap-sleeve",
    "price": 88
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T3292PTT-Charcoal-Front.png?v=1474999848",
    "productCode": 1474999848,
    "title": "Long Sleeve Raglan",
    "itemType": "Raglan",
    "link": "https://shop.lailajayde.com/collections/tops/products/long-sleeve-raglan",
    "price": 98
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Sweaters",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/C3295PTT-Charcoal-Front.png?v=1475622678",
    "productCode": 1475622678,
    "title": "Waterfall Cardigan",
    "itemType": "Cardigan",
    "link": "https://shop.lailajayde.com/collections/cardigans/products/waterfall-cardigan-1",
    "price": 100
  },
  {
    "brand": "Laila Jade",
    "itemCategory": "Tops",
    "imageURL": "https://cdn.shopify.com/s/files/1/0379/5477/products/T1428-CLH-haute_coraly-FRONT_103fd826-b44f-4787-a8a0-b9ae0a5f965c.jpg?v=1476142680",
    "productCode": 1476142680,
    "title": "3/4 Sleeve Dolman",
    "itemType": "Dolman",
    "link": "https://shop.lailajayde.com/collections/tops/products/dolman-sleeve-top",
    "price": 70
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/need_to_make_bra_blank-2_960_copy.jpg?v=1476753917",
    "productCode": 1476753917,
    "title": "Passion Is Everything - The Anderson Legging",
    "itemType": "Legging",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/passion-is-everything-the-anderson-legging",
    "price": 82
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/unspecified-2_6f7b9fbf-141f-434d-aacf-4c5805e5ffa1.jpg?v=1476753932",
    "productCode": 1476753932,
    "title": "Run Faster - The Anderson Legging",
    "itemType": "Legging",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/run-faster-the-anderson-legging",
    "price": 82
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/need_to_make_bra_blank_3_960_copy.jpg?v=1476753936",
    "productCode": 1476753936,
    "title": "Better Than Yesterday - The Laurent Legging",
    "itemType": "Legging",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/better-than-yesterday-the-laurent",
    "price": 84
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/unspecified-2_4e671660-343a-4c87-a768-8e75fe919ebb.jpg?v=1476754051",
    "productCode": 1476754051,
    "title": "My Life Story - The Eleanor Lounge Pant",
    "itemType": "Pant",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/my-life-story-the-eleanor-pant",
    "price": 74
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/unspecified-2_fd6c9c80-97ce-439c-9f5d-daba5550784b.jpg?v=1476754526",
    "productCode": 1476754526,
    "title": "G Logo - The Sophia Short",
    "itemType": "Short",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/g-logo-the-sophia-short",
    "price": 60
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/GH-D2-042.jpg?v=1476754684",
    "productCode": 1476754684,
    "title": "Do Work - The Anderson Legging",
    "itemType": "Legging",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/inventory-do-work-the-anderson",
    "price": 82
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/blackprimrose.jpg?v=1476811590",
    "productCode": 1476811590,
    "title": "Best Things In Life Make You Sweaty - The Primrose Pant",
    "itemType": "Pant",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/best-things-in-life-make-you-sweaty-the-primrose-pant",
    "price": 72
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/giveup2.jpg?v=1476811751",
    "productCode": 1476811751,
    "title": "Give Up On Giving Up - The Primrose Pant",
    "itemType": "Pant",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/give-up-on-giving-up-the-primrose-pant",
    "price": 72
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/eleanorhello.jpg?v=1476811838",
    "productCode": 1476811838,
    "title": "Hello Weekend - The Eleanor Lounge Pant",
    "itemType": "Pant",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/hello-weekend-the-eleanor-pant",
    "price": 74
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/grey5.jpg?v=1476824529",
    "productCode": 1476824529,
    "title": "G Logo - The Kenzie Short",
    "itemType": "Short",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/g-logo-the-kenzie-short",
    "price": 59
  },
  {
    "brand": "good hYOUman",
    "itemCategory": "Bottoms",
    "imageURL": "https://cdn.shopify.com/s/files/1/0365/5261/products/legging1.jpg?v=1476824687",
    "productCode": 1476824687,
    "title": "Determination - The Laurent Legging",
    "itemType": "Legging",
    "link": "https://goodhyouman.com/collections/bottoms-women/products/determination-the-laurent-womens",
    "price": 84
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/d/ed12236-_3_.jpg",
    "productCode": "ed12236",
    "title": "Magic Shirt Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/ed12236.html",
    "price": 82
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12109-1-_3_.jpg",
    "productCode": "ej12109-1",
    "title": "Ali Peplum Jacket",
    "itemType": "Jacket",
    "link": "http://edensociety.com/ej12109-1.html",
    "price": 110
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12258-2-_1_.jpg",
    "productCode": "ej12258-2",
    "title": "Venia Jacket",
    "itemType": "Jacket",
    "link": "http://edensociety.com/ej12258-2.html",
    "price": 110
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12319-_4_.jpg",
    "productCode": "ej12319",
    "title": "Rimona Jacket",
    "itemType": "Jacket",
    "link": "http://edensociety.com/ej12319.html",
    "price": 110
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12352-_3_.jpg",
    "productCode": "ej12352",
    "title": "Raelin Trench Coat",
    "itemType": "Coat",
    "link": "http://edensociety.com/ej12352.html",
    "price": 115
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12363-_4_.jpg",
    "productCode": "ej12363",
    "title": "Ammey Vest",
    "itemType": "Vest",
    "link": "http://edensociety.com/ej12363.html",
    "price": 101
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12620-1-_3_.jpg",
    "productCode": "ej12620-1",
    "title": "Jakye Open Cardigan",
    "itemType": "Cardigan",
    "link": "http://edensociety.com/ej12620-1.html",
    "price": 124
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12621-_3_.jpg",
    "productCode": "ej12621",
    "title": "Juline Open Cardigan",
    "itemType": "Cardigan",
    "link": "http://edensociety.com/ej12621.html",
    "price": 93
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12640-1-_4_.jpg",
    "productCode": "ej12640-1",
    "title": "Eben Duster",
    "itemType": "Duster",
    "link": "http://edensociety.com/ej12640-1.html",
    "price": 82
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12640-2-_3_.jpg",
    "productCode": "ej12640-2",
    "title": "Eben Duster",
    "itemType": "Duster",
    "link": "http://edensociety.com/ej12640-2.html",
    "price": 82
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/j/ej12641-2-_1_.jpg",
    "productCode": "ej12641-2",
    "title": "Mila Open Cardigan",
    "itemType": "Cardigan",
    "link": "http://edensociety.com/ej12641-2.html",
    "price": 82
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/t/et12166-1-_1_.jpg",
    "productCode": "et12166-1",
    "title": "Joey Shirt Top",
    "itemType": "Top",
    "link": "http://edensociety.com/et12166-1.html",
    "price": 65
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/t/et12420-1-_1_.jpg",
    "productCode": "et12420-1",
    "title": "Constance Tunic Shirt",
    "itemType": "Shirt",
    "link": "http://edensociety.com/et12420-1.html",
    "price": 70
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/t/et12420-2-_4_.jpg",
    "productCode": "et12420-2",
    "title": "Constance Tunic Shirt",
    "itemType": "Shirt",
    "link": "http://edensociety.com/et12420-2.html",
    "price": 62
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/1/K12537_BLACK_T.jpg",
    "productCode": "K/1/K12537_BLACK_T",
    "title": "Elana Motocross Faux Leather Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/elana-motocross-faux-leather-jacket.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/1/K12537_WHITE_T_1.jpg",
    "productCode": "K/1/K12537_WHITE_T_1",
    "title": "Elana Motocross Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/elana-motocross-jacket.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/4/k42597_chocl_f_1_1.jpg",
    "productCode": "k/4/k42597_chocl_f_1_1",
    "title": "Lincoln Vegan Leather & Ponte Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/lincoln-vegan-leather-ponte-jacket-9458.html",
    "price": 88
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/4/K42597_NAVY_T_1.jpg",
    "productCode": "K/4/K42597_NAVY_T_1",
    "title": "Lincoln Vegan Leather & Ponte Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/lincoln-vegan-leather-ponte-jacket.html",
    "price": 88
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD13001_SEFOM_T.jpg",
    "productCode": "K/D/KD13001_SEFOM_T",
    "title": "Jersey Knit Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/jersey-knit-dress.html",
    "price": 88
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD17906_CRLNY_T.jpg",
    "productCode": "K/D/KD17906_CRLNY_T",
    "title": "Avy Knit Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/avy-knit-dress-9428.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD28702_SEFOM_T_1.jpg",
    "productCode": "K/D/KD28702_SEFOM_T_1",
    "title": "Mason Shirt Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/mason-shirt-dress-9353.html",
    "price": 118
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD31902_TLDOL_T.jpg",
    "productCode": "K/D/KD31902_TLDOL_T",
    "title": "Printed Shirt Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/printed-shirt-dress.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd39501_black_t.jpg",
    "productCode": "k/d/kd39501_black_t",
    "title": "Mock Raglan Lace Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/mock-raglan-lace-dress.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD39501_NAVY_TN.jpg",
    "productCode": "K/D/KD39501_NAVY_TN",
    "title": "Mock Raglan Lace Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/mock-raglan-lace-dress-11650.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd40801_black_t.jpg",
    "productCode": "k/d/kd40801_black_t",
    "title": "Raglan Sleeve Crepe Shift Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/raglan-sleeve-crepe-shift-dress.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd46101_nvylb_f_1.jpg",
    "productCode": "k/d/kd46101_nvylb_f_1",
    "title": "Bryce Jersey Sheath Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/bryce-jersey-sheath-dress.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD49703_PLUM_T.jpg",
    "productCode": "K/D/KD49703_PLUM_T",
    "title": "Asymetrical Shoulder Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/asymetrical-shoulder-dress.html",
    "price": 88
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD50101_IVYCL_T_1.jpg",
    "productCode": "K/D/KD50101_IVYCL_T_1",
    "title": "Printed Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/printed-dress-9681.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD50601_KHPNK_T.jpg",
    "productCode": "K/D/KD50601_KHPNK_T",
    "title": "Yoryu Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/yoryu-dress.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD51501_OXBLD_TN.jpg",
    "productCode": "K/D/KD51501_OXBLD_TN",
    "title": "Lace Shift Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/lace-shift-dress.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd53901_limbl_t.jpg",
    "productCode": "k/d/kd53901_limbl_t",
    "title": "Swing Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/swing-dress.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd55801_blue_f_1.jpg",
    "productCode": "k/d/kd55801_blue_f_1",
    "title": "Denim Halter Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/denim-halter-dress.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd56301_dkblu_t.jpg",
    "productCode": "k/d/kd56301_dkblu_t",
    "title": "Aubrey Chambray Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/aubrey-chambray-dress.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD60201_RSEWD_TN.jpg",
    "productCode": "K/D/KD60201_RSEWD_TN",
    "title": "Ella Shirt Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/ella-shirt-dress.html",
    "price": 88
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd60301_rsewd_f_1.jpg",
    "productCode": "k/d/kd60301_rsewd_f_1",
    "title": "Madison Peasant Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/madison-peasant-dress.html",
    "price": 88
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd62301_mdnte_t.jpg",
    "productCode": "k/d/kd62301_mdnte_t",
    "title": "Long Sleeve Pleated Waist Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/long-sleeve-pleated-waist-dress-featured-in-people-style-watch.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD62701_WINE_TN.jpg",
    "productCode": "K/D/KD62701_WINE_TN",
    "title": "Side Lace Up Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/side-lace-up-dress.html",
    "price": 118
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd63201_rebbk_f.jpg",
    "productCode": "k/d/kd63201_rebbk_f",
    "title": "Peasant Lace Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/peasant-lace-dress.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD63601_BLACK_T.jpg",
    "productCode": "K/D/KD63601_BLACK_T",
    "title": "Black Knit Sheath Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/black-knit-sheath-dress.html",
    "price": 128
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD63901_BLACK_TN.jpg",
    "productCode": "K/D/KD63901_BLACK_TN",
    "title": "Long Shirt Dress (Black)",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/long-shirt-dress-black.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd64001_mdnte_f.jpg",
    "productCode": "k/d/kd64001_mdnte_f",
    "title": "Mock Wrap Sheath Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/mock-wrap-sheath-dress.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD64801_GRNBK_T.jpg",
    "productCode": "K/D/KD64801_GRNBK_T",
    "title": "Smocked Neck & Sleeves Shift Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/smocked-neck-sleeves-shift-dress.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/d/kd64901_ivyrt_f.jpg",
    "productCode": "k/d/kd64901_ivyrt_f",
    "title": "Pintuck Shirt Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/pintuck-shirt-dress.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/D/KD71601_IVYBR_T.jpg",
    "productCode": "K/D/KD71601_IVYBR_T",
    "title": "Asymetrical Sheath Dress",
    "itemType": "Dress",
    "link": "http://www.kutfromthekloth.com/asymetrical-sheath-dress.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ13601_BLKWH_T.jpg",
    "productCode": "K/J/KJ13601_BLKWH_T",
    "title": "Quilted Leather Trim Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/brandon-quilted-leather-trim-jacket.html",
    "price": 128
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/j/kj15101_black_f.jpg",
    "productCode": "k/j/kj15101_black_f",
    "title": "Avery Vegan Leather Jacket Black",
    "itemType": "Black",
    "link": "http://www.kutfromthekloth.com/avery-vegan-leather-jacket-5327.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/j/kj19901_black_t.jpg",
    "productCode": "k/j/kj19901_black_t",
    "title": "Levi Ponte And Leather Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/levi-ponte-and-leather-jacket.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/j/kj19901p_black_f.jpg",
    "productCode": "k/j/kj19901p_black_f",
    "title": "Ana Vegan Leather Jacket - Petite",
    "itemType": "Petite",
    "link": "http://www.kutfromthekloth.com/ana-vegan-leather-jacket-petite.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/j/kj20001_black_t.jpg",
    "productCode": "k/j/kj20001_black_t",
    "title": "Cash Vegan Leather Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/cash-vegan-leather-jacket.html",
    "price": 128
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ21901_TAN_T_1.jpg",
    "productCode": "K/J/KJ21901_TAN_T_1",
    "title": "Aurelia Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/aurelia-jacket.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ23301_BUFF_T.jpg",
    "productCode": "K/J/KJ23301_BUFF_T",
    "title": "Alejandra Faux Suede Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/alejandra-faux-suede-jacket.html",
    "price": 128
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ23601_BROWN_TN.jpg",
    "productCode": "K/J/KJ23601_BROWN_TN",
    "title": "Abigail Suede Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/abigail-suede-jacket.html",
    "price": 148
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ23801_PURPL_T.jpg",
    "productCode": "K/J/KJ23801_PURPL_T",
    "title": "Esther Military Band Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/esther-military-band-jacket.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ24001_BRGDY_T.jpg",
    "productCode": "K/J/KJ24001_BRGDY_T",
    "title": "Aniya Faux Leather Moto Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/aniya-faux-leather-moto-jacket.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ24301_BERRY_T_1.jpg",
    "productCode": "K/J/KJ24301_BERRY_T_1",
    "title": "Georgia Faux Fur Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/georgia-faux-fur-jacket-exclusive.html",
    "price": 148
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ24601_PNKIV_T.jpg",
    "productCode": "K/J/KJ24601_PNKIV_T",
    "title": "Baylee Shearling Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/baylee-shearling-jacket.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ25301_GREY_TN.jpg",
    "productCode": "K/J/KJ25301_GREY_TN",
    "title": "Agatha Wool Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/agatha-wool-jacket-featured-in-instyle.html",
    "price": 108
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/j/kj618mb5_grtdd_t.jpg",
    "productCode": "k/j/kj618mb5_grtdd_t",
    "title": "Amelia Denim Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/amelia-denim-jacket-10649.html",
    "price": 79
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/j/kj618me3_ncltm_t_1.jpg",
    "productCode": "k/j/kj618me3_ncltm_t_1",
    "title": "Amelia Denim Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/amelia-denim-jacket-10646.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ618MF4_VTLYM_T.jpg",
    "productCode": "K/J/KJ618MF4_VTLYM_T",
    "title": "Amelia Denim Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/amelia-denim-jacket-10654.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ618MF8_BLACK_T.jpg",
    "productCode": "K/J/KJ618MF8_BLACK_T",
    "title": "Amelia Black Denim Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/amelia-black-denim-jacket.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/j/kj677ma2_coptm_t.jpg",
    "productCode": "k/j/kj677ma2_coptm_t",
    "title": "Amelia Denim Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/amelia-denim-jacket-10653.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/J/KJ677MA4_ZELSM_T_1.jpg",
    "productCode": "K/J/KJ677MA4_ZELSM_T_1",
    "title": "Candace Boyfriend Jacket",
    "itemType": "Jacket",
    "link": "http://www.kutfromthekloth.com/candace-boyfriend-jacket.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Dresses",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/k/kk0053ma4_pchym_t.jpg",
    "productCode": "k/k/kk0053ma4_pchym_t",
    "title": "Rosie Pencil Skirt",
    "itemType": "Skirt",
    "link": "http://www.kutfromthekloth.com/rosie-pencil-skirt.html",
    "price": 79
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP0003MA1_MDFYE_T.jpg",
    "productCode": "K/P/KP0003MA1_MDFYE_T",
    "title": "Mia Slim Fit Skinny (Modify Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/mia-slim-fit-skinny-modify-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP0126MA1_BLACK_T.jpg",
    "productCode": "K/P/KP0126MA1_BLACK_T",
    "title": "Brigitte Slim Fit Ankle Slits Skinny (Black)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/brigitte-slim-fit-ankle-slits-skinny-black.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP0128MA1_BLSTC_T.jpg",
    "productCode": "K/P/KP0128MA1_BLSTC_T",
    "title": "Mia Slim Fit Double Button Skinny (Balistic Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/mia-slim-fit-double-button-skinny-balistic-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP0159MA1_RFSHC_T.jpg",
    "productCode": "K/P/KP0159MA1_RFSHC_T",
    "title": "Reese Ankle Straight Leg (Refresh Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/reese-ankle-straight-leg-refresh-wash.html",
    "price": 94
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP0168MA1_MILDT_T.jpg",
    "productCode": "K/P/KP0168MA1_MILDT_T",
    "title": "Belle Ankle Flare (Mild Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/belle-ankle-flare-mild-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP0172MA1_SKLDD_T.jpg",
    "productCode": "K/P/KP0172MA1_SKLDD_T",
    "title": "Connie Slim Fit Ankle Skinny (Skilled Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/connie-slim-fit-ankle-skinny-skilled-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP164MO7_BLACK_T.jpg",
    "productCode": "K/P/KP164MO7_BLACK_T",
    "title": "Mia Slim Fit Skinny (Black)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/mia-slim-fit-skinny-black.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP164MP6_BROWN_T.jpg",
    "productCode": "K/P/KP164MP6_BROWN_T",
    "title": "Mia Faux Suede Slim Fit Skinny (Brown)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/mia-faux-suede-slim-fit-skinny-brown.html",
    "price": 94
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP258MD8_BLACK_T.jpg",
    "productCode": "K/P/KP258MD8_BLACK_T",
    "title": "Natalie High Rise Bootcut (Black)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/natalie-high-rise-bootcut-black-11480.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP398MC3_ACPLD_T.jpg",
    "productCode": "K/P/KP398MC3_ACPLD_T",
    "title": "Cameron Wide Cuff Straight Leg (Accomplish Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/cameron-wide-cuff-straight-leg-accomplish-wash.html",
    "price": 94
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/p/kp4880mf4_spfye_t_1.jpg",
    "productCode": "k/p/kp4880mf4_spfye_t_1",
    "title": "Catherine Boyfriend (Adaptability Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/catherine-boyfriend-adaptability-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP488MR7_MLOLV_T.jpg",
    "productCode": "K/P/KP488MR7_MLOLV_T",
    "title": "Diana Relaxed Fit Skinny (Military Olive)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/diana-relaxed-fit-knit-skinny.html",
    "price": 79
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP488MR9_BORDX_T.jpg",
    "productCode": "K/P/KP488MR9_BORDX_T",
    "title": "Diana Relaxed Fit Corduroy Skinny (Bordeaux)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/diana-relaxed-fit-corduroy-skinny-11779.html",
    "price": 69
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP488MR9_CLAY_T.jpg",
    "productCode": "K/P/KP488MR9_CLAY_T",
    "title": "Diana Corduroy Relaxed Fit Skinny (Clay)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/diana-corduroy-relaxed-fit-skinny-11220.html",
    "price": 69
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/p/kp488mr9_khaki_t_6.jpg",
    "productCode": "k/p/kp488mr9_khaki_t_6",
    "title": "Diana Corduroy Relaxed Fit Skinny, Petite (Khaki)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/diana-corduroy-relaxed-fit-skinny-petite-11214.html",
    "price": 69
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP494MP8_ASTND_T.jpg",
    "productCode": "K/P/KP494MP8_ASTND_T",
    "title": "Catherine Boyfriend (Astonished Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/catherine-boyfriend-astonished-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/p/kp494mp9_adbye_t.jpg",
    "productCode": "k/p/kp494mp9_adbye_t",
    "title": "Diana Relaxed Fit Skinny (Simplify Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/diana-relaxed-fit-skinny-simplify-wash.html",
    "price": 94
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/p/kp494mq4n_cfnse_f.jpg",
    "productCode": "k/p/kp494mq4n_cfnse_f",
    "title": "Catherine Boyfriend (Carefulness Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/catherine-boyfriend-carefulness-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP560MH1_CLFYE_T.jpg",
    "productCode": "K/P/KP560MH1_CLFYE_T",
    "title": "Stevie Straight Leg (Clarify Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/stevie-straight-leg-exclusive-clarify-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/p/kp651mb1_savrd_f_1.jpg",
    "productCode": "k/p/kp651mb1_savrd_f_1",
    "title": "Reese Ankle Straight Leg (Savour Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/reese-ankle-straight-leg-savour-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP697MK7_CHARM_T_1.jpg",
    "productCode": "K/P/KP697MK7_CHARM_T_1",
    "title": "Karen Baby Bootcut - Charm Wash",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/karen-baby-bootcut-charm-wash-exclusive.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/p/kp736ma7_white_f.jpg",
    "productCode": "k/p/kp736ma7_white_f",
    "title": "Natalie High Rise Bootcut",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/natalie-high-rise-bootcut-11506.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP784MC6_BLACK_T.jpg",
    "productCode": "K/P/KP784MC6_BLACK_T",
    "title": "Brigitte Faux Leather Ankle Skinny (Black)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/brigitte-faux-leather-ankle-skinny-black.html",
    "price": 79
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP784MC8_RMRKE_T.jpg",
    "productCode": "K/P/KP784MC8_RMRKE_T",
    "title": "Brigitte Ankle Skinny (Remark Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/brigitte-ankle-skinny-exclusive-remark-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/P/KP784MC9_OPMTM_T.jpg",
    "productCode": "K/P/KP784MC9_OPMTM_T",
    "title": "Brigitte Slim Fit Ankle Skinny (Optimist Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/brigitte-slim-fit-ankle-skinny-exclusive-optimist-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/p/kp897ma1_royle_f_1.jpg",
    "productCode": "k/p/kp897ma1_royle_f_1",
    "title": "Catherine Boyfriend (Royal Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/catherine-boyfriend-royal-wash.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/S/KS10801_GREY_T.jpg",
    "productCode": "K/S/KS10801_GREY_T",
    "title": "Page Chunky Sweater",
    "itemType": "Sweater",
    "link": "http://www.kutfromthekloth.com/page-chunky-sweater.html",
    "price": 98
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT0135MA1_BLACK_T.jpg",
    "productCode": "K/T/KT0135MA1_BLACK_T",
    "title": "Alexa Tencel Top",
    "itemType": "Top",
    "link": "http://www.kutfromthekloth.com/alexa-tencel-top.html",
    "price": 89
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT19703_BLACK_T.jpg",
    "productCode": "K/T/KT19703_BLACK_T",
    "title": "Mallory Knit Sweater",
    "itemType": "Sweater",
    "link": "http://www.kutfromthekloth.com/mallory-knit-sweater.html",
    "price": 68
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT32115_PINK_T.jpg",
    "productCode": "K/T/KT32115_PINK_T",
    "title": "Jasmine Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/jasmine-blouse-11050.html",
    "price": 68
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/t/kt32116_vnila_t.jpg",
    "productCode": "k/t/kt32116_vnila_t",
    "title": "Jasmine Flowy Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/jasmine-flowy-blouse.html",
    "price": 68
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT32117_EGGPL_T.jpg",
    "productCode": "K/T/KT32117_EGGPL_T",
    "title": "Jasmine Printed Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/jasmine-printed-blouse.html",
    "price": 68
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT32120_NVBGD_T.jpg",
    "productCode": "K/T/KT32120_NVBGD_T",
    "title": "Jasmine Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/jasmine-blouse-exclusive.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/t/kt41104_red_f_1.jpg",
    "productCode": "k/t/kt41104_red_f_1",
    "title": "Emma Top",
    "itemType": "Top",
    "link": "http://www.kutfromthekloth.com/emma-top-10521.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT50906_OVGRT_T.jpg",
    "productCode": "K/T/KT50906_OVGRT_T",
    "title": "Anson Crepe Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/anson-crepe-blouse-exclusive.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT57001_BLACK_T.jpg",
    "productCode": "K/T/KT57001_BLACK_T",
    "title": "Jerrica Side Drape Top",
    "itemType": "Top",
    "link": "http://www.kutfromthekloth.com/jerrica-side-drape-top.html",
    "price": 58
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT57101_BLACK_T.jpg",
    "productCode": "K/T/KT57101_BLACK_T",
    "title": "Samantha Lace Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/samantha-lace-blouse.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/t/kt57301_rsewd_f.jpg",
    "productCode": "k/t/kt57301_rsewd_f",
    "title": "Sophia Peasant Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/sophia-peasant-blouse.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT57601_BRWBL_T.jpg",
    "productCode": "K/T/KT57601_BRWBL_T",
    "title": "Aspen Sweatshirt",
    "itemType": "Sweatshirt",
    "link": "http://www.kutfromthekloth.com/aspen-sweatshirt.html",
    "price": 68
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT57801_BLACK_T.jpg",
    "productCode": "K/T/KT57801_BLACK_T",
    "title": "Makayla-L/S Hi-Low Top W/Scoop Neck",
    "itemType": "Neck",
    "link": "http://www.kutfromthekloth.com/makayla-l-s-hi-low-top-w-scoop-neck.html",
    "price": 68
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT58002_BLKCR_T.jpg",
    "productCode": "K/T/KT58002_BLKCR_T",
    "title": "Marlie Jersey Tee",
    "itemType": "Tee",
    "link": "http://www.kutfromthekloth.com/marlie-jersey-tee.html",
    "price": 58
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT58701_BORDX_T.jpg",
    "productCode": "K/T/KT58701_BORDX_T",
    "title": "Alyssa Crepe Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/alyssa-crepe-blouse.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/k/t/kt58802_blred_f_1.jpg",
    "productCode": "k/t/kt58802_blred_f_1",
    "title": "Kayla Down Top",
    "itemType": "Top",
    "link": "http://www.kutfromthekloth.com/kayla-down-top-10648.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT59101_BRICK_T.jpg",
    "productCode": "K/T/KT59101_BRICK_T",
    "title": "Natalie Knit Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/natalie-knit-blouse.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT59501_BRWBL_T.jpg",
    "productCode": "K/T/KT59501_BRWBL_T",
    "title": "Hailey Plaid Shirt",
    "itemType": "Shirt",
    "link": "http://www.kutfromthekloth.com/hailey-plaid-shirt.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT59601_BLACK_T.jpg",
    "productCode": "K/T/KT59601_BLACK_T",
    "title": "Isabel Wrap Front Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/isabel-wrap-front-blouse.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT60101_RSEWD_TN.jpg",
    "productCode": "K/T/KT60101_RSEWD_TN",
    "title": "Jillian Blouse",
    "itemType": "Blouse",
    "link": "http://www.kutfromthekloth.com/jillian-blouse.html",
    "price": 68
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT60501_RED_TN.jpg",
    "productCode": "K/T/KT60501_RED_TN",
    "title": "Audrey Sweater",
    "itemType": "Sweater",
    "link": "http://www.kutfromthekloth.com/audrey-sweater.html",
    "price": 68
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT61401_GRNWT_T.jpg",
    "productCode": "K/T/KT61401_GRNWT_T",
    "title": "Kazu Plaid Tunic",
    "itemType": "Tunic",
    "link": "http://www.kutfromthekloth.com/kazu-plaid-tunic.html",
    "price": 88
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Tops",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/T/KT63001_BKPUR_T.jpg",
    "productCode": "K/T/KT63001_BKPUR_T",
    "title": "Mindy High-Low Top",
    "itemType": "Top",
    "link": "http://www.kutfromthekloth.com/mindy-high-low-top.html",
    "price": 68
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/V/KV11101_IVORY_T.jpg",
    "productCode": "K/V/KV11101_IVORY_T",
    "title": "Charlie Reversable Vest",
    "itemType": "Vest",
    "link": "http://www.kutfromthekloth.com/charlie-reversable-vest.html",
    "price": 148
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/V/KV11401_GLDBW_T.jpg",
    "productCode": "K/V/KV11401_GLDBW_T",
    "title": "Nash Drape Front Vest",
    "itemType": "Vest",
    "link": "http://www.kutfromthekloth.com/nash-drape-front-vest-exclusive.html",
    "price": 78
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Outerwear",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/K/V/KV12001_BROWN_TN.jpg",
    "productCode": "K/V/KV12001_BROWN_TN",
    "title": "Kamryn Faux Fur Vest",
    "itemType": "Vest",
    "link": "http://www.kutfromthekloth.com/kamryn-faux-fur-vest.html",
    "price": 128
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/b/kb10146_1.jpg",
    "productCode": "kb10146",
    "title": "Dara Midi Skirt",
    "itemType": "Skirt",
    "link": "http://edensociety.com/kb10146.html",
    "price": 39
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kb10164_2_eden_30916_copy.jpg",
    "productCode": "kb10164",
    "title": "Lacina Midi Skirt",
    "itemType": "Skirt",
    "link": "http://edensociety.com/kb10164.html",
    "price": 58
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kb10184-2-1.jpg",
    "productCode": "kb10184-2",
    "title": "Vanessa Ankle Trouser",
    "itemType": "Trouser",
    "link": "http://edensociety.com/kb10184-2.html",
    "price": 46
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kb12080-1_1.jpg",
    "productCode": "kb10280",
    "title": "Marissa Maxi Skirt",
    "itemType": "Skirt",
    "link": "http://edensociety.com/kb10280.html",
    "price": 51
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kb10281-1-1_1.jpg",
    "productCode": "kb10281-1",
    "title": "Brya Slim Fit Trouser",
    "itemType": "Trouser",
    "link": "http://edensociety.com/kb10281-1.html",
    "price": 53
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kb10286-4_1.jpg",
    "productCode": "kb10286",
    "title": "Genevie Midi Skirt",
    "itemType": "Skirt",
    "link": "http://edensociety.com/kb10286.html",
    "price": 46
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kb10288-1_1.jpg",
    "productCode": "kb10288",
    "title": "Annette Pencil Skirt",
    "itemType": "Skirt",
    "link": "http://edensociety.com/kb10288.html",
    "price": 48
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/b/kb10588-3-_1_.jpg",
    "productCode": "kb10588-3",
    "title": "Birdie Trouser",
    "itemType": "Trouser",
    "link": "http://edensociety.com/kb10588-3.html",
    "price": 68
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt12229-1-_1__2.jpg",
    "productCode": "kb12081-1",
    "title": "Raja Pants",
    "itemType": "Pants",
    "link": "http://edensociety.com/kb12081-1.html",
    "price": 82
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bottoms",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/b/kb12207-1-_1_.jpg",
    "productCode": "kb12207-1",
    "title": "Alani Culottes",
    "itemType": "Culottes",
    "link": "http://edensociety.com/kb12207-1.html",
    "price": 56
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kd10155_1_eden_30769.jpg",
    "productCode": "kd10155",
    "title": "Pixie Floral Maxi Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd10155.html",
    "price": 65
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kd10168_4_eden_30730.jpg",
    "productCode": "kd10168-167",
    "title": "Archana Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd10168-167.html",
    "price": 63
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kd10200_1_eden_30670.jpg",
    "productCode": "kd10200",
    "title": "Pearline Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd10200.html",
    "price": 46
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kd10289-1_1.jpg",
    "productCode": "kd10289",
    "title": "Stephania Shirt Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd10289.html",
    "price": 70
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/d/kd12046-3-_1_v2.jpg",
    "productCode": "kd12046-3",
    "title": "Bria Shirt Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd12046-3.html",
    "price": 76
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/d/kd12051-1-_3_.jpg",
    "productCode": "kd12051-1",
    "title": "Macie Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd12051-1.html",
    "price": 73
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/d/kd12051-2-_1_.jpg",
    "productCode": "kd12051-2",
    "title": "Macie Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd12051-2.html",
    "price": 73
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/d/kd12056-1-_4_.jpg",
    "productCode": "kd12056-1",
    "title": "Maddie Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd12056-1.html",
    "price": 68
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/d/kd12056-2-_3_.jpg",
    "productCode": "kd12056-2",
    "title": "Maddie Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd12056-2.html",
    "price": 68
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/d/kd12084-1-_1_.jpg",
    "productCode": "kd12084-1",
    "title": "Lilou Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd12084-1.html",
    "price": 82
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/d/kd12217-1-_2_.jpg",
    "productCode": "kd12217-1",
    "title": "Joan Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/kd12217-1.html",
    "price": 90
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kj10437-1_1.jpg",
    "productCode": "kj10437",
    "title": "Sylvia Classic",
    "itemType": "Classic",
    "link": "http://edensociety.com/kj10437.html",
    "price": 77
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Outerwear",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/j/kj10621-1-_2_.jpg",
    "productCode": "kj10621-1",
    "title": "Meredish Jacket",
    "itemType": "Jacket",
    "link": "http://edensociety.com/kj10621-1.html",
    "price": 107
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bodysuits",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kjm10102_2_eden_30809.jpg",
    "productCode": "kjm10102",
    "title": "Kiro Jumpsuit",
    "itemType": "Jumpsuit",
    "link": "http://edensociety.com/kjm10102.html",
    "price": 70
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Bodysuits",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kjm10284-2-1_1.jpg",
    "productCode": "kjm10284-2",
    "title": "Reanna Utility Jumpsuit",
    "itemType": "Jumpsuit",
    "link": "http://edensociety.com/kjm10284-2.html",
    "price": 82
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kt10154-2_4_eden_30336.jpg",
    "productCode": "kt10154-2",
    "title": "Jill Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10154-2.html",
    "price": 39
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kt10201_1_eden_30377.jpg",
    "productCode": "kt10201",
    "title": "Nadia Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10201.html",
    "price": 63
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt10225-1-_2_.jpg",
    "productCode": "kt10225-1",
    "title": "Layla Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10225-1.html",
    "price": 51
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt10225-2-_1_.jpg",
    "productCode": "kt10225-2",
    "title": "Layla Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10225-2.html",
    "price": 51
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt10274-1-_1_.jpg",
    "productCode": "kt10274-1",
    "title": "Dani Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10274-1.html",
    "price": 46
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt10274-2-_1_.jpg",
    "productCode": "kt10274-2",
    "title": "Dani Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10274-2.html",
    "price": 46
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kt10344-1-1_1.jpg",
    "productCode": "kt10344-1",
    "title": "Amie Shirt Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10344-1.html",
    "price": 46
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kt10344-4-2_1.jpg",
    "productCode": "kt10344-4",
    "title": "Amie Shirt Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10344-4.html",
    "price": 46
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kt10361-1-0_1.jpg",
    "productCode": "kt10361-1",
    "title": "Rosalie Button Front Blouse",
    "itemType": "Blouse",
    "link": "http://edensociety.com/kt10361-1.html",
    "price": 46
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_kt10361-2-1_1.jpg",
    "productCode": "kt10361-2",
    "title": "Rosalie Button Front Blouse",
    "itemType": "Blouse",
    "link": "http://edensociety.com/kt10361-2.html",
    "price": 46
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt10561-1-_1_.jpg",
    "productCode": "kt10561-1",
    "title": "Kymber Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10561-1.html",
    "price": 62
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt10632-1-_1_.jpg",
    "productCode": "kt10632-1",
    "title": "Verene Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10632-1.html",
    "price": 42
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt10632-2-_1_.jpg",
    "productCode": "kt10632-2",
    "title": "Verene Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt10632-2.html",
    "price": 42
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt12044-2-_3_.jpg",
    "productCode": "kt12044-2",
    "title": "Pixie Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt12044-2.html",
    "price": 62
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt12047-1-_1_v2.jpg",
    "productCode": "kt12047-1",
    "title": "Paris Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt12047-1.html",
    "price": 45
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Tops",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/t/kt12047-2-_1_.jpg",
    "productCode": "kt12047-2",
    "title": "Paris Top",
    "itemType": "Top",
    "link": "http://edensociety.com/kt12047-2.html",
    "price": 45
  },
  {
    "brand": "Kut from the Kloth",
    "itemCategory": "Bottoms",
    "imageURL": "http://www.kutfromthekloth.com/media/catalog/product/cache/1/small_image/415x700/d58d44b981214661663244ef00ea7e30/s/p/sp076ma1_mmryg_f_1.jpg",
    "productCode": "s/p/sp076ma1_mmryg_f_1",
    "title": "Brigitte Slim Fit Ankle Skinny (Grey Wash)",
    "itemType": "Jeans",
    "link": "http://www.kutfromthekloth.com/brigitte-ankle-skinny-released-hem-grey-wash.html",
    "price": 79
  },
  {
    "brand": "Eden Society",
    "itemCategory": "Dresses",
    "imageURL": "http://edensociety.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/_/s_sd20102-1_1.jpg",
    "productCode": "sd20102",
    "title": "Layla Sleeveless Dress",
    "itemType": "Dress",
    "link": "http://edensociety.com/sd20102.html",
    "price": 70
  }
]

    var promise = new Parse.Promise();
    console.log(data);
   var dataJson = JSON.parse(data);
    
    //Parse.Cloud.useMasterKey();
      
    var productArray = []; 

var length = Object.keys(dataJson).length;
    console.log(length);

    for (var i = 0; i < length; i++) {
      console.log(i);
        var clothingItem = new Parse.Object("clothing2");
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
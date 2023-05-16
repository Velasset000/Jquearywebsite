const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
let finalResult = ""
storeItems.forEach(function(storeItem) {
    if (storeItem.inStock === true) {
  let name = storeItem.name;
  let price = storeItem.price;
  let details = storeItem.details;
  let result = "<p class='inStock'>" + "<span class ='price'>$" + price + "</span>" + "<span class='name'>" + name + "</span>"  + "<span class='details'>" + details + "</span>" + "</p>";
  finalResult += result;
    }
});
$('#products').append(finalResult)

$(document).ready(function(){
    $('#Toggle').click(function(){
      $('#contentContainer').toggleClass("darkMode")
    });
  });
  
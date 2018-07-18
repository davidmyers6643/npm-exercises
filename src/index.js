const $ = require('jquery');

$('body').css('background-color', 'red');

let sayHello = name => console.log(`Hello + ${name}`);

sayHello('david');
sayHello('you');


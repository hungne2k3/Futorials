// JSon -> 
// Chuyển đổi văn bản `JSON` thành đối tượng `JavaScript`
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// sử dụng hàm tích hợp JavaScript JSON.parse() để chuyển đổi chuỗi thành đối tượng JavaScript:
let obj = JSON.parse(text);
console.log(obj);

let json = [
    {
        "name": "hung",
        "age": 20,
        "address": 'Ha Nam'
    }
]

// sử dụng hàm tích hợp JavaScript JSON.stringify() để chuyển đổi js thành đối tượng json:
console.log(JSON.stringify(json));


// WEB APIS
// Nhận vĩ độ và kinh độ của vị trí của người dùng:
const x = document.getElementById('demo');

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    catch {
        x.innerHTML = err 
    }
}

function showPosition(position) {
    x.innerHTML = 'Vi do ' + position.coords.latitude + 
    "</br> Kinh do " + position.coords.longitude;
}

// JavaScript Validation API (API Forms)
function myFunction() {
    const inpObj = document.getElementById('id1');

    if(!inpObj.checkVisibility()) {
        document.getElementById('demo-2').innerHTML = "Vui Long nhap trg nay";
    }
    else {
        document.getElementById('demo-2').innerHTML = "Input OK";
    }
}

// AJAX create a XMLHttpsRequest
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById('demo-3').innerHTML = this.responseText;
    }
    xhttp.open("GET", "./vd_Json.json", + Math.random());
    xhttp.send();
}
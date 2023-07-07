// Javascitp Object
const car = {
    name: 'Audi',
    model: 700,
    year: 2018,
    getName: function() {
        return this.name + ' ' + this.model;
    }
}

console.log(car.getName())

// Array
// cach 1.
const arr = ['cam', 'buoi', 'dua_hau', 'dua'];
console.log(arr)
// output : ["cam", "buoi", "dua hau", "dua"];
console.log(arr.length); //kt do dai
// output: 4;

// --Phương thức JavaScript toString()chuyển đổi một mảng thành một chuỗi các giá trị mảng (được phân tách bằng dấu phẩy).
document.getElementById('demo').innerText = arr.toString();
// cam,buoi,dua hau,dua

// --Phương thức này join()cũng nối tất cả các phần tử mảng thành một chuỗi.
// Nó hoạt động giống như toString(), nhưng ngoài ra, bạn có thể chỉ định dấu phân cách:
console.log(arr.join(' '));

// Phương push()thức thêm một phần tử mới vào một mảng (ở cuối): và trả về độ dài sau khi xóa
arr.push("kiwi");
console.log(arr);

// Phương pop()thức loại bỏ phần tử cuối cùng khỏi một mảng:
// và trả về độ dài sau khi xóa
console.log(arr.pop());

// Cach 2
const arr1 = new Array('cam', 'buoi', 'dua hau', 'dua');
console.log(arr1);

// Phương thức này shift()loại bỏ phần tử mảng đầu tiên và "chuyển" tất cả các phần tử khác sang chỉ số thấp hơn. và trả về độ dài sau khi xóa
console.log(arr1.shift());

// Phương thức này unshift()thêm một phần tử mới vào một mảng (ở đầu) và "không dịch chuyển" các phần tử cũ hơn: và trả về độ dài sau khi xóa
arr1.unshift('tao')
console.log(arr1);
// Output: (4)["cam", "buoi", "dua hau", "dua"];

const myGirls = ["Cecilie", "Lone"];
console.log(myGirls);
const myBoys = ["Emil", "Tobias", "Linus"];
console.log(myBoys);

// Phương thức này splice()có thể được sử dụng để thêm các phần tử mới vào một mảng: 2: là vị trí bắt đầu thêm, 0: là vị trí xóa
arr1.splice(2, 0, 'le')
console.log(arr1);

console.log(arr1.slice(2));


// Phương concat()thức tạo một mảng mới bằng cách hợp nhất (nối) các mảng hiện có:
// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);

const arr2 = ["Cecilie", "Lone"];
const arr3 = ["Emil", "Tobias", "Linus"];
const arr4 = ["Robin", "Morgan"];
// Phương thức này concat()có thể nhận bất kỳ số lượng đối số mảng nào:
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// Function
function myFunction(p1, p2) {
    return p1 * p2;
}

var btn = document.getElementById('math');
btn.addEventListener(('click'), function() {
    if(total.classList.contains('none')) {
        total.classList.remove('none');
    }
    else {
        total.classList.add('none');
    }
})


var total = document.getElementById('total');
total.innerText = myFunction(4, 4);

// Arrown Function
// Arrown Function dc giới thiệu trong ES6, cú pháp này giúp chúng ta viến ngắn hơn
let myArrownFunction = (a, b) => a * b;
myArrownFunction(4,5);

// What About This
/**
 * Việc xử lý this các hàm mũi tên cũng khác với các hàm thông thường.

Nói tóm lại, với các chức năng mũi tên, không có ràng buộc nào về this.

Trong các chức năng thông thường, thistừ khóa đại diện cho đối tượng được gọi là chức năng, có thể là cửa sổ, tài liệu, nút hoặc bất kỳ thứ gì.

Với các chức năng mũi tên, thistừ khóa luôn đại diện cho đối tượng đã xác định chức năng mũi tên.

Chúng ta hãy xem hai ví dụ để hiểu sự khác biệt.

Cả hai ví dụ đều gọi một phương thức hai lần, lần đầu tiên khi tải trang và một lần nữa khi người dùng nhấp vào nút.

Ví dụ đầu tiên sử dụng hàm thông thường và ví dụ thứ hai sử dụng hàm mũi tên.

Kết quả cho thấy ví dụ đầu tiên trả về hai đối tượng khác nhau (cửa sổ và nút) và ví dụ thứ hai trả về đối tượng cửa sổ hai lần vì đối tượng cửa sổ là "chủ sở hữu" của hàm.
 * 
 */
hello = () => {
    document.getElementById("demo").innerHTML += this;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);

// Hoisting

// Class

class People {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

let people = new People('Hung', 2003);

document.getElementById('class').innerText = "My age" + people.age(year);

// Một lớp JavaScript không phải là một đối tượng.
// Nó là một khuôn mẫu cho các đối tượng JavaScript.
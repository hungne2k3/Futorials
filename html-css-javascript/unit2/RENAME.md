# Hoisting
- Trong JavaScript, một biến có thể được khai báo sau khi nó được sử dụng.

- Nói cách khác; một biến có thể được sử dụng trước khi nó được khai báo.

- VD:

`
    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element

    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x

`

- Từ khóa let và const
Các biến được xác định bằng letvà constđược nâng lên đầu khối, nhưng không được khởi tạo .

-   Ý nghĩa: Khối mã biết về biến, nhưng nó không thể được sử dụng cho đến  khi nó được khai báo.

-   Sử dụng một letbiến trước khi nó được khai báo sẽ dẫn đến một ReferenceError.

-   Biến nằm trong "vùng chết tạm thời" từ khi bắt đầu khối cho đến khi nó được khai báo:

# Strict Mode

## "use strict"; Xác định rằng mã JavaScript sẽ được thực thi ở "chế độ nghiêm ngặt".

- Chỉ thị "sử dụng nghiêm ngặt"
Chỉ thị này "use strict"là mới trong ECMAScript phiên bản 5.

- Nó không phải là một câu lệnh, mà là một biểu thức theo nghĩa đen, bị các phiên bản JavaScript trước đó bỏ qua.

- Mục đích của "use strict"là để chỉ ra rằng mã phải được thực thi ở "chế độ nghiêm ngặt".

- Ví dụ, với chế độ nghiêm ngặt, bạn không thể sử dụng các biến không được khai báo.

# Scope
  - Phạm vi xác định khả năng truy cập (khả năng hiển thị) của các biến.

- JavaScript có 3 loại phạm vi:

    1. phạm vi khối
    2. phạm vi chức năng
    3. Phạm vi toàn cầu

1. Phạm vi khối
    - ES6 đã giới thiệu hai từ khóa JavaScript mới quan trọng: letvà const.

    - Hai từ khóa này cung cấp Phạm vi khối trong JavaScript.

    - Các biến được khai báo bên trong khối { } không thể được truy cập từ bên ngoài khối:
    - VD: 
-       {
            let x = 2;
        }
         // x can NOT be used here

2. phạm vi toàn cầu
    - Phạm vi toàn cầu
Các biến được khai báo Toàn cầu (bên ngoài bất kỳ chức năng nào) có Phạm vi Toàn cầu .

    - Các biến toàn cục có thể được truy cập từ bất kỳ đâu trong chương trình JavaScript.

    - Các biến được khai báo với varvà khá giống nhau khi được khai báo bên ngoài một khối let .const

    - Tất cả đều có Phạm vi toàn cầu :
    - VD:
-       var x = 2; 
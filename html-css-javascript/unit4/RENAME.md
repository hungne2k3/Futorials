# JSON
- JSON là một định dạng để lưu trữ và vận chuyển dữ liệu.

- JSON thường được sử dụng khi dữ liệu được gửi từ máy chủ đến trang web.

- JSON là gì?
    - JSON là viết tắt của J ava S cript O bject N otation
    - JSON là một định dạng trao đổi dữ liệu nhẹ
    - JSON là ngôn ngữ độc lập *
    - JSON là "tự mô tả" và dễ hiểu

- `*` Cú pháp JSON bắt nguồn từ cú pháp ký hiệu đối tượng JavaScript, nhưng định dạng JSON chỉ là văn bản. Mã để đọc và tạo dữ liệu JSON có thể được viết bằng bất kỳ ngôn ngữ lập trình nào.

### Dữ liệu JSON - Tên và Giá trị
- Dữ liệu JSON được viết dưới dạng các cặp tên/giá trị, giống như các thuộc tính đối tượng JavaScript.

- Cặp tên/giá trị bao gồm tên trường (trong dấu ngoặc kép), theo sau là dấu hai chấm, theo sau là giá trị:

-       "firstName":"John"

- Tên `JSON yêu cầu dấu ngoặc kép`. `Tên JavaScript thì không`.

### Object Json
- Các đối tượng JSON được viết bên trong dấu ngoặc nhọn.

- Giống như trong JavaScript, các đối tượng có thể chứa nhiều cặp tên/giá trị:

-       {"firstName":"John", "lastName":"Doe"}

### Array Json
- Mảng JSON được viết bên trong dấu ngoặc vuông.

- Giống như trong JavaScript, một mảng có thể chứa các đối tượng:

-       "employees":[
            {"firstName":"John", "lastName":"Doe"},
            {"firstName":"Anna", "lastName":"Smith"},
            {"firstName":"Peter", "lastName":"Jones"}
        ]

### Chuyển đổi văn bản `JSON` thành đối tượng `JavaScript`
- Cách sử dụng phổ biến của JSON là đọc dữ liệu từ máy chủ web và hiển thị dữ liệu trong trang web.

- Để đơn giản, điều này có thể được chứng minh bằng cách sử dụng một chuỗi làm đầu vào.

# JS Web APIs
- API Web la gi?
    - API là viết tắt của Application Programming Interface.
    - API Web là một giao diện lập trình ứng dụng cho Web.
    - API trình duyệt có thể mở rộng chức năng của trình duyệt web.
    - API máy chủ có thể mở rộng chức năng của máy chủ web.

### Browser APIs
- Tất cả các trình duyệt đều có một bộ API Web tích hợp để hỗ trợ các hoạt động phức tạp và giúp truy cập dữ liệu.

### API của bên thứ ba
- API của bên thứ ba không được tích hợp vào trình duyệt của bạn.

- Để sử dụng các API này, bạn sẽ phải tải xuống mã từ Web.

- Ví dụ:

    - YouTube API - Cho phép bạn hiển thị video trên một trang web.
    - API Twitter - Cho phép bạn hiển thị các Tweet trên một trang web.
    - Facebook API - Cho phép bạn hiển thị thông tin Facebook trên một trang web.

### JavaScript Validation API `API xác thực JavaScript`
- `checkValidity()`: Trả về true nếu một phần tử đầu vào chứa dữ liệu hợp lệ.

- `setCustomValidity()` : Đặt thuộc tính validation Message của phần tử đầu vào.

### Thuộc tính DOM xác thực ràng buộc
- `validity`: Chứa các thuộc tính boolean liên quan đến tính hợp lệ của một phần tử đầu vào.

- `validationMessage`: Chứa thông báo mà trình duyệt sẽ hiển thị khi tính hợp lệ là sai.

- `willValidate`: Cho biết nếu một yếu tố đầu vào sẽ được xác thực.

### Thuộc tính hiệu lực
- `customError`: Đặt thành true, nếu thông báo hiệu lực tùy chỉnh được đặt.
- `patternMismatch`: Đặt thành true, nếu giá trị của phần tử không khớp với thuộc tính mẫu của nó.
- `rangeOverflow`: Đặt thành true, nếu giá trị của một phần tử lớn hơn thuộc tính max của nó.
- `rangeUnderflow`: Được đặt thành đúng, nếu giá trị của một phần tử nhỏ hơn thuộc tính tối thiểu của nó.
- `stepMismatch`: Được đặt thành true, nếu giá trị của một phần tử không hợp lệ theo thuộc tính bước của nó.

# Fetch API
- Giao diện Fetch API cho phép trình duyệt web thực hiện các yêu cầu HTTP tới máy chủ web. Không cần XMLHttpRequest nữa.

# AJAX Introduction
- AJAX là giấc mơ của nhà phát triển, bởi vì bạn có thể:

    - Đọc dữ liệu từ máy chủ web - sau khi trang đã được tải
    - Cập nhật trang web mà không cần tải lại trang
    - Gửi dữ liệu đến máy chủ web - ở chế độ nền

### AJAX la gi?
- AJAX = `Asynchronous JavaScript And XML`.
- AJAX không phải là ngôn ngữ lập trình.

- AJAX chỉ sử dụng kết hợp:

    - Một đối tượng tích hợp trong trình duyệt XMLHttpRequest(để yêu cầu dữ liệu từ máy chủ web)
    - JavaScript và HTML DOM (để hiển thị hoặc sử dụng dữ liệu)

- AJAX cho phép các trang web được cập nhật không đồng bộ bằng cách trao đổi dữ liệu với một máy chủ web phía sau hậu trường. Điều này có nghĩa là có thể cập nhật các phần của trang web mà không cần tải lại toàn bộ trang.

### AJAX - The XMLHttpRequest Object
- Nền tảng của AJAX là đối tượng XMLHttpRequest.

    - Tạo một đối tượng XMLHttpRequest
    - Xác định chức năng gọi lại
    - Mở đối tượng XMLHttpRequest
    - Gửi yêu cầu đến máy chủ

- Đối `XMLHttpRequest` tượng có thể được sử dụng để trao đổi dữ liệu với máy chủ web phía sau hậu trường. Điều này có nghĩa là có thể cập nhật các phần của trang web mà không cần tải lại toàn bộ trang.

- Cú pháp tạo `XMLHttpRequest` đối tượng:
``` 
    variable = new XMLHttpRequest();
```

- Xác định chức năng gọi lại
```
    xhttp.onload = function() {
    // What to do when the response is ready
    }
```

- Gửi yêu cầu
```
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
```

## Các phương thức đối tượng `XMLHttpRequest`

- `new XMLHttpRequest()`: Tạo một đối tượng XMLHttpRequest mới

- `abort()`: huy bo cac hiện hành gửi yêu cầu

- `getAllResponseHeaders()`: trả lại tiêu đề thông tin
- `getResponseHeader()`: Trả về thông tin tiêu đề cụ thể
- `open(method, url, async, user, psw)`: Chỉ định phương thức yêu cầu: loại yêu cầu GET hoặc POST url: vị trí tệp không đồng bộ: đúng (không đồng bộ) hoặc sai (đồng bộ) người dùng: tên người dùng tùy chọn psw: mật khẩu tùy chọn
- `send()`: Gửi yêu cầu đến máy chủ Được sử dụng cho các yêu cầu GET
- `send(string)`: Gửi yêu cầu đến máy chủ. Được sử dụng cho các yêu cầu POST
- `setRequestHeader()`: Thêm một cặp nhãn/giá trị vào tiêu đề sẽ được gửi

## Thuộc tính đối tượng XMLHttpRequest
- `onload()`: Với `XMLHttpRequest` đối tượng, bạn có thể xác định chức năng gọi lại sẽ được thực thi khi yêu cầu nhận được câu trả lời.

- Hàm được định nghĩa trong `onload` thuộc tính của XMLHttpRequestđối tượng:
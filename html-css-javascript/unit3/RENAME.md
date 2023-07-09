# Javascript this keyword
- Trong JavaScript, thistừ khóa đề cập đến một đối tượng .
- Đối tượng nào phụ thuộc vào cách this được gọi (được sử dụng hoặc được gọi).

- Từ this khóa đề cập đến các đối tượng khác nhau tùy thuộc vào cách nó được sử dụng:

- Trong một phương thức đối tượng, thisđề cập đến đối tượng .
- Một mình, thisđề cập đến đối tượng toàn cầu .
- Trong một chức năng, thisđề cập đến đối tượng toàn cầu .
- Trong một hàm, ở chế độ nghiêm ngặt, thislà undefined.
- Trong một sự kiện, thisđề cập đến phần tử đã nhận được sự kiện.
- Các phương thức như call(), apply()và bind()có thể tham chiếu thisđến bất kỳ đối tượng nào .

## Ghi Chu
- this không phải là một biến. Nó là một từ khóa. Không thể thay đổi giá trị của this.

# Asynchronous JavaScript (bất đồng bộ)
- Khi sử dụng hàm JavaScript `setTimeout()`, bạn có thể chỉ định hàm gọi lại sẽ được thực thi khi hết thời gian chờ:

            setTimeout(myFunction, 3000);

            function myFunction() {
            document.getElementById("demo").innerHTML = "I love You !!";
            }

- Khi sử dụng hàm JavaScript `setInterval()`, bạn có thể chỉ định hàm gọi lại sẽ được thực thi cho từng khoảng thời gian:

        setInterval(myFunction, 1000);

        function myFunction() {
        let d = new Date();
        document.getElementById("demo").innerHTML=
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
        }

# HTML DOM
- Với HTML DOM, JavaScript có thể truy cập và thay đổi tất cả các thành phần của tài liệu HTML.

- Phương thức getElementById 
    - Cách phổ biến nhất để truy cập một phần tử HTML là sử dụng thuộc tính idcủa phần tử đó.

    - Trong ví dụ trên, getElementByIdphương pháp được sử dụng id="demo"để tìm phần tử.

- Thuộc tính InternalHTML
    - Cách dễ nhất để lấy nội dung của một phần tử là sử dụng thuộc innerHTMLtính.

    - Thuộc innerHTMLtính hữu ích để nhận hoặc thay thế nội dung của các phần tử HTML.

         `Thuộc innerHTMLtính có thể được sử dụng để lấy hoặc thay đổi bất kỳ phần tử HTML nào, bao gồm <html>và <body>.`
- Thuộc tính Write()
    - Trong JavaScript, document.write()có thể được sử dụng để ghi trực tiếp vào luồng đầu ra HTML:
    - Không bao giờ sử dụng document.write()sau khi tài liệu được tải. Nó sẽ ghi đè lên tài liệu.

## Event DOM
- Một JavaScript có thể được thực thi khi một sự kiện xảy ra, chẳng hạn như khi người dùng nhấp vào một phần tử HTML.

- Để thực thi mã khi người dùng nhấp vào một phần tử, hãy thêm mã JavaScript vào thuộc tính sự kiện HTML:

    - Khi người dùng click chuột
    - Khi một trang web đã được tải
    - Khi một hình ảnh đã được tải
    - Khi chuột di chuyển qua một phần tử
    - Khi một trường đầu vào được thay đổi
    - Khi một biểu mẫu HTML được gửi
    - Khi người dùng vuốt một phím

### Event `onload` và `onunload`

- Các sự kiện `onload` và `onunload` được kích hoạt khi người dùng vào hoặc rời khỏi trang.
- Sự kiện này `onload` có thể được sử dụng để kiểm tra loại trình duyệt và phiên bản trình duyệt của khách truy cập và tải phiên bản phù hợp của trang web dựa trên thông tin.

### Event `onchange`
- Sự kiện này `onchange` thường được sử dụng kết hợp với việc xác thực các trường đầu vào.

### Event `onmouseover` va `onmouseout`
- Các sự kiện onmouseovervà onmouseoutcó thể được sử dụng để kích hoạt một chức năng khi người dùng di chuột qua hoặc ra khỏi phần tử HTML:

### Event `onmousedown`, `onmouseup` va `onclick`
- và các sự kiện đều là một phần của thao onmousedowntác nhấp chuột. Đầu tiên, khi một nút chuột được nhấp, sự kiện onmousedown được kích hoạt, sau đó, khi thả nút chuột, sự kiện onmouseup được kích hoạt, cuối cùng, khi nhấp chuột xong, sự kiện onclick được kích hoạt.onmouseuponclick

### Event `AddEventListener`
- Phương `addEventListener()` thức đính kèm một trình xử lý sự kiện vào phần tử đã chỉ định.

- Phương `addEventListener()` thức gắn một trình xử lý sự kiện vào một phần tử mà không ghi đè lên các trình xử lý sự kiện hiện có.

- Bạn có thể thêm nhiều trình xử lý sự kiện vào một phần tử.

- Bạn có thể thêm nhiều trình xử lý sự kiện cùng loại vào một phần tử, tức là hai sự kiện "nhấp chuột".

- Bạn có thể thêm trình xử lý sự kiện vào bất kỳ đối tượng DOM nào, không chỉ các phần tử HTML. tức là đối tượng cửa sổ.

- Phương pháp này `addEventListener()` giúp dễ dàng kiểm soát cách sự kiện phản ứng với bong bóng.

- Khi sử dụng `addEventListener()` phương pháp này, JavaScript được tách biệt khỏi phần đánh dấu HTML, để dễ đọc hơn và cho phép bạn thêm trình xử lý sự kiện ngay cả khi bạn không kiểm soát phần đánh dấu HTML.

# The Browser Object Model
- Không có tiêu chuẩn chính thức nào cho mô hình B rowser O bject M (BOM).

- Vì các trình duyệt hiện đại đã triển khai (gần như) các phương thức và thuộc tính giống nhau cho tính tương tác của JavaScript, nên nó thường được gọi là các phương thức và thuộc tính của BOM.

## BOM Window
- Đối `window` tượng được hỗ trợ bởi tất cả các trình duyệt. Nó đại diện cho cửa sổ của trình duyệt.

- Kích thước cửa sổ
    - `window.innerHeight` - chiều cao bên trong của cửa sổ trình duyệt (tính bằng pixel)
    - `window.innerWidth` - chiều rộng bên trong của cửa sổ trình duyệt (tính bằng pixel)

- Phương pháp cửa sổ khác
    - `window.open()` - mở một cửa sổ mới
    - `window.close()`- đóng cửa sổ hiện tại
    - `window.moveTo()`- di chuyển cửa sổ hiện tại
    - `window.resizeTo()`- thay đổi kích thước cửa sổ hiện tại

- `Screen Window`
- Đối `window.screen` tượng có thể được viết mà không cần tiền tố cửa sổ.

- Methods
    - `screen.width`
    - `screen.height`
    - `screen.availWidth` - Thuộc `screen.availWidth` tính trả về chiều rộng màn hình của khách truy cập, tính bằng pixel, trừ các tính năng giao diện như Thanh tác vụ Windows.
    - `screen.availHeight` - Thuộc `screen.availHeight` tính trả về chiều cao màn hình của khách truy cập, tính bằng pixel, trừ các tính năng giao diện như Thanh tác vụ Windows.
    - `screen.colorDepth` - Thuộc `screen.colorDepth` tính trả về số bit được sử dụng để hiển thị một màu.
    - `screen.pixelDepth` - Thuộc `screen.pixelDepth` tính trả về độ sâu pixel của màn hình.

- Location Windown
    - Đối `window.location` tượng có thể được viết mà không cần tiền tố cửa sổ.

    - `window.location.href` trả về href (URL) của trang hiện tại
    - `window.location.hostname` trả về tên miền của máy chủ lưu trữ web
    - `window.location.pathname ` trả về đường dẫn và tên tệp của trang hiện tại
    - `window.location.protocol` trả về giao thức web được sử dụng (http: hoặc https:)
    - `window.location.assign()` tải một tài liệu mới
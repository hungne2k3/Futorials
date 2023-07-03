let openMenu = document.querySelector('.icon-bars');
let closeMenu = document.querySelector('.icon-closes');
let body = document.querySelector('body');
let contact = document.querySelector('.active');

openMenu.addEventListener('click', () => {
    // body.classList.add('open');
    document.body.classList.add('open');
})

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('open');
})

// mo form
function openPopup() {
    const popup = document.querySelector('.infor-user');

    popup.classList.remove('hide');
}

// dong form
function closePopup() {
    const popup = document.querySelector('.button');

    popup.classList.add('hide');
}

// form validator
function Validator (options) {

    var selectorRules = {};

    // ham thuc hien bao loi khong nhap ten
    function validate (inputElement, rule) {
        inputElement.onblur = function () {
            // value: inputElement.value
            // rules: tesst.rules
            // cách lấy ra tên class giống nhau nhưng chỉ lấy cái mình cần thì thấy từ thằng cha rồi đến thằng con.
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            var errorMessage = rule.test(inputElement.value);
            if(errorMessage) {
                // khi k tên vào input mà blur ra ngoài sẽ báo lỗi
                errorElement.innerText = errorMessage;
                inputElement.parentElement.classList.add('invalid');
            } else {
                // khi nhập bất kì ký tự nào vào phần tên thì sẽ k báo lỗi
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            }
        }
    }

    // lấy Element của form cần validate
    var formEmlement = document.querySelector(options.form);

    if(formEmlement) {
        options.rules.forEach(function (rule) {

            // luu lai các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector](rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formEmlement.querySelector(rule.selector);
            
            // xử lý trường hợp blur khoỉ input
            if(inputElement) {
                validate(inputElement, rule);
            }

            // xử lý mỗi khi người dùng nhập vào input sẽ không báo đỏ
            inputElement.oninput = function () {
                var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            }
        })
        console.log(selectorRules);
    }
}

// định nghĩa các Rules bắt buộc nhập tên và email.
// Nguyên tắc của rules là: 
// 1. Khi có lỗi => Trả ra message lỗi 
//  2. Khi hợp lệ => không trả ra cái gì cả.  (undefined)
// fullNAme
Validator.isRequired = function (selector, message) {
    // kiểm tra xem người dùng đã nhập tên chưa?
    return {
        selector: selector,
        test: function (value) {
            // toán tử 3 ngôi
            // thuộc tính trim() sẽ loại bỏ các dấu cách
            return value.trim() ? undefined: message || 'Vui long nhap truong nay'
        }
    }
}

// Email
Validator.isEmail = function (selector, message) {
    // kiểm tra đây có phải là Email không?
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined: message || 'Vui long Nhap Email';
        }
    }
}
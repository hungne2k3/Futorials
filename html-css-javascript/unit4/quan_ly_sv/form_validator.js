function Validator(options) {
    var selectorRules = {};

    // ham thuc hien bao loi k nhap ten
    function validator(inputElement, rule) {
        inputElement.onblur = function () {
            // value: inputElement.value
            // rules: tesst.rules
            // cách lấy ra tên class giống nhau nhưng chỉ lấy cái mình cần thì thấy từ thằng cha rồi đến thằng con.
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

            var errorMessage = rule.test(inputElement.value);

            if(errorMessage) {
                // khi k dien tên vào input mà blur ra ngoài sẽ báo lỗi
                errorElement.innerText = errorMessage;
                inputElement.parentElement.classList.add('invalid');
            }
            else {
                // khi nhập bất kì ký tự nào vào phần tên thì sẽ k báo lỗi
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            }
        }
    }

    // lấy Element của form cần validate
    var formElement = document.querySelector(options.form);

    if(formElement) {
        options.rules.forEach(function (rule) {
            // luu lai các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector](rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);

            // xử lý trường hợp blur khoỉ input
            if(inputElement) {
                validator(inputElement, rule);
            }

            // xử lý mỗi khi người dùng nhập vào input sẽ không báo đỏ
            inputElement.oninput = function () {
                var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            }
        });

        // console.log(selectorRules);
    }
}
// fullNAme
Validator.isRequired = function (selector, message) {
    // kiểm tra xem người dùng đã nhập tên chưa?
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined: message || 'Vui long nhap truong nay';
        }
    }
}

Validator.isDate = function (selector, message) {
    // kiểm tra xem người dùng đã nhập tên chưa?
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined: message || 'Vui long nhap truong nay';
        }
    }
}

Validator.isAddrest = function (selector, message) {
    // kiểm tra xem người dùng đã nhập tên chưa?
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined: message || 'Vui long nhap truong nay';
        }
    }
}

Validator.isPhoneNumber = function (selector, message) {
    // kiểm tra xem người dùng có nhập sai format phone number hay k
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined: message || 'Vui long nhap truong nay';
        }
    }
}

Validator.isInput = function (selector, message) {
    // kiểm tra xem người dùng có nhập sai format phone number hay k
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined: message || 'Vui long nhap truong nay';
        }
    }
}
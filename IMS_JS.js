const form = document.getElementById('R_form');
const username = document.getElementById('R_Name');
const email = document.getElementById('R_Email');
const password = document.getElementById('R_pass');
const cpassword = document.getElementById('R_pass_copy');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    form_data_validate();

    const userType= document.getElementById('R_User_Type');

console.log(userType.value);

    if (final_validation()) {
        send_data_to_database();
        console.log('fine upto here');

    }
});

const send_data_to_database = () => {
    const temp_formdata = new FormData();

    temp_formdata.append('username', username.value.trim());
    temp_formdata.append('email', email.value.trim());
    temp_formdata.append('password', password.value.trim());

    

    fetch('backend_script.php', {
        method: 'POST',
        body: temp_formdata
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);

        if(data==="")
        {
            alert('Successfully Registered!');
            window.location.href ="IMS_login.php";
        }
        else {
            console.log('error');
        }
    })
    .catch(error=> {
        console.log('error: ',error);
    })
}

const isEmail = (email_val) => {
    var atSymbol = email_val.indexOf("@");
    if (atSymbol < 1) return false;

    var dot = email_val.indexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === email_val.length - 1) return false;

    return true;
}

// Checking if all inputs are correct
const input_field = document.querySelectorAll('.User_input'); // Corrected selector
const final_validation = () => {
    for (const temp_input of input_field) {
        if (!temp_input.classList.contains('success')) {
            return false;
        }
    }
    return true;
}

const form_data_validate = () => {
    const username_val = username.value.trim();
    const email_val = email.value.trim();
    const password_val = password.value.trim();
    const cpassword_val = cpassword.value.trim();

    // username condition
    if (username_val === "") {
        setErrorMsg(username, 'Username cannot be blank');
    } else if (username_val.length <= 2) {
        setErrorMsg(username, 'Username min 3 characters required');
    } else {
        setSuccessMsg(username);
    }

    // email condition
    if (email_val === "") {
        setErrorMsg(email, 'Email cannot be blank');
    } else if (!isEmail(email_val)) {
        setErrorMsg(email, 'Not a valid email');
    } else {
        setSuccessMsg(email);
    }

    // password condition
    if (password_val === "") {
        setErrorMsg(password, 'Password cannot be blank');
    } else if (password_val.length <= 6) {
        setErrorMsg(password, 'Min 6 characters required');
    } else {
        setSuccessMsg(password);
    }

    if (cpassword_val === "") {
        setErrorMsg(cpassword, 'Password cannot be blank');
    } else if (cpassword_val !== password_val) {
        setErrorMsg(cpassword, 'Check your password again');
    } else if (cpassword_val === password_val) {
        setSuccessMsg(cpassword);
    }

}

// error and success message functions
function setErrorMsg(input, errorMsgs) {
    // show error message
    const span_finder = input.parentElement.parentElement;
    const Message_box = span_finder.querySelector('.error-message');
    Message_box.innerText = errorMsgs;

    // border red
    const border_finder = input.parentElement;
    const Message_border = border_finder.querySelector('.User_input');
    Message_border.classList.add('error');
    Message_border.classList.remove('success');

    // add error image
    const image_finder = input.parentElement;
    const image_visibility_condition = image_finder.querySelector('img[src="381599_error_icon.png"]')
    image_visibility_condition.classList.add('visibility_on');

    // remove success image
    const image_visibility_condition_false = image_finder.querySelector('img[src="check-mark-icon-png-7.jpg"]')
    image_visibility_condition_false.classList.remove('visibility_on');
}

function setSuccessMsg(input) {
    // delete error message if any
    const span_finder = input.parentElement.parentElement;
    const Message_box = span_finder.querySelector('.error-message');
    Message_box.innerText = '';

    // border green
    const border_finder = input.parentElement;
    const Message_border = border_finder.querySelector('.User_input');
    Message_border.classList.add('success');
    Message_border.classList.remove ('error');

    // add success image
    const image_finder = input.parentElement;
    const image_visibility_condition = image_finder.querySelector('img[src="check-mark-icon-png-7.jpg"]')
    image_visibility_condition.classList.add('visibility_on');

    // remove failure image
    const image_visibility_condition_false = image_finder.querySelector('img[src="381599_error_icon.png"]')
    image_visibility_condition_false.classList.remove('visibility_on');
}

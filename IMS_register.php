<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <title>Register Now!</title>

</head>
<body>
    
<h1>Inventory Management System</h1>

<div class="form-box">
    <form method="post" id="R_form" action="backend_script.php">
        <h2>Register</h2>
        <div class="input_field">
        <div class="input-container">
            <input type="text" placeholder="Enter your Name" id="R_Name" class="User_input">
            <img src="381599_error_icon.png" height="15px" class="condition_img">
            <img src="check-mark-icon-png-7.jpg" height="15px" class="condition_img">
        </div>
        <span class="error-message" id="name-error"></span>
</div>

<div class="input_field">
        <div class="input-container">
            <input type="text" placeholder="Enter your Email" id="R_Email" class="User_input">
            <img src="381599_error_icon.png" height="15px" class="condition_img" >
            <img src="check-mark-icon-png-7.jpg" height="15px" class="condition_img">
        </div>
        <span class="error-message" id="email-error"></span>
        </div>

<div class="input_field">        
        <div class="input-container">
            <input type="password" placeholder="Enter your password" id="R_pass" class="User_input">
            <img src="381599_error_icon.png" height="15px" class="condition_img">
            <img src="check-mark-icon-png-7.jpg" height="15px" class="condition_img">
        </div>
        <span class="error-message" id="password-error"></span>
        </div>

<div class="input_field">        
        <div class="input-container">
            <input type="password" placeholder="Confirm your password" id="R_pass_copy" class="User_input">
            <img src="381599_error_icon.png" height="15px" class="condition_img">
            <img src="check-mark-icon-png-7.jpg" height="15px" class="condition_img">
        </div>
        <span class="error-message" id="password-copy-error"></span>
        </div>

<div class="input_field">
            <div class="input-container">
            <select id="R_User_Type">
                <option value="default" selected="true" disabled="true" >----</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
            </select>
            <img src="381599_error_icon.png" height="15px" class="condition_img">
            <img src="check-mark-icon-png-7.jpg" height="15px" class="condition_img">
        </div>
        <span class="error-message" id="user-type-error"></span>
        </div>

        <input type="submit" id="R_submit" value="Register Now" class="form-submit-btn">
        
        <p class="suggestion_msg">Already Have an Account? <a href="IMS_login.php">Login Now!</a></p>
    </form>
</div>

<script type="text/javascript" src="IMS_JS.js"></script>
</body>
</html>

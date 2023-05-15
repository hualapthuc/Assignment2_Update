
$(function() {
    $('#navbar').load("login.html");
});

function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("repassword").value;
    
    if (username == "" || email == "" || password == "" || confirmPassword == "") {
      alert("All fields are required. Please complete the form.");
      return false;
    }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    
    if (password != confirmPassword) {
      alert("Password and re-password fields do not match.");
      return false;
    } else {
        let user_records = new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

        user_records.push({
            "username": username,
            "password": password,
        })
        localStorage.setItem("users", JSON.stringify(user_records));
        alert('Register successfully!');
        window.location.href = "login.html";
    } 
}
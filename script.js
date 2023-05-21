function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "123" && password === "123") {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("menuItems").style.display = "block";
    } else {
      document.getElementById("loginMessage").textContent = "Wrong password. Please try again.";
    }
  
    return false;
  }
  
  function showRegistrationForm() {
    // You can implement the registration form here
    alert("Registration form will be shown here.");
  }
  
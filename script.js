function validateForm() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (!passwordPattern.test(password)) {
      alert("Password must contain at least one uppercase letter, one number, and can only contain '@' as a special character.");
      return false;
    }
    alert("Validation successful!");
    return false;
  }
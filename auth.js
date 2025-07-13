
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const pwd = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  if (pwd !== confirm) {
    alert("Passwords do not match!");
    return;
  }
  alert("Sign up successful (frontend only)!");
});

document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login attempted (frontend only)");
});

firebase.initializeApp(firebaseConfig);

document
  .querySelector(".signup_button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // window.open("list.html");

    var email = document.querySelector(".email_value").value;
    var password = document.querySelector(".password_value").value;

    // Promise
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log(response);
        window.location.href = "./login.html";
      })
      .catch(function (error) {
        console.log("TCL: error", error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  });

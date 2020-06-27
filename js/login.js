firebase.initializeApp(firebaseConfig);

document
  .querySelector(".sign_in_button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert("hi");
    window.location.href = "./list.html";
  });
document
  .querySelector(".sign_up_button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "./signup.html";
  });

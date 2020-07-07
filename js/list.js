firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
});
var db = firebase.firestore();
var docRef = db.collection("book").doc("키로파에디아");

document
  .querySelector(".book_name_add_button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    db.collection("book")
      .doc("키로파에디아")
      .set({
        Volume: "제 2권 : 군대의 재탄생",
        Part: "none",
        Chapter: "1장",
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  });

// docRef
//   .get()
//   .then(function (doc) {
//     if (doc.exists) {
//       console.log("Document data:", doc.data());
//     } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//     }
//   })
//   .catch(function (error) {
//     console.log("Error getting document:", error);
//   });

// $("#book_list").append($('<a href="https://www.naver.com"' + "move" + "</a>"));

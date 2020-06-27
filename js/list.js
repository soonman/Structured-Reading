firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
});
var db = firebase.firestore();

document
  .querySelector(".book_name_add_button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    db.collection("book")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  });

// db.collection("book")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   });
var messageRef = db
  .collection("rooms")
  .doc("roomA")
  .collection("messages")
  .doc("message1");

messageRef;

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBhlu1ZZcJ8f1cv8ryG7sTDsrJrOrpm2mQ",
  authDomain: "trongbinh-16784.firebaseapp.com",
  databaseURL: "https://trongbinh-16784.firebaseio.com",
  projectId: "trongbinh-16784",
  storageBucket: "trongbinh-16784.appspot.com",
  messagingSenderId: "90124616776"
};
firebase.initializeApp(config);

const database = firebase.database();

// database.ref().set({
//   age: 26,
//   isSingle: false,
//   location: {
//     city: "ha noi",
//     country: "viet nam"
//   }
// });

// database.ref("age").set(27);
// database.ref("location/city").set("xi gon");

// database
//   .ref("attributes")
//   .set({
//     height: 73,
//     weight: 150,
//     nested: {
//       nested: {
//         name: "nested"
//       }
//     }
//   })
//   .then(() => {
//     console.log("update success");
//   });
// database.ref("attributes/nested/nested/name").set("nested 2");

// database.ref("attributes/nested/nested/name").set(null);

// database.ref("attributes").update({
//   height: 100,
//   weight: 100
// });

database.ref("arrayData").push({
  description: "Rent",
  note: "",
  amount: 1095100,
  createdAt: 976123498163
});
database.ref("arrayData").push({
  description: "Rent2",
  note: "",
  amount: 109510,
  createdAt: 976121498763
});

database
  .ref()
  .once("value")
  .then(snapshot => {
    const expenses = [];

    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });
console.log("change the data.");

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAb1C_tzQ0k3TMv2-LYndvup4nlYugRD6s",
  authDomain: "loc-firebase-57599.firebaseapp.com",
  databaseURL: "https://loc-firebase-57599.firebaseio.com",
  projectId: "loc-firebase-57599",
  storageBucket: "loc-firebase-57599.appspot.com",
  messagingSenderId: "168565737128"
};
const fire = firebase.initializeApp(config);
export default fire;

// firebase.database().ref().set({
//   name: 'Heu unu'
// });

// const database = firebase.database();

// database.ref().set({
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'ha noi',
//     country: 'vnch'
//   }
// });

// database.ref().set('This is my data.');

// database.ref('age').set(27);
//database.ref('location/city').set('xi gon');

// database.ref('attributes').set({
//   height: 73,
//   weight: 150,
//   nested: {
//       nested: {
//           name:'nested'
//       }
//   }
// }).then(()=>{
//     console.log('update success');
// })
//database.ref('attributes/nested/nested/name').set('nested 2');


// database.ref('attributes/nested/nested/name').set(null);
// // database.ref('attributes/nested/nested/name').remove();
// database.ref('attributes').update({
//     height: 100,
//     weight: 100,
//   });
// database.ref('arrayData').push({
//     description: 'Rent',
//     note: '',
//     amount: 1095100,
//     createdAt: 976123498163
//   });
//   database.ref('arrayData').push({
//     description: 'Rent2',
//     note: '',
//     amount: 109510,
//     createdAt: 976121498763
//   });
  // database.ref()
  // .once('value')
  // .then((snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });

  //   console.log(expenses);
  // });
// console.log('change the data.');
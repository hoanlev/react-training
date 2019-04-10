import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCQLd1LXOoamYB2gfdlDezV8aFWL0Gu0Xo",
  authDomain: "react-traning-eaa46.firebaseapp.com",
  databaseURL: "https://react-traning-eaa46.firebaseio.com",
  projectId: "react-traning-eaa46",
  storageBucket: "react-traning-eaa46.appspot.com",
  messagingSenderId: "962975403466"
};
firebase.initializeApp(config);

// firebase.database().ref().set({
//   name: 'Heu unu'
// });

//const database = firebase.database();

// database.ref().set({
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'ha noi',
//     country: 'vit nam'
//   }
// });

//database.ref().set('This is my data.');

//database.ref('age').set(27);
//database.ref('location/city/state').set('tan  binh');

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
// database.ref('attributes/nested/nested/name').set('nested 2');


//database.ref('attributes/nested/nested/name').set(null);
//database.ref('attributes/nested/nested/name').remove();
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
  // database.ref('age')
  // .once('value').then(value=>{
  //   console.log(value.key,value.val());
  // })
  //.then((snapshot) => {
    //const expenses = [];

    // snapshot.forEach((childSnapshot) => {
    //   expenses.push({
    //     id: childSnapshot.key,
    //     ...childSnapshot.val()
    //   });
    // });
    //console.log(snapshot);
 // });
// console.log('change the data.');
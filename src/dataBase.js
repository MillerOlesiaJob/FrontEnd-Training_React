import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBAIEVQ-ntC9G6pon0Rj-k6yhg69xSC8n0",
  authDomain: "tasklistreact.firebaseapp.com",
  databaseURL: "https://tasklistreact.firebaseio.com",
  projectId: "tasklistreact",
  storageBucket: "tasklistreact.appspot.com",
  messagingSenderId: "704484827224",
  appId: "1:704484827224:web:122f362e4ab822f7f1ea2d"
};
export default firebase.initializeApp(firebaseConfig);


// saveToBase(successMessage, failedMessage) {
//   const firestore = firebase.firestore();
//   const timesRef = firestore.doc('samples/tasksList');
//   timesRef.set(this.tasks)
//     .then( () => {
//       if (successMessage) {
//         notification(NOTIFICATION_TYPE.SUCCESS, successMessage);
//       }
//     })
//     .catch( () => {
//       if (failedMessage) {
//         notification(NOTIFICATION_TYPE.ERROR, failedMessage);
//       }
//     });
// }


// getDataFromBase(skip) {
//   this.skip = skip;
//   const firestore = firebase.firestore();
//   const timesRef = firestore.doc('samples/tasksList');
//
//   const getData = callMeWhenDataReady => {
//
//     timesRef.get()
//       .then((doc) => {
//         if (doc.exists) {
//           callMeWhenDataReady(doc.data());
//         } else {
//           notification(NOTIFICATION_TYPE.ERROR, 'Something went wrong. Try again later');
//         }})
//       .catch( () => {
//         notification(NOTIFICATION_TYPE.ERROR, 'Something went wrong. Try again later');
//       });
//   };
//   getData( data => {
//     eventBus.publish('saveDataFromBase.taskListModel', data);
//   });
// }
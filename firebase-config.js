const firebaseConfig = {
  apiKey: "AIzaSyC2kBk4Ctg7W_CnsM8WeX8OnDQ04hsEeJI",
  authDomain: "srithong-massage-booking.firebaseapp.com",
  projectId: "srithong-massage-booking",
  storageBucket: "srithong-massage-booking.firebasestorage.app",
  messagingSenderId: "374083357000",
  appId: "1:374083357000:web:32ba9d584790396c6b4b7d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
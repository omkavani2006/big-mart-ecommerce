  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAE0B0njW7sckjrssICj6n6FcO97aZK0XY",
    authDomain: "big-mart-b9c81.firebaseapp.com",
    projectId: "big-mart-b9c81",
    storageBucket: "big-mart-b9c81.firebasestorage.app",
    messagingSenderId: "877079383192",
    appId: "1:877079383192:web:043068727a63f3d35d94ed",
    measurementId: "G-KBCXPSWB3Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const submit = document.getElementById('submit');
  submit.addEventListener("click", function (event) {
event.preventDefaultI
})
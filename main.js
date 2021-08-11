var firebaseConfig = {
  apiKey: "AIzaSyDx5qD5YV_moEw6P1hDb5O24O-W-ytknig",
  authDomain: "chat-app-fd399.firebaseapp.com",
  projectId: "chat-app-fd399",
  storageBucket: "chat-app-fd399.appspot.com",
  messagingSenderId: "790937754527",
  appId: "1:790937754527:web:3b574472c294ce8d45bbaa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
  });

      window.location = "chat.html";
}
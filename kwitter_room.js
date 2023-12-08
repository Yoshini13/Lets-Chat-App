const firebaseConfig = {
      apiKey: "AIzaSyCol-bzERKueq28ozF5A_jBpWGBEDyuScA",
      authDomain: "kwitter-44f07.firebaseapp.com",
      databaseURL: "https://kwitter-44f07-default-rtdb.firebaseio.com",
      projectId: "kwitter-44f07",
      storageBucket: "kwitter-44f07.appspot.com",
      messagingSenderId: "913886529730",
      appId: "1:913886529730:web:a6e5bbc3329b0dd0a2135b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

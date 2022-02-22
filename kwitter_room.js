

var firebaseConfig = {
      apiKey: "AIzaSyCZB73Bs_ntp8fKRbQIDpSR4_CZ5-CQ63A",
      authDomain: "kwittertest-c9f2c.firebaseapp.com",
      databaseURL: "https://kwittertest-c9f2c-default-rtdb.firebaseio.com",
      projectId: "kwittertest-c9f2c",
      storageBucket: "kwittertest-c9f2c.appspot.com",
      messagingSenderId: "160392293295",
      appId: "1:160392293295:web:c9e438d76d34818b6b1d5a",
      measurementId: "G-RYFJ4GT5WP"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name" + Room_names);
row = "<div class = 'room_name' id ="+ Room_names +"onclick = 'redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";


document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
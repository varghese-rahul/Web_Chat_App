// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7PhzQ0PFABtW__VHRiAW64Ux-fXLTaXg",
    authDomain: "chat-f3bb6.firebaseapp.com",
    databaseURL: "https://chat-f3bb6-default-rtdb.firebaseio.com",
    projectId: "chat-f3bb6",
    storageBucket: "chat-f3bb6.appspot.com",
    messagingSenderId: "385536346424",
    appId: "1:385536346424:web:602ea6d39e18708af719cd",
    measurementId: "G-DD8TN5ZV45"
 };




// Initialize Firebase  

firebase.initializeApp(firebaseConfig);
let database = firebase.database();

let username = document.getElementById("username");

let message = document.getElementById("message");

let messages = document.getElementById("messages");

username.value = localStorage.getItem("username");

message.addEventListener('keypress', function (e) {
  if(e.key == "Enter"){

    localStorage.setItem("username",username.value); //save in browser so if you refresh page it stays

    database.ref("messages").push({
      username: username.value,
      message: message.value
    })
    //console.log(username.value + ": " + message.value)

    message.value = "";


  }

})

database.ref("messages").on('child_added', function(e) {
  let data = e.val();
  console.log(data);

  let div = document.createElement("div"); //create html element
  let span = document.createElement("span");
  span.innerHTML = "@" + data.username;
  let p = document.createElement("p");
  p.innerHTML = data.message;

  div.appendChild(span);
  div.appendChild(p);

  messages.appendChild(div);
  messages.scrollTop=messages.scrollHeight;




  
})
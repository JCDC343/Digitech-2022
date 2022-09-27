//Validating submit button for comment section
function validateForm() {
  let x = document.forms["myForm"]["comment_author"].value;
  let y = document.forms["myForm"]["comment"].value;
  if (x == "") {
    alert(myComments[1]);
    return false;
  }
  if (y == "") {
      alert(myComments[2]);
      return false;
    }
return sFunction();
}

// Comment Section Database 

            // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
          
            // Your web app's Firebase configuration
            const firebaseConfig = {
              apiKey: "AIzaSyDQnoYcFQIxX0lhhxY3ELZXp4iGxwXYQvo",
              authDomain: "EcoEats-a9de5.firebaseapp.com",
              databaseURL: "https://test-a9de5-default-rtdb.asia-southeast1.firebasedatabase.app",
              projectId: "EcoEats-a9de5",
              storageBucket: "EcoEats-a9de5.appspot.com",
              messagingSenderId: "416282264979",
              appId: "1:416282264979:web:2da0f8059dc4dba17a9466"
            };
          
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
    
    
            import {getDatabase, ref, get, set, child, update, remove}
            from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js"
            
    
            const db = getDatabase();
    
            var enterID = document.querySelector("#enterID");
            var enterName = document.querySelector("#enterName");
            var enterComment = document.querySelector("#enterComment");
            var findID = document.querySelector("#findID");
            var findName = document.querySelector("#findName");
            var findComment = document.querySelector("#findComment");
          
    
            var insertBtn = document.querySelector("#insert");
            var updateBtn = document.querySelector("#update");
            var removeBtn = document.querySelector("#remove");
            var findBtn = document.querySelector("#find");
            
            function InsertData() {
                set(ref(db, "Comments/"+ enterID.value),{
                    Name: enterName.value,
                    ID: enterID.value,
                    Comment: enterComment.value
                })
                .then(()=>{
                    alert("Data added successfully");
                })
                .catch((error)=>{
                    alert(error);
                });
            }
    
            function FindData() {
                const dbref = ref(db);
    
                get(child(dbref, "Comments/" + findID.value))
                .then((snapshot)=>{
                    if(snapshot.exists()){
                        findName.innerHTML = "Name: " + snapshot.val().Name;
                        findComment.innerHTML = "Comment: " + snapshot.val().Comment;
                    } else {
                        alert("No data found");
                    }
                })
                .catch((error)=>{
                    alert(error)
                })
                
            }
    
            function UpdateData(){
                update(ref(db, "Comments/"+ enterID.value),{
                    Name: enterName.value,
                    Comment: enterComment.value
                })
                .then(()=>{
                    alert("Data updated successfully");
                })
                .catch((error)=>{
                    alert(error);
                });
            }
    
            function RemoveData(){
                remove(ref(db, "Comments/"+ enterID.value))
                .then(()=>{
                    alert("Data deleted successfully");
                })
                .catch((error)=>{
                    alert(error);
                });
            }

function timeStamp() {
  var now = new Date();
  var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
  var time = [now.getHours(), now.getMinutes()];
  var suffix = (time[0] < 12) ? "AM" : "PM";
  time[0] = (time[0] < 12) ? time[0] : time[0] - 12;

  for (var i = 1; i < 3; i++) {
    if (time[i] < 10) {
      time[i] = "0" + time[i];
    }
  }

  return date.join("/") + ", " + time.join(":") + " " + suffix;
}

function postComment() {
  var ID = document.getElementById("ID").value,
      name = document.getElementById("Name").value,
      comment = document.getElementById("Comment").value,
      time = timeStamp();

  if (name && comment) {
    ref.push({
      name: name,
      comment: comment,
      time: time
    });
  }

  document.getElementById("Name").value = '';
  document.getElementById("Comment").value = '';
}

ref.on("child_added", function(snapshot) {
  var comment = snapshot.val();
  addComment(comment.name, comment.comment, comment.time);
});

function addComment(name, comment, timeStamp) {
  var comments = document.getElementById("Comment");
  comments.innerHTML = "<hr><h4>" + name + " says<span>" + timeStamp + "</span></h4><p>" + comment + "</p>" + comments.innerHTML;
}

    
            insertBtn.addEventListener('click', InsertData);
            updateBtn.addEventListener('click', UpdateData);
            removeBtn.addEventListener('click', RemoveData);
            findBtn.addEventListener('click', FindData);
    
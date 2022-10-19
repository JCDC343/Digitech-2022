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

function testFunc(){
    alert("Testing JavaScript");
}

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

insertBtn.addEventListener('click', InsertData);
updateBtn.addEventListener('click', UpdateData);
removeBtn.addEventListener('click', RemoveData);
findBtn.addEventListener('click', FindData);
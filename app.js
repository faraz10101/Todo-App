const firebaseConfig = {
    apiKey: "AIzaSyAmKeLIAiUK9l-f8D-W4NxsHQv7bsBHp8k",
    authDomain: "todo-5cc47.firebaseapp.com",
    databaseURL: "https://todo-5cc47-default-rtdb.firebaseio.com",
    projectId: "todo-5cc47",
    storageBucket: "todo-5cc47.firebasestorage.app",
    messagingSenderId: "1070230957478",
    appId: "1:1070230957478:web:4bfad3752b5e92df323367"
};
firebase.initializeApp(firebaseConfig);

let database = firebase.database().ref("Todos"); // database setup

function add() {
    var todo = document.getElementById("todoItem")
    var key = Math.random().toString(36).slice(2);
    let todoSet = {
        todo: todo.value,
        key: key
    }
    database.child(key).set(todoSet)
    todo.value = "";
}

database.on("child_added", function (data) {

    // creat text filed
    var todo = document.getElementById("todoItem")
    var li = document.createElement("li")
    var liText = document.createTextNode(data.val().todo)
    li.setAttribute("class", "li")
    li.appendChild(liText)

    // creat delete button
    var delBtn = document.createElement("button")
    var btnText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("id", data.val().key)
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(btnText)

    // creat edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("id", data.val().key)
    editBtn.setAttribute("onclick", "editText(this)");

    li.appendChild(editBtn)
    li.appendChild(delBtn)
    list.appendChild(li)
})

function deleteItem(e) {
    database.child(e.id).remove();
    e.parentNode.remove();
}

function deleteAll() {
    list.innerHTML = "";
    database.set("")
}

function editText(e) {
    var newText = prompt("Enter todo you want replace")

    let todoSet = {
        todo: newText,
        key: e.id
    }
    database.child(e.id).set(todoSet)
    e.parentNode.firstChild.nodeValue = newText
}




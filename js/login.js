
function login(e) {
    e.preventDefault();
    var username = document.getElementById('alias').value;
    var password = document.getElementById('password').value;
    let user_records = new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    for(var i = 0; i < user_records.length; i++) {
        if (user_records[i] == null) {
            alert("User doesn't be existed in the server");
        }
        else if ((username == user_records[i].username) && (password == user_records[i].password)) {
            alert("Login successfully");
        }
        else if ((username != user_records[i].username) || (password != user_records[i].password)){
            alert("User name or password is not correct.")
        }
        else {
            alert("There is an error occurring during login section.");
        }
    }
}

// $(document).ready(function () {
//     var alias;
//     var password;
//
//     var userObj = {
//         user: {
//             alias: alias,
//             password: password
//         },
//         poll: []
//     };
//
//     var pollObject = {
//         question: [],
//         status: ''
//     }
//     pollObject.question.push(question1);
//
//     var question =  {
//         answer: []
//     }
//
//     var answer = {
//         answerContent: '',
//         result: true
//     }
//
//
//     // 1 poll -> có nhiều question
//     // 1 questio - > nhiều answer
//
//     //Get List item from localStorage
//     var listItems = localStorage.getItem('listItems');
// })
// variables
// general variables 

let user = {
    name: undefined,
    last_name: undefined,
    age: undefined
};

let session = {
    id: undefined,
    time: undefined,
    goal: undefined,
    status: 'active'
};


// calculator

let result = 0; 
let first_number = undefined;
let second_number = undefined;
let result_span = document.getElementById('result');
// Core functions

// Elements

let user_input_div = document.getElementById('user_input_div');
let session_input_div = document.getElementById('session_input_div');

// user data
let user_name_input = document.getElementById('user_name_input');

// session data 
let session_time = document.getElementById('session_time');


// current session div
// User greet P
let current_session_div = document.getElementById('current_session');
let user_greet_p = document.getElementById('user_greet');

// Todo module

let todo_list_li = document.getElementsByClassName('todo_list_item');
let todo_list_ul = document.getElementById('todo_list_list');
// user logs in and login div hides, time input appears
function log_in() {
    user.name = user_name_input.value;
    user_input_div.style.display = 'none';
    session_input_div.style.display = 'block';

}
;

// user inputs time, time input hides, current session div appears
function  set_session_time(){
    session.time = session_time.value;
    session_input_div.style.display = 'none';
    current_session_div.style.display = 'block';
    user_greet_p.innerText = `Hello ${user.name}, your current session time is ${session.time}.`

} 
;

// To do module
function array_mark_all (element) {
    element.className = 'todo_list_item todo_list_done';
}

;

function mark_all() {
    todo_list_li = document.getElementsByClassName('todo_list_item');
    todo_list_li = Array.from(todo_list_li);
    todo_list_li.forEach(array_mark_all); // Función de orden superior
}

;

function new_todo () {
    let new_todo = document.createElement('li')
    new_todo.innerText = document.getElementById('new_todo').value;
    new_todo.className = 'todo_list_item'
    todo_list_ul.append(new_todo);
}


;

// -- CALCULATOR FUNCTIONS
// ADDITION

function addition(first_number,second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    result = first_number + second_number;
    result_span.innerHTML = result;
    
} ;

// SUBSTRACTION

function substraction(first_number,second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    result = first_number - second_number;
    result_span.innerHTML = result;
} ;

// MULTIPLICATION

function  multiplication(first_number,second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    result = first_number * second_number;
    result_span.innerHTML = result;
} ;

// DIVISION

function division(first_number,second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    result = first_number / second_number;
    result_span.innerHTML = result;
} ;

// EXPONENTS / POWER
// first number is the base and second number is the power

function exponentiation(first_number,second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    if (second_number == 1) {
        result = first_number;
        return result;
    } else {
        for (let i = 1; i <= second_number - 1 ; i = i + 1 ) {
            
            if (i <= 1) {
                result = first_number * first_number;
            } else {
                result = result * first_number;
            }
            // console.log("it:",i,"result:",result);
            
        }
        result_span.innerHTML = result;
    }
} ;


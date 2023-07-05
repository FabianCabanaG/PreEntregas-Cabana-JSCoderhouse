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

// weather
let ubicacion;
let lat;
let long;
let respuesta_limpia;
let apikey = "52dda323b71c0e00cb51f86c5aedc570";


// calculator

let result = 0;
let first_number = undefined;
let second_number = undefined;
let result_span = document.getElementById('result');

let addition_button = document.getElementById('button_addition')
let substraction_button = document.getElementById('button_substraction')
let multiplication_button = document.getElementById('button_multiplication')
let division_button = document.getElementById('button_division')
let exponentiation_button = document.getElementById('button_exponentiation')
// Core functions

// Elements

let user_input_div = document.getElementById('user_input_div');
let session_input_div = document.getElementById('session_input_div');

// user data
let user_name_input = document.getElementById('user_name_input');
let user_input_button = document.getElementById('button_log_in');

// session data 
let session_time = document.getElementById('session_time');


// current session div
// User greet P
let current_session_div = document.getElementById('current_session');
let user_greet_p = document.getElementById('user_greet');



let session_toast = Toastify({
    text: `Session started ${user.name}`,
    position: "left",
})
;

// Todo module

let todo_list_li = document.getElementsByClassName('todo_list_item');
let todo_list_ul = document.getElementById('todo_list_list');
let new_todo_button = document.getElementById('button_new_todo');
let mark_all_button = document.getElementById('button_mark_all');


// functions
// user logs in and login div hides, time input appears
function log_in() {
    if (user_name_input.value === '' || session_time.value === '') {
        alert('You should write something!')
    } else {
        user.name = user_name_input.value;
        user_input_div.style.display = 'none';
        session.time = session_time.value;
        current_session_div.style.display = 'block';
        user_greet_p.innerText = `Hello ${user.name}, your current session time is ${session.time}.`

        session_toast.showToast();
    }


}
;

user_input_button.addEventListener('click', log_in);
;



// To do module
function array_mark_all(element) {
    element.className = 'todo_list_item todo_list_done';
}

;

function mark_all() {
    todo_list_li = document.getElementsByClassName('todo_list_item');
    todo_list_li = Array.from(todo_list_li);
    todo_list_li.forEach(array_mark_all); // Función de orden superior
}

;
mark_all_button.addEventListener('click',mark_all)
;
function new_todo() {
    
    let new_todo_input = document.getElementById('new_todo')
    function todo_add () {
    let new_todo = document.createElement('li')
    new_todo.innerText = new_todo_input.value;
    new_todo.className = 'todo_list_item'
    todo_list_ul.append(new_todo);
    };

    new_todo_input.value == '' ? alert('You should write a new todo!') : todo_add(); // terniary operator


}

;
new_todo_button.addEventListener('click',new_todo)
;

// -- CALCULATOR FUNCTIONS
// ADDITION

function addition(first_number, second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    result = first_number + second_number;
    result_span.innerHTML = result;

};

// SUBSTRACTION

function substraction(first_number, second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    result = first_number - second_number;
    result_span.innerHTML = result;
};

// MULTIPLICATION

function multiplication(first_number, second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    result = first_number * second_number;
    result_span.innerHTML = result;
};

// DIVISION

function division(first_number, second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    result = first_number / second_number;
    result_span.innerHTML = result;
};

// EXPONENTS / POWER
// first number is the base and second number is the power

function exponentiation(first_number, second_number) {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    first_number = parseInt(first_number);
    second_number = parseInt(second_number);
    if (second_number == 1) {
        result = first_number;
        return result;
    } else {
        for (let i = 1; i <= second_number - 1; i = i + 1) {

            if (i <= 1) {
                result = first_number * first_number;
            } else {
                result = result * first_number;
            }
            // console.log("it:",i,"result:",result);

        }
        result_span.innerHTML = result;
    }
};

addition_button.addEventListener('click',addition);
substraction_button.addEventListener('click',substraction);
multiplication_button.addEventListener('click',multiplication);
division_button.addEventListener('click',division);
exponentiation_button.addEventListener('click',exponentiation);

// weather

function mostrarPosicion(posicion) {
    ubicacion = posicion;
    lat = posicion.coords.latitude;
    long = posicion.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`)
        .then(response => response.json())
        .then(data => respuesta_limpia = data)
        .then(function () {
            let div = document.getElementById('weather');

            let new_node = document.createElement('h1');

            new_node.innerText = `Temperature: ${respuesta_limpia.main.temp}
                                Humidity: ${respuesta_limpia.main.humidity}
                                Weather: ${respuesta_limpia.weather[0].description}                     
                    `
                ;

            div.append(new_node)

                ;
        }

        )



};
navigator.geolocation.getCurrentPosition(mostrarPosicion);



//  CALCULATOR 

// FUNCTIONS

// ADDITION

let result = 0; 

function addition(first_number,second_number) {
    result = first_number + second_number;
    return result;
} 

// SUBSTRACTION

function substraction(first_number,second_number) {
    result = first_number - second_number;
    return result;
} 

// MULTIPLICATION

function  multiplication(first_number,second_number) {
    result = first_number * second_number;
    return result;
} 

// DIVISION

function division(first_number,second_number) {
    result = first_number / second_number;
    return result;
} 

// EXPONENTS / POWER
// first number is the base and second number is the power

function exponentiation(first_number,second_number) {
    
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
        return result;
    }




    
    // return result;
} 

let mensaje =  prompt("Bienvenido a la calculadora, por favor, selecciona el tipo de operación que deseas usar. Elije entre Suma, Resta, Multiplicacion, Division o Potenciacion.");

if (mensaje === 'Suma') {
    first_number = parseInt(prompt("Ingresa el primer número"));
    second_number = parseInt(prompt("Ingresa el segundo número"));
    
    addition(first_number,second_number);
    console.log(result);

} 
else if (mensaje === 'Resta')
{
    first_number = parseInt(prompt("Ingresa el minuendo"));
    second_number = parseInt(prompt("Ingresa el sustraendo"));
    
    substraction(first_number,second_number);
    console.log(result);
}
else if (mensaje === 'Multiplicacion')
{
    first_number = parseInt(prompt("Ingresa el primer número"));
    second_number = parseInt(prompt("Ingresa el segundo número"));
    
    multiplication(first_number,second_number);
    console.log(result);
}

else if (mensaje === 'Division')
{
    first_number = parseInt(prompt("Ingresa el dividendo"));
    second_number = parseInt(prompt("Ingresa el divisor"));
    
    division(first_number,second_number);
    console.log(result);
}

else if (mensaje === 'Potenciacion')
{
    first_number = parseInt(prompt("Ingresa la base"));
    second_number = parseInt(prompt("Ingresa la potencia"));
    
    exponentiation(first_number,second_number);
    console.log(result);
}

else {
    console.log("Recarga la página, no ingresaste un valor válido.");
}




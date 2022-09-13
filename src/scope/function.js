function greeting() {
    let userName = 'Ana';
    console.log(userName); 
    
    if (userName === 'Ana') {
        console.log(`Hello! ${userName}`);
    };
};

greeting();
console.log(userName); // como la declaramos adentro de la funcion no anda fuera de la misma FUNCTION SCOPE
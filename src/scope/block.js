function fruits() {
    //las variables definidas dentro de un bloque, solo andan dentro del bloque NO SE USA MAS VAR, LET Y CONST NOMAS   
    if (true) {
      var fruit1 = 'Apple'; //function scope
      let fruit2 = 'Kiwi'; //block scope NO ANDAN EN LA FUNCION PQ YA ESTAN EN EL IF
      const fruit3 = 'Banana'; //block scope NO ANDAN EN LA FUNCION PQ YA ESTAN EN EL IF
        // console.log(fruit2);
        // console.log(fruit3); aca si andarian
    };
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};
fruits();
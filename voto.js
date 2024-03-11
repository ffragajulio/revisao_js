const age = 20;

if (age < 16){
    console.log("não possui idade para votar");
} else if (age >= 70 && age < 18) {
    console.log("facultativo");
} else {
    console.log("obrigatório");
}
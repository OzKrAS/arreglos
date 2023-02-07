hora = -50

if (hora <= 0 || hora > 24) {
    console.log("hora no valida");
} else if (hora < 12) {
    if (hora <= 10) {
        console.log(`hora del desayuno`);
    } else {
        console.log(`hora de la media manana`);
    }
} else if (hora < 18) {
    if (hora <= 16) {
        console.log(`hora del almuerzo`);
    } else {
        console.log(`hora de las onces`);
    }
} else {
    if (hora <= 20) {
        console.log(`es hora de la comida`);
    } else {
        console.log(`es horta dde dormir`);
    }
}


// and o

// y o

// &&  ||


// divide y venceras
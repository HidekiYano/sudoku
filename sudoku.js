var n = 3
var zeros = 81

var numeros = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0]]

var colunas = [[numeros[0][0], numeros[1][0], numeros[2][0], numeros[3][0], numeros[4][0], numeros[5][0], numeros[6][0], numeros[7][0], numeros[8][0]],
               [numeros[0][1], numeros[1][1], numeros[2][1], numeros[3][1], numeros[4][1], numeros[5][1], numeros[6][1], numeros[7][1], numeros[8][1]],
               [numeros[0][2], numeros[1][2], numeros[2][2], numeros[3][2], numeros[4][2], numeros[5][2], numeros[6][2], numeros[7][2], numeros[8][2]],
               [numeros[0][3], numeros[1][3], numeros[2][3], numeros[3][3], numeros[4][3], numeros[5][3], numeros[6][3], numeros[7][3], numeros[8][3]],
               [numeros[0][4], numeros[1][4], numeros[2][4], numeros[3][4], numeros[4][4], numeros[5][4], numeros[6][4], numeros[7][4], numeros[8][4]],
               [numeros[0][5], numeros[1][5], numeros[2][5], numeros[3][5], numeros[4][5], numeros[5][5], numeros[6][5], numeros[7][5], numeros[8][5]],
               [numeros[0][6], numeros[1][6], numeros[2][6], numeros[3][6], numeros[4][6], numeros[5][6], numeros[6][6], numeros[7][6], numeros[8][6]],
               [numeros[0][7], numeros[1][7], numeros[2][7], numeros[3][7], numeros[4][7], numeros[5][7], numeros[6][7], numeros[7][7], numeros[8][7]],
               [numeros[0][8], numeros[1][8], numeros[2][8], numeros[3][8], numeros[4][8], numeros[5][8], numeros[6][8], numeros[7][8], numeros[8][8]]
              ]

function quadrante1(numero) {
    var quadrante = [numero[0][0], numero[0][1], numero[0][2], numero[1][0], numero[1][1], numero[1][2], numero[2][0], numero[2][1], numero[2][2]]
    var repeticao = 0
    var nulos = 0
    var valido = false

    for(let i = 0; i < 9; i++) {
        if(quadrante[i] == 0) {
            nulos++
        }
        if(quadrante[0] != 0 && quadrante[0] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[1] != 0 && quadrante[1] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[2] != 0 && quadrante[2] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[3] != 0 && quadrante[3] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[4] != 0 && quadrante[4] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[5] != 0 && quadrante[5] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[6] != 0 && quadrante[6] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[7] != 0 && quadrante[7] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[8] != 0 && quadrante[8] == quadrante[i]) {
            repeticao++
        }
    }
    if(repeticao > (9 - nulos)) {
        valido = false
    } else {
        valido = true
    }
    return valido
}

function quadrante2(numero) {
    var quadrante = [numero[0][3], numero[0][4], numero[0][5], numero[1][3], numero[1][4], numero[1][5], numero[2][3], numero[2][4], numero[2][5]]
    var repeticao = 0
    var nulos = 0
    var valido = false

    for(let i = 0; i < 9; i++) {
        if(quadrante[i] == 0) {
            nulos++
        }
        if(quadrante[0] != 0 && quadrante[0] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[1] != 0 && quadrante[1] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[2] != 0 && quadrante[2] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[3] != 0 && quadrante[3] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[4] != 0 && quadrante[4] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[5] != 0 && quadrante[5] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[6] != 0 && quadrante[6] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[7] != 0 && quadrante[7] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[8] != 0 && quadrante[8] == quadrante[i]) {
            repeticao++
        }
    }
    if(repeticao > (9 - nulos)) {
        valido = false
    } else {
        valido = true
    }
    return valido
}

function quadrante3(numero) {
    var quadrante = [numero[0][6], numero[0][7], numero[0][8], numero[1][6], numero[1][7], numero[1][8], numero[2][6], numero[2][7], numero[2][8]]
    var repeticao = 0
    var nulos = 0
    var valido = false

    for(let i = 0; i < 9; i++) {
        if(quadrante[i] == 0) {
            nulos++
        }
        if(quadrante[0] != 0 && quadrante[0] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[1] != 0 && quadrante[1] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[2] != 0 && quadrante[2] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[3] != 0 && quadrante[3] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[4] != 0 && quadrante[4] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[5] != 0 && quadrante[5] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[6] != 0 && quadrante[6] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[7] != 0 && quadrante[7] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[8] != 0 && quadrante[8] == quadrante[i]) {
            repeticao++
        }
    }
    if(repeticao > (9 - nulos)) {
        valido = false
    } else {
        valido = true
    }
    return valido
}

function quadrante4(numero) {
    var quadrante = [numero[3][0], numero[3][1], numero[3][2], numero[4][0], numero[4][1], numero[4][2], numero[5][0], numero[5][1], numero[5][2]]
    var repeticao = 0
    var nulos = 0
    var valido = false

    for(let i = 0; i < 9; i++) {
        if(quadrante[i] == 0) {
            nulos++
        }
        if(quadrante[0] != 0 && quadrante[0] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[1] != 0 && quadrante[1] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[2] != 0 && quadrante[2] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[3] != 0 && quadrante[3] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[4] != 0 && quadrante[4] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[5] != 0 && quadrante[5] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[6] != 0 && quadrante[6] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[7] != 0 && quadrante[7] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[8] != 0 && quadrante[8] == quadrante[i]) {
            repeticao++
        }
    }
    if(repeticao > (9 - nulos)) {
        valido = false
    } else {
        valido = true
    }
    return valido
}

function quadrante5(numero) {
    var quadrante = [numero[3][3], numero[3][4], numero[3][5], numero[4][3], numero[4][4], numero[4][5], numero[5][3], numero[5][4], numero[5][5]]
    var repeticao = 0
    var nulos = 0
    var valido = false

    for(let i = 0; i < 9; i++) {
        if(quadrante[i] == 0) {
            nulos++
        }
        if(quadrante[0] != 0 && quadrante[0] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[1] != 0 && quadrante[1] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[2] != 0 && quadrante[2] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[3] != 0 && quadrante[3] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[4] != 0 && quadrante[4] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[5] != 0 && quadrante[5] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[6] != 0 && quadrante[6] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[7] != 0 && quadrante[7] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[8] != 0 && quadrante[8] == quadrante[i]) {
            repeticao++
        }
    }
    if(repeticao > (9 - nulos)) {
        valido = false
    } else {
        valido = true
    }
    return valido
}

function quadrante6(numero) {
    var quadrante = [numero[3][6], numero[3][7], numero[3][8], numero[4][6], numero[4][7], numero[4][8], numero[5][6], numero[5][7], numero[5][8]]
    var repeticao = 0
    var nulos = 0
    var valido = false

    for(let i = 0; i < 9; i++) {
        if(quadrante[i] == 0) {
            nulos++
        }
        if(quadrante[0] != 0 && quadrante[0] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[1] != 0 && quadrante[1] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[2] != 0 && quadrante[2] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[3] != 0 && quadrante[3] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[4] != 0 && quadrante[4] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[5] != 0 && quadrante[5] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[6] != 0 && quadrante[6] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[7] != 0 && quadrante[7] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[8] != 0 && quadrante[8] == quadrante[i]) {
            repeticao++
        }
    }
    if(repeticao > (9 - nulos)) {
        valido = false
    } else {
        valido = true
    }
    return valido
}

function quadrante7(numero) {
    var quadrante = [numero[6][0], numero[6][1], numero[6][2], numero[7][0], numero[7][1], numero[7][2], numero[8][0], numero[8][1], numero[8][2]]
    var repeticao = 0
    var nulos = 0
    var valido = false

    for(let i = 0; i < 9; i++) {
        if(quadrante[i] == 0) {
            nulos++
        }
        if(quadrante[0] != 0 && quadrante[0] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[1] != 0 && quadrante[1] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[2] != 0 && quadrante[2] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[3] != 0 && quadrante[3] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[4] != 0 && quadrante[4] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[5] != 0 && quadrante[5] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[6] != 0 && quadrante[6] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[7] != 0 && quadrante[7] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[8] != 0 && quadrante[8] == quadrante[i]) {
            repeticao++
        }
    }
    if(repeticao > (9 - nulos)) {
        valido = false
    } else {
        valido = true
    }
    return valido
}

function quadrante8(numero) {
    var quadrante = [numero[6][3], numero[6][4], numero[6][5], numero[7][3], numero[7][4], numero[7][5], numero[8][3], numero[8][4], numero[8][5]]
    var repeticao = 0
    var nulos = 0
    var valido = false

    for(let i = 0; i < 9; i++) {
        if(quadrante[i] == 0) {
            nulos++
        }
        if(quadrante[0] != 0 && quadrante[0] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[1] != 0 && quadrante[1] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[2] != 0 && quadrante[2] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[3] != 0 && quadrante[3] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[4] != 0 && quadrante[4] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[5] != 0 && quadrante[5] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[6] != 0 && quadrante[6] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[7] != 0 && quadrante[7] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[8] != 0 && quadrante[8] == quadrante[i]) {
            repeticao++
        }
    }
    if(repeticao > (9 - nulos)) {
        valido = false
    } else {
        valido = true
    }
    return valido
}

function quadrante9(numero) {
    var quadrante = [numero[6][6], numero[6][7], numero[6][8], numero[7][6], numero[7][7], numero[7][8], numero[8][6], numero[8][7], numero[8][8]]
    var repeticao = 0
    var nulos = 0
    var valido = false

    for(let i = 0; i < 9; i++) {
        if(quadrante[i] == 0) {
            nulos++
        }
        if(quadrante[0] != 0 && quadrante[0] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[1] != 0 && quadrante[1] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[2] != 0 && quadrante[2] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[3] != 0 && quadrante[3] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[4] != 0 && quadrante[4] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[5] != 0 && quadrante[5] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[6] != 0 && quadrante[6] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[7] != 0 && quadrante[7] == quadrante[i]) {
            repeticao++
        }
        if(quadrante[8] != 0 && quadrante[8] == quadrante[i]) {
            repeticao++
        }
    }
    if(repeticao > (9 - nulos)) {
        valido = false
    } else {
        valido = true
    }
    return valido
}

function contadorZeros(numeros) {
    var qtdZeros = 0
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(numeros[i][j] == 0) {
                qtdZeros++
            }
        }
    }
    return qtdZeros
}

while(zeros > 42) {
    for(let j = 0; j < n * n; j++) {
        for(let i = 0; i < n * n; i++) {
            var rng = Math.floor(Math.random() * 10) + 1
            if(rng > 7) {
                var numeroAleatorio = Math.floor(Math.random() * 9) + 1
                if(!numeros[j].includes(numeroAleatorio) && !colunas[i].includes(numeroAleatorio)) {
                    numeros[j][i] = numeroAleatorio
                    colunas[i][j] = numeroAleatorio
                    if(quadrante1(numeros) == true && quadrante2(numeros) == true && quadrante3(numeros) == true && quadrante4(numeros) == true && quadrante5(numeros) == true && quadrante6(numeros) == true && quadrante7(numeros) == true && quadrante8(numeros) == true && quadrante9(numeros) == true) {
                        zeros = contadorZeros(numeros)
                        contador = 81 - zeros
                    } else {
                        numeros[j][i] = 0
                        colunas[i][j] = 0
                    }
                    if(contador > 38) {
                        break
                    }
                }
            }
        }
    }
}
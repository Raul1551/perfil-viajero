var array = [];
var checks = document.querySelectorAll('.datoInput');
var arrayOrder = [];
var maximo = 0;

var boton = document.getElementById('boton');
boton.addEventListener('click', catchData,  false);

function catchData(array) {

    array = [];
    checks.forEach((e) => {
        if (e.checked == true) {
            array.push(e.value);
        }
    });

    arrayOrder = array.sort();
    var became = sessionStorage.setItem('pregunta14', JSON.stringify(arrayOrder));
    console.log(became);


    let unicoElemento = [];
    let vecesRepetido = [];
    let contador = 1;

    for (let i = 0; i < arrayOrder.length; i++) {
        if (arrayOrder[i + 1] === arrayOrder[i]) {
            console.log("Se repite: " + arrayOrder[i]);
            contador++;
        } else {
            unicoElemento.push(arrayOrder[i]);
            vecesRepetido.push(contador);
            contador = 1;
        }
    }
    console.log(unicoElemento);
    console.log(vecesRepetido);

    for (let j = 0; j < unicoElemento.length; j++) {
        console.log("El valor de " + unicoElemento[j] + " se repite " + vecesRepetido[j] + " veces.");
    }

    maximo = vecesRepetido.reduce(function (a, b) {
        return Math.max(a, b);
    });

    const masRepetido = ar => arrayOrder.reduce((acum, el, i, ar) => {
        const count = ar.filter(e => e == el).length;
        return count > acum[1] ? [el, count] : acum
    }, [" ", 0]);

    console.log("==============");
    console.log("El elemento que más número de veces se repite son: " + maximo + " veces.");
    console.log("El elemento que más se repite es: " + masRepetido(arrayOrder) + " veces.");

    
    /*var blob = new Blob([conv_json], {
        type: "text/plain;charset=utf-8"
    });

    saveAs(blob, conv_json);*/

    window.location.href = "/index-perfilViajero.html";

};

checkbox1 = document.getElementById('check114')
checkbox1.checked = eval(window.sessionStorage.getItem(checkbox1.id))

checkbox1.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox1.id, checkbox1.checked)
});
checkbox2 = document.getElementById('check214')
checkbox2.checked = eval(window.sessionStorage.getItem(checkbox2.id))

checkbox2.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox2.id, checkbox2.checked)
});
checkbox3 = document.getElementById('check314')
checkbox3.checked = eval(window.sessionStorage.getItem(checkbox3.id))

checkbox3.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox3.id, checkbox3.checked)
});
checkbox4 = document.getElementById('check414')
checkbox4.checked = eval(window.sessionStorage.getItem(checkbox4.id))

checkbox4.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox4.id, checkbox4.checked)
});
checkbox5 = document.getElementById('check514')
checkbox5.checked = eval(window.sessionStorage.getItem(checkbox5.id))

checkbox5.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox5.id, checkbox5.checked)
});
checkbox6 = document.getElementById('check614')
checkbox6.checked = eval(window.sessionStorage.getItem(checkbox6.id))

checkbox6.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox6.id, checkbox6.checked)
});
checkbox7 = document.getElementById('check714')
checkbox7.checked = eval(window.sessionStorage.getItem(checkbox7.id))

checkbox7.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox7.id, checkbox7.checked)
});
checkbox8 = document.getElementById('check814')
checkbox8.checked = eval(window.sessionStorage.getItem(checkbox8.id))

checkbox8.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox8.id, checkbox8.checked)
});
/*function elQueMasAparece() {

    var array = ["astroturismo", "gastronomico", "astroturismo", "historico", "astroturismo", "astroturismo", "astroturismo"];
    var array1 = ["historico", "wellnes", "astroturismo", "gastronomico", "outdoors", "historico"];
    var array2 = ["outdoors", "astroturismo", "outdoors", "outdoors", "gastronomico", "outdoors"];
    var array3 = ["historico", "historico", "historico", "outdoors", "outdoors", "outdoors", "outdoors", "outdoors"];


    console.log(array, array1, array2, array3);

    var arrayTotal = [...array1, ...array, ...array2, ...array3];


    var arrayOrder = arrayTotal.sort();
    console.log(arrayOrder);

    let mapeo = {};
    let mas_frecuente = "";
    let valor_mayor = 0;

    if (typeof arrayOrder === "string") {
        arrayOrder = arrayOrder.split(" ");
    }

    for (let elemento of arrayOrder) {
        if (mapeo[elemento]) {
            mapeo[elemento]++;
        } else {
            mapeo[elemento] = 1;
        }

    };

    for (let elemento in mapeo) {
        if (mapeo[elemento] > valor_mayor) {
            valor_mayor = mapeo[elemento];
            mas_frecuente = elemento;
        }
    }

    
    return {
        "mas_frecuente": mas_frecuente,
        "valor_mayor": valor_mayor
    };

    
    
};

console.log(elQueMasAparece());
*/

var resultado4 = JSON.parse(sessionStorage.getItem("pregunta4"));
var resultado7 = JSON.parse(sessionStorage.getItem("pregunta7"));
var resultado8 = JSON.parse(sessionStorage.getItem("pregunta8"));
var resultado10 = JSON.parse(sessionStorage.getItem("pregunta10"));
var resultado11 = JSON.parse(sessionStorage.getItem("pregunta11"));
var resultado12 = JSON.parse(sessionStorage.getItem("pregunta12"));
var resultado13 = JSON.parse(sessionStorage.getItem("pregunta13"));
var resultado14 = JSON.parse(sessionStorage.getItem("pregunta14"));

function elQueMasAparece() {

    var valorDesdeLS = document.getElementById('valorDesdeLS');

    const imgAstroturismo = document.createElement('img');
    const imgGastronomico = document.createElement('img');
    const imgHistorico = document.createElement('img');
    const imgWellness = document.createElement('img');
    const imgOutdoors = document.createElement('img');
    imgGastronomico.src = 'img/gastronomico.jpg';
    imgAstroturismo.src = 'img/astroturismo.jpg';
    imgHistorico.src = 'img/historico.jpg';
    imgWellness.src = 'img/wellness.jpg';
    imgOutdoors.src = 'img/aventura.jpg';

    var arrayTotal = [...resultado4, ...resultado7, ...resultado8, ...resultado10, ...resultado11, ...resultado12, ...resultado13, ...resultado14];
    var arrayOrder = arrayTotal.sort();
    console.log(arrayOrder);

    var mapeo = {};
    var mas_frecuente = "";
    var valor_mayor = 0;

    if (typeof arrayOrder === "string") {
        arrayOrder = arrayOrder.split(" ");
    }

    for (let elemento of arrayOrder) {
        if (mapeo[elemento]) {
            mapeo[elemento]++;
        } else {
            mapeo[elemento] = 1;
        }

    };

    for (let elemento in mapeo) {
        if (mapeo[elemento] > valor_mayor) {
            valor_mayor = mapeo[elemento];
            mas_frecuente = elemento;
        }
    }

    if(mas_frecuente === 'astroturismo'){
        valorDesdeLS.innerHTML =  mas_frecuente;
        document.querySelector('.container').appendChild(imgAstroturismo)
    }else if (mas_frecuente === 'gastronomico'){
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appChild(imgGastronomico)
    }else if(mas_frecuente === 'historico'){
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgHistorico)
    }else if(mas_frecuente === 'wellness'){
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgWellness)
    }else if(mas_frecuente === 'outdoors'){
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgOutdoors)
    }

    /*return [mas_frecuente, valor_mayor];*/
};


var button = document.getElementById('button-final');
button.addEventListener('click', () => {
    elQueMasAparece();
});




var resultado4 = JSON.parse(sessionStorage.getItem("pregunta4"));
var resultado7 = JSON.parse(sessionStorage.getItem("pregunta7"));
var resultado8 = JSON.parse(sessionStorage.getItem("pregunta8"));
var resultado10 = JSON.parse(sessionStorage.getItem("pregunta10"));
var resultado11 = JSON.parse(sessionStorage.getItem("pregunta11"));
var resultado12 = JSON.parse(sessionStorage.getItem("pregunta12"));
var resultado13 = JSON.parse(sessionStorage.getItem("pregunta13"));
var resultado14 = JSON.parse(sessionStorage.getItem("pregunta14"));

function elQueMasAparece() {

    /*const valorDesdeLS = document.getElementById('valorDesdeLS');*/

    /*const imgAstroturismo = document.createElement('img');
    const imgGastronomico = document.createElement('img');
    const imgHistorico = document.createElement('img');
    const imgWellness = document.createElement('img');
    const imgOutdoors = document.createElement('img');
    imgGastronomico.src = 'img/gastronomico.jpg';
    imgAstroturismo.src = 'img/astroturismo.jpg';
    imgHistorico.src = 'img/historico.jpg';
    imgWellness.src = 'img/wellness.jpg';
    imgOutdoors.src = 'img/aventura.jpg';*/


    const linkAstro = "https://udestinations.es/su-perfil-viajero-es-astroturismo";
    const linkGastro = "https://udestinations.es/su-perfil-viajero-es-gastronomico";
    const linkHisto = "https://udestinations.es/su-perfil-viajero-es-historico-cultural";
    const linkOut = "https://udestinations.es/tu-perfil-viajero-es-outdoors-aventura";
    const linkWell = "https://udestinations.es/su-perfil-viajero-es-wellnex-relax";

    /*const elementAstro = document.createElement('a');
    const elementGastro = document.createElement('a');
    const elementHisto = document.createElement('a');
    const elementWell = document.createElement('a');
    const elementOut = document.createElement('a');*/

   
    


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

    /*elementAstro.setAttribute("href", linkAstro);
    /*elementAstro.innerHTML = "Acceder al siguiente enlace para más información sobre turismo " + mas_frecuente;*/

    /*elementGastro.setAttribute("href", linkGastro);
    elementGastro.innerHTML = "Acceder al siguiente enlace para más información sobre turismo " + mas_frecuente;

    elementHisto.setAttribute("href", linkHisto);
    elementHisto.innerHTML = "Acceder al siguiente enlace para más información sobre turismo " + mas_frecuente;

    elementWell.setAttribute("href", linkWell);
    elementWell.innerHTML = "Acceder al siguiente enlace para más información sobre turismo " + mas_frecuente;

    elementOut.setAttribute("href", linkOut);
    elementOut.innerHTML = "Acceder al siguiente enlace para más información sobre turismo " + mas_frecuente;*/

    if(mas_frecuente === 'astroturismo'){
        window.location.href = linkAstro;
        /*valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgAstroturismo)
        document.body.appendChild(elementAstro)*/
    }else if (mas_frecuente === 'gastronomico'){
        window.location.href = linkGastro;
        /*valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgGastronomico)
        document.body.appendChild(elementGastro)*/
    }else if(mas_frecuente === 'historico'){
        window.location.href = linkHisto;
        /*valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgHistorico)
        document.body.appendChild(elementHisto)*/
    }else if(mas_frecuente === 'wellness'){
        window.location.href = linkWell;
        /*valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgWellness)
        document.body.appendChild(elementWell)*/
    }else if(mas_frecuente === 'outdoors'){
        window.location.href = linkOut;
        /*valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgOutdoors)
        document.body.appendChild(elementOut)*/
    }

    /*return [mas_frecuente, valor_mayor];*/
};



var button = document.getElementById('button-final');
button.addEventListener('click', () => {
    elQueMasAparece();
});




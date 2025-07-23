const objFullExcuse = {
    arrayWho: ['Un perro ', 'Un ángel ','Una vieja ', 'Donald Trump ','Roberto Torres ','Javier Verón ', 'El cartero ', 'Bad Bunny ','Un dinosaurio ', 'Un gato ','Batman ','Un alien ', 'Toda la población de Uganda ', 'Una señora china ', 'Un testigo de Jehova ','El vecino de arriba ','Elon Musk ', 'Pedro Sánchez ','Ibai Llanos ','Un gnomo muy enfadado ','Un streamer '],
    arrayAction: ['cortó por la mitad ','mordió ', 'se comió ', 'explotó ','tiró por la ventana ','robó ','destruyó con un láser ','vendió ','convirtió en oveja ','hackeó ','compró ','vendió en el mercado negro ','se tropezó con ','creó un modelo realista escala 1:1 de '],
    arrayWhat: ['mi ordenador ','la base de datos ','la luna ','toda la vida de este planeta ','el sol ','la carretera ','las Islas Canarias ','el mercado de valores, provocando así una crisis global económica ', 'mi casa ', 'mi coche ', 'la caja de Pandora '],
    arrayWhen: ['de camino al trabajo.', 'mientras dormía.','mientras practicaba JavaScript.','mientras hacía ejercicio.','durante el almuerzo.','mientras grababa un documental sobre pingüinos.','cuando paseaba mi caracol.','mientras hacía la compra.']
};

function randomArrayElement(arrayParam) {
    const index = Math.floor(Math.random() * arrayParam.length);
    return arrayParam[index];
}

function generateExcuse(objParam){
    let fullPhrase ="";
    for (let key in objParam){
        let randomPart = randomArrayElement(objParam[key]);
        fullPhrase = fullPhrase + randomPart;
    }
    return fullPhrase;
}

function callExcuse(){
  const excuse = generateExcuse(objFullExcuse);
  document.getElementById("excuse").innerText = excuse;
}

window.onload = function () {
  callExcuse();
};
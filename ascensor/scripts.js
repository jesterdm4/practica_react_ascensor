const d = document;

function callAscensor(piso) {
  const ascensores = d.getElementsByClassName("ascensorC")
  


    for (let index = 0; index < ascensores.length; index++) {
    
    
        if (piso === index) {

                   setTimeout(function () {
                    ascensores[index].setAttribute("src","ascensorEnMedio.jpg");
            },250);
            
            setTimeout(function () {
                ascensores[index].setAttribute("src","ascensorAbierto.jpg");
            },500);

        }else{

            ascensores[index].setAttribute("src","ascensorCerrado.jpg");


         }




    }



};



/*


document.getElementById("botonPiso4").addEventListener("click", () => {

    setTimeout(function () {
        document.getElementByClassName("ascensorA").setAttribute("src","ascensorEnMedio.jpg");
    },250);

    setTimeout(function () {
        document.getElementByClassName("ascensorA").setAttribute("src","ascensorCerrado.jpg");
    },500);

    document.getElementByClassName("ascensorA").setAttribute("class","ascensorC");  

});

document.getElementById("botonPiso4").addEventListener("click", () => {

    setTimeout(function () {
       document.getElementById("ascensorCerrado4").setAttribute("src", "ascensorEnMedio.jpg"); 
       }, 1000);

       setTimeout(function () {
        document.getElementById("ascensorCerrado4").setAttribute("src", "ascensorAbierto.jpg"); 
       },  1500);

       document.getElementById("ascensorCerrado4").setAttribute("class","ascensorA")
});





document.getElementById("botonPiso3").addEventListener("click", () => {

    setTimeout(function () {
        document.getElementByClassName("ascensorA").setAttribute("src","ascensorEnMedio.jpg");
    },250);

    setTimeout(function () {
        document.getElementByClassName("ascensorA").setAttribute("src","ascensorCerrado.jpg");
    },500);

    document.getElementByClassName("ascensorA").setAttribute("class","ascensorC");  

});

document.getElementById("botonPiso3").addEventListener("click", () => {

    setTimeout(function () {
       document.getElementById("ascensorCerrado3").setAttribute("src", "ascensorEnMedio.jpg"); 
       }, 1000);

       setTimeout(function () {
        document.getElementById("ascensorCerrado3").setAttribute("src", "ascensorAbierto.jpg"); 
       },  1500);

       document.getElementById("ascensorCerrado3").setAttribute("class","ascensorA")
});

document.getElementById("botonPiso2").addEventListener("click", () => {

    setTimeout(function () {
       document.getElementById("ascensorCerrado2").setAttribute("src", "ascensorEnMedio.jpg"); 
       }, 1000);

       setTimeout(function () {
        document.getElementById("ascensorCerrado2").setAttribute("src", "ascensorAbierto.jpg"); 
       },  1500);

       document.querySelector(".ascensorC").setAttribute("class","ascensorA")

});

document.getElementById("botonPiso1").addEventListener("click", () => {

    setTimeout(function () {
       document.getElementById("ascensorCerrado1").setAttribute("src", "ascensorEnMedio.jpg"); 
       }, 1000);

       setTimeout(function () {
        document.getElementById("ascensorCerrado1").setAttribute("src", "ascensorAbierto.jpg"); 
       },  1500);

       document.querySelector(".ascensorC").setAttribute("class","ascensorA")
});

document.getElementById("botonPlanta").addEventListener("click", () => {

    setTimeout(function () {
       document.getElementById("ascensorCerradoPb").setAttribute("src", "ascensorEnMedio.jpg"); 
       }, 1000);

       setTimeout(function () {
        document.getElementById("ascensorCerradoPb").setAttribute("src", "ascensorAbierto.jpg"); 
       },  1500);

       document.querySelector(".ascensorC").setAttribute("class","ascensorA")
});

*/
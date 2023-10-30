
const container = document.querySelector('.container');
const petsanar = document.querySelector('.petsanar');
const clickenter = document.querySelector('.entertext');
const contenedoracciones = document.querySelector('.contenedoracciones');
const imgfondo = document.querySelector('.imgfondo');
const imgbtns = document.querySelectorAll('.imgbtn'); //botonos empresas, veterinarios y otros profesionales y personas
const contenedorregistros = document.querySelector('.contenedorregistros');
let controlevent = 0;

document.addEventListener('DOMContentLoaded', function(){ 
    clickentrar();  //cuando se da clic en entrar
    clickbtnsusers(); //cuando se da clic en empresas, veterinarios y otros....,  ciudadanos
 });


function clickentrar(){
    clickenter.addEventListener('click', ()=>{
        contenedoracciones.classList.add('contenedoracciones-js');
        imgfondo.src = "/build/img/BANNER2.jpg";
        imgfondo.classList.add('escalarimg-js');
        petsanar.classList.add('petsanarjs');
    });
}

function clickbtnsusers(){ //click a los 3 btns empresas, veterinarios y profesionales y ciudadanos
    imgbtns.forEach(imgbtn=>{
        imgbtn.addEventListener('click', (e)=>{
            container.classList.add('container-js');  //para dividir la pantalla
            petsanar.style = "border-left: none";
            petsanar.querySelector('.circulo').style = "display: none";
            contenedorregistros.classList.add('contenedorregistros-js'); //clase para mostar el lado derecho de la pantalla
            contenedoracciones.querySelector('.contenedor-btns').style = "opacity: 0";
            ordenarbtnsbarra(imgbtn.dataset.id);
        });
    });
}
function ordenarbtnsbarra(tipousuario){
    const formulario = document.querySelectorAll('.seccionform');
    if(tipousuario === 'empresas'){
        const rutaimg = ["/build/img/edificio-de-oficinas.png", "/build/img/ley-1.png", "/build/img/grupo-1.png"];
        const ids = ["empresas", "profesionales", "ciudadanos"];
        setattrbtnsbarra("/build/img/akita.jpg", 'Empresas', rutaimg, ids);
        formulario[2].classList.remove('mostrarseccion-js');
        formulario[1].classList.remove('mostrarseccion-js');
        formulario[0].classList.add('mostrarseccion-js');
    }
    if(tipousuario === 'profesionales'){
        const rutaimg = ["/build/img/ley-1.png", "/build/img/edificio-de-oficinas.png", "/build/img/grupo-1.png"];
        const ids = ["profesionales", "empresas", "ciudadanos"];
        setattrbtnsbarra("/build/img/BANNER4.1.jpg", 'Veterinarios y otros profesionales', rutaimg, ids);
        formulario[2].classList.remove('mostrarseccion-js');
        formulario[0].classList.remove('mostrarseccion-js');
        formulario[1].classList.add('mostrarseccion-js');
    }
    if(tipousuario === 'ciudadanos'){
        const rutaimg = ["/build/img/grupo-1.png", "/build/img/edificio-de-oficinas.png", "/build/img/ley-1.png"];
        const ids = ["ciudadanos", "empresas", "profesionales"];
        setattrbtnsbarra("/build/img/BANNER1.jpg", 'Ciudadanos', rutaimg, ids);
        formulario[0].classList.remove('mostrarseccion-js');
        formulario[1].classList.remove('mostrarseccion-js');
        formulario[2].classList.add('mostrarseccion-js');
    }
}
function setattrbtnsbarra(bg_img, text, rutaimg, ids){
    imgfondo.src = bg_img;
    const btnsbarra = document.querySelectorAll('.imgbtnbarra');
    btnsbarra.forEach((element, index) => {
        element.src = rutaimg[index];
        element.id = ids[index];
        if(controlevent == 0)element.addEventListener('click', (e)=>{ordenarbtnsbarra(e.target.id);});
    });
    controlevent = 1;
    document.querySelector('.textusuario').textContent = text;
}

/*
function imprimirform(params) {
    
}*/



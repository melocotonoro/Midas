
const d = document;

// SCROLL BUTTON
function scrollButton(){
    const scrollBtn = document.querySelector('.scrollTopBtn');
    window.addEventListener('scroll', () => {
     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     if(scrollTop > 300){ 
      scrollBtn.classList.remove('none');
     }else{
      scrollBtn.classList.add('none');
     }
    });
    document.addEventListener('click', e => {
     if(scrollBtn){
      window.scrollTo({
       behavior: 'smooth',
       top: 0
      })
     }
    });
}

scrollButton();


let animado = document.querySelectorAll('.animado');
let animado2 = document.querySelectorAll('.animado2');

function mostrarScroll() {
        let scrollTop = document.documentElement.scrollTop;
        for (let i = 0; i < animado.length; i++) {
            let alturaAnimado = animado[i].offsetTop;
            if (alturaAnimado - 600 < scrollTop) {
                animado[i].style.opacity = 1;  
                animado[i].classList.add('puff-in-center');  
            }           
        }
        for (let i = 0; i < animado2.length; i++) {
            let alturaAnimado = animado2[i].offsetTop;
            if (alturaAnimado - 600 < scrollTop) {
                animado2[i].style.opacity = 1;  
                animado2[i].classList.add('slide-in-left');
            }           
        }
}

window.addEventListener('scroll', mostrarScroll);

animationNavBar1();

function animationNavBar1(){
    $(".sectionNavBar1").hide();
    
    $(".sectionNavBar1").prepend(`<nav class="containerItemsNav">
    <div> <p class="logo">MIDAS</p>
          <P class="logo">DATA STUDIO</P>
    </div>
    <button class="menuIcon">
        <i class="fa-solid fa-bars"></i>  
    </button>
    <ul class="itemsNavBar itemsNavBar_visible">
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">Nuestros servicios</a>
        </li>
        <li>
            <a href="#">Trabajos realizados</a>
        </li>
        <li>
            <a href="#">¿Que dicen?</a>
        </li>
        <li>
            <a href="#">Trabajá con nosotros</a>
        </li>
        <li>
            <a href="#">Contacto</a>
        </li>
    </ul>
    </nav>`);
    
    $(".sectionNavBar1").fadeIn(3000);
}


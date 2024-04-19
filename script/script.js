const tabLinks = document.querySelectorAll('.tab__tablink');
const tabContents = document.querySelectorAll('.tabcontent');

tabLinks.forEach((tabLink, i) => {
    tabLink.addEventListener('click', () => {
        tabLinks.forEach((link, index) => {
            link.classList.remove('active');
            tabContents[index].style.display = 'none'; // Ocultar todos los bloques
        });

        tabLink.classList.add('active');
        tabContents[i].style.display = 'block'; // Mostrar el bloque correspondiente

        // Agregamos una pequeña pausa antes de aplicar la clase 'activo' al bloque para que se muestre con la transición
        setTimeout(() => {
            tabContents[i].classList.add('active');
        }, 50); // Pausa de 50 milisegundos
    });
});

window.onload = handlerEvents;

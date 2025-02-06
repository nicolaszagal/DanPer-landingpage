document.addEventListener("DOMContentLoaded", function () {
    let carouselInner = document.querySelector(".carousel-inner");
    let reviews = Array.from(carouselInner.children); // Convierte los items en un array
    let itemsPerSlide = window.innerWidth >= 992 ? 3 : 1; // 3 reseñas en pantallas grandes, 1 en medianas
    let index = 0;

    function updateCarousel() {
        carouselInner.innerHTML = ""; // Limpiar contenido previo

        let slide = document.createElement("div");
        slide.classList.add("carousel-item", "active");

        let row = document.createElement("div");
        row.classList.add("row");

        for (let i = 0; i < itemsPerSlide; i++) {
            let itemIndex = (index + i) % reviews.length;
            row.appendChild(reviews[itemIndex].cloneNode(true));
        }

        slide.appendChild(row);
        carouselInner.appendChild(slide);
    }

    function nextSlide() {
        index = (index + 1) % reviews.length;
        updateCarousel();
    }

    // Configurar botones de navegación
    document.querySelector(".carousel-control-next").addEventListener("click", nextSlide);
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        index = (index - 1 + reviews.length) % reviews.length;
        updateCarousel();
    });

    // Redibujar cuando cambia el tamaño de pantalla
    window.addEventListener("resize", function () {
        itemsPerSlide = window.innerWidth >= 768 ? 3 : 1;
        updateCarousel();
    });

    updateCarousel(); // Inicializar el carrusel
});

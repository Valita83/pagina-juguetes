document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalDescription = document.getElementById("modalDescription");
    const modalMaterial = document.getElementById("modalMaterial");
    const modalAge = document.getElementById("modalAge");
    const modalStock = document.getElementById("modalStock");
    const closeBtn = document.querySelector(".close");

    const carouselContainer = document.querySelector(".carousel-container");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");

    // Carrusel
    function updateCarousel() {
        const offset = currentIndex * 220;
        carouselContainer.style.transform = `translateX(-${offset}px)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    // Modal de detalles
    document.querySelectorAll(".details-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const product = btn.closest(".product");
            modalTitle.textContent = product.dataset.name;
            modalPrice.textContent = product.dataset.price;
            modalDescription.textContent = product.dataset.description;
            modalMaterial.textContent = product.dataset.material;
            modalAge.textContent = product.dataset.age;
            modalStock.textContent = product.dataset.stock;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
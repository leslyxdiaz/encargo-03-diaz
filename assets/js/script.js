
// codigo formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault(); // Evitar que se envíe el formulario si no es válido

            // Mostrar los mensajes de error
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (!input.validity.valid) {
                    const feedback = input.nextElementSibling;
                    feedback.style.display = 'block';
                }
            });
        }
    });
});
// codigo json carga de productos
document.addEventListener('DOMContentLoaded', function() {
    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            let productContainer = document.getElementById('product-container');
            data.forEach(product => {
                let productCard = `
                    <div class="col-md-3 mb-4 product">
                        <div class="card text-center">
                            <img src="${product.imagen}" class="card-img-top" alt="${product.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${product.nombre}</h5>
                                <p class="card-text">${product.precio}</p>
                                <a href="#" class="btn btn-primary">Agregar</a>
                            </div>
                        </div>
                    </div>
                `;
                productContainer.innerHTML += productCard;
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});

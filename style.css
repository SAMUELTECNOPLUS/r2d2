// ==================== DATOS DE PRODUCTOS ====================
const productosOriginales = [
    {
        id: 1,
        nombre: "Laptop Pro X1",
        categoria: "laptop",
        precio: 1299.99,
        descripcion: "Laptop de alto rendimiento con procesador Intel i7",
        stock: 15,
        icono: "💻"
    },
    {
        id: 2,
        nombre: "Smartphone Galaxy Z",
        categoria: "smartphone",
        precio: 899.99,
        descripcion: "Teléfono inteligente con pantalla AMOLED",
        stock: 25,
        icono: "📱"
    },
    {
        id: 3,
        nombre: "Auriculares Wireless Pro",
        categoria: "audio",
        precio: 249.99,
        descripcion: "Auriculares con cancelación de ruido activa",
        stock: 30,
        icono: "🎧"
    },
    {
        id: 4,
        nombre: "Mouse Gaming RGB",
        categoria: "accesorio",
        precio: 59.99,
        descripcion: "Mouse para gaming con iluminación RGB",
        stock: 50,
        icono: "🖱️"
    },
    {
        id: 5,
        nombre: "Laptop Ultra Book",
        categoria: "laptop",
        precio: 1599.99,
        descripcion: "Ultrabook ligera ideal para profesionales",
        stock: 8,
        icono: "💻"
    },
    {
        id: 6,
        nombre: "Smartphone Mini Pro",
        categoria: "smartphone",
        precio: 699.99,
        descripcion: "Smartphone compacto con gran potencia",
        stock: 20,
        icono: "📱"
    },
    {
        id: 7,
        nombre: "Teclado Mecánico RGB",
        categoria: "accesorio",
        precio: 129.99,
        descripcion: "Teclado mecánico con switches azules",
        stock: 35,
        icono: "⌨️"
    },
    {
        id: 8,
        nombre: "Bocina Bluetooth XL",
        categoria: "audio",
        precio: 179.99,
        descripcion: "Bocina portátil con sonido 360 grados",
        stock: 18,
        icono: "🔊"
    },
    {
        id: 9,
        nombre: "Webcam HD Pro",
        categoria: "accesorio",
        precio: 89.99,
        descripcion: "Cámara web Full HD con micrófono integrado",
        stock: 0,
        icono: "📷"
    },
    {
        id: 10,
        nombre: "Tablet Creative Plus",
        categoria: "laptop",
        precio: 799.99,
        descripcion: "Tablet profesional para diseñadores",
        stock: 12,
        icono: "📱"
    },
    {
        id: 11,
        nombre: "Micrófono USB Studio",
        categoria: "audio",
        precio: 149.99,
        descripcion: "Micrófono de condensador para streaming",
        stock: 22,
        icono: "🎤"
    },
    {
        id: 12,
        nombre: "Cargador Inalámbrico Rápido",
        categoria: "accesorio",
        precio: 39.99,
        descripcion: "Carga rápida inalámbrica para smartphones",
        stock: 45,
        icono: "🔌"
    }
];

let productosActuales = [...productosOriginales];

let currentSlide = 0;

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');

    window.moveCarousel = function(direction) {
        currentSlide += direction;
        
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    setInterval(() => {
        window.moveCarousel(1);
    }, 5000);

    renderizarProductos(productosActuales);
});

function renderizarProductos(productos) {
    const grid = document.getElementById('productsGrid');
    
    if (!grid) {
        console.error('No se encontró el elemento productsGrid');
        return;
    }
    
    if (productos.length === 0) {
        grid.innerHTML = '<div class="no-results">❌ No se encontraron productos con ese criterio de búsqueda</div>';
        return;
    }
    
    grid.innerHTML = productos.map(producto => {
        let stockClass = producto.stock > 10 ? '' : producto.stock > 0 ? 'low' : 'out';
        let stockText = producto.stock > 0 ? `✅ ${producto.stock} disponibles` : '❌ Agotado';
        
        return `
            <div class="product-card">
                <div class="product-image">${producto.icono}</div>
                <div class="product-info">
                    <div class="product-category">${producto.categoria.toUpperCase()}</div>
                    <h3 class="product-name">${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <div class="product-price">${producto.precio.toFixed(2)}</div>
                    <div class="product-stock ${stockClass}">${stockText}</div>
                </div>
            </div>
        `;
    }).join('');
}

window.handleSearch = function() {
    const searchInput = document.getElementById('searchInput');
    const infoDiv = document.getElementById('searchInfo');
    
    if (!searchInput || !infoDiv) {
        console.error('No se encontraron los elementos de búsqueda');
        return;
    }

    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        renderizarProductos(productosActuales);
        infoDiv.innerHTML = '';
        return;
    }

    const resultadosFiltrados = productosActuales.filter(producto => {
        return producto.nombre.toLowerCase().includes(searchTerm) ||
               producto.categoria.toLowerCase().includes(searchTerm) ||
               producto.descripcion.toLowerCase().includes(searchTerm);
    });

    const coincidenciaExacta = productosActuales.find(producto => 
        producto.nombre.toLowerCase() === searchTerm
    );

    const hayStockDisponible = resultadosFiltrados.some(producto => producto.stock > 0);

    const todosLaMismaCategoria = resultadosFiltrados.length > 0 &&
        resultadosFiltrados.every(producto => producto.categoria === resultadosFiltrados[0].categoria);

    const valorTotal = resultadosFiltrados.reduce((total, producto) => {
        return total + (producto.precio * producto.stock);
    }, 0);

    const nombresEncontrados = resultadosFiltrados.map(p => p.nombre);

    const productosOrdenados = [...resultadosFiltrados].sort((a, b) => a.precio - b.precio);

    renderizarProductos(productosOrdenados);

    let infoHTML = `
        <strong>📊 Resultados de búsqueda para "${searchTerm}":</strong><br>
        ✅ ${resultadosFiltrados.length} producto(s) encontrado(s)<br>
    `;
    
    if (coincidenciaExacta) {
        infoHTML += `🎯 Coincidencia exacta: <strong>${coincidenciaExacta.nombre}</strong><br>`;
    }
    
    if (resultadosFiltrados.length > 0) {
        infoHTML += `
            📦 Stock disponible: ${hayStockDisponible ? 'Sí' : 'No'}<br>
            🏷️ ${todosLaMismaCategoria ? 'Todos de la categoría: ' + resultadosFiltrados[0].categoria : 'Categorías mixtas'}<br>
            💰 Valor total del inventario: $${valorTotal.toFixed(2)}<br>
            📝 Productos: ${nombresEncontrados.join(', ')}
        `;
    }
    
    infoDiv.innerHTML = infoHTML;
};

window.filterByCategory = function(categoria, event) {
    console.log('Filtrando por:', categoria);
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
    }

    if (categoria === 'todos') {
        productosActuales = [...productosOriginales];
    } else {
        productosActuales = productosOriginales.filter(producto => 
            producto.categoria === categoria
        );
    }

    const searchInput = document.getElementById('searchInput');
    const infoDiv = document.getElementById('searchInfo');
    
    if (searchInput) {
        searchInput.value = '';
    }
    
    if (infoDiv) {
        infoDiv.innerHTML = `
            📂 Mostrando ${productosActuales.length} producto(s) de la categoría: <strong>${categoria}</strong>
        `;
    }
    
    renderizarProductos(productosActuales);
};


window.scrollToProducts = function() {
    const productosSection = document.getElementById('productos');
    if (productosSection) {
        productosSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};



window.scrollToInicio = function() {
    const inicioSection = document.getElementById('inicio');
    if (inicioSection) {
        inicioSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};

window.scrollToContacto = function() {
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
        contactoSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};

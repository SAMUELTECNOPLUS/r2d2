
        // ==================== DATOS DE PRODUCTOS ====================
        const productosOriginales = [
           // ==================== DATOS DE PRODUCTOS ====================
    {
        id: 1,
        nombre: "Laptop Pro X1",
        categoria: "laptop",
        precio: 1299.99,
        descripcion: "Laptop de alto rendimiento con procesador Intel i7",
        stock: 15,
        icono: "💻",
        imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        nombre: "Smartphone Galaxy Z",
        categoria: "smartphone",
        precio: 899.99,
        descripcion: "Teléfono inteligente con pantalla AMOLED",
        stock: 25,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        nombre: "Auriculares Wireless Pro",
        categoria: "audio",
        precio: 249.99,
        descripcion: "Auriculares con cancelación de ruido activa",
        stock: 30,
        icono: "🎧",
        imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        nombre: "Mouse Gaming RGB",
        categoria: "accesorio",
        precio: 59.99,
        descripcion: "Mouse para gaming con iluminación RGB",
        stock: 50,
        icono: "🖱️",
        imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        nombre: "Laptop Ultra Book",
        categoria: "laptop",
        precio: 1599.99,
        descripcion: "Ultrabook ligera ideal para profesionales",
        stock: 8,
        icono: "💻",
        imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        nombre: "Smartphone Mini Pro",
        categoria: "smartphone",
        precio: 699.99,
        descripcion: "Smartphone compacto con gran potencia",
        stock: 20,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        nombre: "Teclado Mecánico RGB",
        categoria: "accesorio",
        precio: 129.99,
        descripcion: "Teclado mecánico con switches azules",
        stock: 35,
        icono: "⌨️",
        imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        nombre: "Bocina Bluetooth XL",
        categoria: "audio",
        precio: 179.99,
        descripcion: "Bocina portátil con sonido 360 grados",
        stock: 18,
        icono: "🔊",
        imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        nombre: "Webcam HD Pro",
        categoria: "accesorio",
        precio: 89.99,
        descripcion: "Cámara web Full HD con micrófono integrado",
        stock: 0,
        icono: "📷",
        imagen: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        nombre: "Tablet Creative Plus",
        categoria: "laptop",
        precio: 799.99,
        descripcion: "Tablet profesional para diseñadores",
        stock: 12,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        nombre: "Micrófono USB Studio",
        categoria: "audio",
        precio: 149.99,
        descripcion: "Micrófono de condensador para streaming",
        stock: 22,
        icono: "🎤",
        imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        nombre: "Cargador Inalámbrico Rápido",
        categoria: "accesorio",
        precio: 39.99,
        descripcion: "Carga rápida inalámbrica para smartphones",
        stock: 45,
        icono: "🔌",
        imagen: "https://images.unsplash.com/photo-1591290619762-c588cf8cce23?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        nombre: "Monitor 4K Ultra HD",
        categoria: "accesorio",
        precio: 499.99,
        descripcion: "Monitor de 27 pulgadas con resolución 4K",
        stock: 16,
        icono: "🖥️",
        imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop"
    },
    {
        id: 14,
        nombre: "Laptop Gaming Titan",
        categoria: "laptop",
        precio: 2199.99,
        descripcion: "Laptop gaming con RTX 4070 y pantalla 144Hz",
        stock: 6,
        icono: "💻",
        imagen: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop"
    },
    {
        id: 15,
        nombre: "Smartphone Pro Max",
        categoria: "smartphone",
        precio: 1199.99,
        descripcion: "Smartphone premium con cámara de 108MP",
        stock: 14,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1592286927505-2c3f9e9d2a8e?w=400&h=300&fit=crop"
    },
    {
        id: 16,
        nombre: "Auriculares In-Ear Sport",
        categoria: "audio",
        precio: 79.99,
        descripcion: "Auriculares resistentes al agua para deportes",
        stock: 40,
        icono: "🎧",
        imagen: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop"
    },
    {
        id: 17,
        nombre: "Mousepad XXL Gaming",
        categoria: "accesorio",
        precio: 29.99,
        descripcion: "Alfombrilla de escritorio tamaño extendido",
        stock: 60,
        icono: "🖱️",
        imagen: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop"
    },
    {
        id: 18,
        nombre: "Disco Duro Externo 2TB",
        categoria: "accesorio",
        precio: 89.99,
        descripcion: "Almacenamiento portátil de alta velocidad",
        stock: 28,
        icono: "💾",
        imagen: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop"
    },
    {
        id: 19,
        nombre: "Tablet Kids Edition",
        categoria: "laptop",
        precio: 299.99,
        descripcion: "Tablet educativa con controles parentales",
        stock: 32,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop"
    },
    {
        id: 20,
        nombre: "Barra de Sonido Smart",
        categoria: "audio",
        precio: 349.99,
        descripcion: "Sistema de audio envolvente para TV",
        stock: 11,
        icono: "🔊",
        imagen: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop"
    },
    {
        id: 21,
        nombre: "Adaptador USB-C Hub",
        categoria: "accesorio",
        precio: 49.99,
        descripcion: "Hub multipuerto con HDMI y USB 3.0",
        stock: 55,
        icono: "🔌",
        imagen: "https://images.unsplash.com/photo-1625948515291-69613efd1340?w=400&h=300&fit=crop"
    },
    {
        id: 22,
        nombre: "SSD Interno 1TB NVMe",
        categoria: "accesorio",
        precio: 119.99,
        descripcion: "Unidad de estado sólido ultra rápida",
        stock: 24,
        icono: "💾",
        imagen: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=300&fit=crop"
    },
    {
        id: 23,
        nombre: "Smartphone Budget 5G",
        categoria: "smartphone",
        precio: 399.99,
        descripcion: "Smartphone económico con conectividad 5G",
        stock: 38,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=300&fit=crop"
    },
    {
        id: 24,
        nombre: "Laptop Convertible 2-en-1",
        categoria: "laptop",
        precio: 1099.99,
        descripcion: "Portátil convertible en tablet con stylus",
        stock: 10,
        icono: "💻",
        imagen: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop"
    },
    {
        id: 25,
        nombre: "Router WiFi 6 Mesh",
        categoria: "accesorio",
        precio: 199.99,
        descripcion: "Sistema de red de malla de alta velocidad",
        stock: 17,
        icono: "📡",
        imagen: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop"
    },
    {
        id: 26,
        nombre: "Auriculares Gaming 7.1",
        categoria: "audio",
        precio: 159.99,
        descripcion: "Headset gaming con sonido surround",
        stock: 26,
        icono: "🎧",
        imagen: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=300&fit=crop"
    },
    {
        id: 27,
        nombre: "Webcam 4K Streaming",
        categoria: "accesorio",
        precio: 159.99,
        descripcion: "Cámara profesional para streaming y videoconferencias",
        stock: 13,
        icono: "📷",
        imagen: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=400&h=300&fit=crop"
    },
    {
        id: 28,
        nombre: "Laptop Chromebook Plus",
        categoria: "laptop",
        precio: 549.99,
        descripcion: "Chromebook ligera con Chrome OS",
        stock: 21,
        icono: "💻",
        imagen: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop"
    },
    {
        id: 29,
        nombre: "Smartwatch Fitness Pro",
        categoria: "smartphone",
        precio: 299.99,
        descripcion: "Reloj inteligente con monitor cardíaco",
        stock: 29,
        icono: "⌚",
        imagen: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop"
    },
    {
        id: 30,
        nombre: "Bocina Inteligente Voice",
        categoria: "audio",
        precio: 99.99,
        descripcion: "Altavoz con asistente de voz integrado",
        stock: 34,
        icono: "🔊",
        imagen: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=300&fit=crop"
    },
    {
        id: 31,
        nombre: "Teclado Inalámbrico Slim",
        categoria: "accesorio",
        precio: 69.99,
        descripcion: "Teclado bluetooth ultra delgado",
        stock: 41,
        icono: "⌨️",
        imagen: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=300&fit=crop"
    },
    {
        id: 32,
        nombre: "Mouse Vertical Ergonómico",
        categoria: "accesorio",
        precio: 44.99,
        descripcion: "Mouse ergonómico para prevenir lesiones",
        stock: 33,
        icono: "🖱️",
        imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop"
    },
    {
        id: 33,
        nombre: "Power Bank 30000mAh",
        categoria: "accesorio",
        precio: 54.99,
        descripcion: "Batería portátil de alta capacidad",
        stock: 47,
        icono: "🔋",
        imagen: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop"
    },
    {
        id: 34,
        nombre: "Smartphone Plegable Fold",
        categoria: "smartphone",
        precio: 1599.99,
        descripcion: "Teléfono con pantalla plegable innovadora",
        stock: 5,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop"
    },
    {
        id: 35,
        nombre: "Laptop Workstation Pro",
        categoria: "laptop",
        precio: 2799.99,
        descripcion: "Estación de trabajo para profesionales de video",
        stock: 4,
        icono: "💻",
        imagen: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop"
    },
    {
        id: 36,
        nombre: "Auriculares Studio Monitor",
        categoria: "audio",
        precio: 399.99,
        descripcion: "Auriculares profesionales para producción musical",
        stock: 9,
        icono: "🎧",
        imagen: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop"
    },
    {
        id: 37,
        nombre: "Cable HDMI 2.1 Premium",
        categoria: "accesorio",
        precio: 24.99,
        descripcion: "Cable HDMI 8K de alta velocidad",
        stock: 72,
        icono: "🔌",
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
        id: 38,
        nombre: "Base Refrigeradora Laptop",
        categoria: "accesorio",
        precio: 39.99,
        descripcion: "Soporte con ventiladores para laptop",
        stock: 36,
        icono: "❄️",
        imagen: "https://images.unsplash.com/photo-1625948515291-69613efd1456?w=400&h=300&fit=crop"
    },
    {
        id: 39,
        nombre: "Micrófono Lavalier Wireless",
        categoria: "audio",
        precio: 129.99,
        descripcion: "Micrófono de solapa inalámbrico para video",
        stock: 15,
        icono: "🎤",
        imagen: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=300&fit=crop"
    },
    {
        id: 40,
        nombre: "Tablet Android Ultra",
        categoria: "laptop",
        precio: 649.99,
        descripcion: "Tablet Android con procesador Snapdragon",
        stock: 19,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1585790050230-5dd28404f1e9?w=400&h=300&fit=crop"
    },
    {
        id: 41,
        nombre: "Smartphone Rugerizado",
        categoria: "smartphone",
        precio: 499.99,
        descripcion: "Teléfono resistente a golpes y agua IP68",
        stock: 23,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1519223400710-6da9e1b1b4ae?w=400&h=300&fit=crop"
    },
    {
        id: 42,
        nombre: "Monitor Ultrawide 34\"",
        categoria: "accesorio",
        precio: 749.99,
        descripcion: "Monitor curvo ultraancho para productividad",
        stock: 8,
        icono: "🖥️",
        imagen: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=400&h=300&fit=crop"
    },
    {
        id: 43,
        nombre: "Lámpara LED Escritorio",
        categoria: "accesorio",
        precio: 34.99,
        descripcion: "Lámpara ajustable con carga USB",
        stock: 44,
        icono: "💡",
        imagen: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop"
    },
    {
        id: 44,
        nombre: "Laptop Student Edition",
        categoria: "laptop",
        precio: 449.99,
        descripcion: "Laptop económica ideal para estudiantes",
        stock: 27,
        icono: "💻",
        imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
        id: 45,
        nombre: "Auriculares Bone Conduction",
        categoria: "audio",
        precio: 119.99,
        descripcion: "Auriculares de conducción ósea para deportes",
        stock: 31,
        icono: "🎧",
        imagen: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop"
    },
    {
        id: 46,
        nombre: "Estabilizador Gimbal Móvil",
        categoria: "accesorio",
        precio: 139.99,
        descripcion: "Gimbal de 3 ejes para smartphones",
        stock: 14,
        icono: "📹",
        imagen: "https://images.unsplash.com/photo-1617886322168-72b886573c35?w=400&h=300&fit=crop"
    },
    {
        id: 47,
        nombre: "Tarjeta Gráfica Externa",
        categoria: "accesorio",
        precio: 899.99,
        descripcion: "GPU externa Thunderbolt 3",
        stock: 7,
        icono: "🎮",
        imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop"
    },
    {
        id: 48,
        nombre: "Bocina Portátil Waterproof",
        categoria: "audio",
        precio: 69.99,
        descripcion: "Altavoz resistente al agua IP67",
        stock: 52,
        icono: "🔊",
        imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop"
    },
    {
        id: 49,
        nombre: "Kit Limpieza Electrónica",
        categoria: "accesorio",
        precio: 19.99,
        descripcion: "Set completo para limpiar dispositivos",
        stock: 66,
        icono: "🧹",
        imagen: "https://images.unsplash.com/photo-1563299796-17596ed6b017?w=400&h=300&fit=crop"
    },
    {
        id: 50,
        nombre: "Smartphone Camera Phone",
        categoria: "smartphone",
        precio: 949.99,
        descripcion: "Smartphone enfocado en fotografía profesional",
        stock: 18,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=300&fit=crop"
    },
    {
        id: 51,
        nombre: "Laptop Creator Edition",
        categoria: "laptop",
        precio: 1899.99,
        descripcion: "Laptop optimizada para creadores de contenido",
        stock: 11,
        icono: "💻",
        imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    },
    {
        id: 52,
        nombre: "Mouse Trackball Wireless",
        categoria: "accesorio",
        precio: 79.99,
        descripcion: "Mouse con trackball para precisión",
        stock: 25,
        icono: "🖱️",
        imagen: "https://images.unsplash.com/photo-1586920740099-44f27bc30224?w=400&h=300&fit=crop"
    },
    {
        id: 53,
        nombre: "Sistema Audio 5.1 Home",
        categoria: "audio",
        precio: 599.99,
        descripcion: "Sistema de sonido envolvente completo",
        stock: 6,
        icono: "🔊",
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
        id: 54,
        nombre: "Switch KVM 4 Puertos",
        categoria: "accesorio",
        precio: 89.99,
        descripcion: "Conmutador para múltiples computadoras",
        stock: 20,
        icono: "🔀",
        imagen: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400&h=300&fit=crop"
    },
    {
        id: 55,
        nombre: "Tablet E-Reader Ink",
        categoria: "laptop",
        precio: 249.99,
        descripcion: "Lector de libros con pantalla e-ink",
        stock: 37,
        icono: "📖",
        imagen: "https://images.unsplash.com/photo-1592156328386-0566b1c8d9b8?w=400&h=300&fit=crop"
    },
    {
        id: 56,
        nombre: "Soporte Monitor Dual",
        categoria: "accesorio",
        precio: 64.99,
        descripcion: "Brazo para dos monitores ajustable",
        stock: 22,
        icono: "🖥️",
        imagen: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop"
    },
    {
        id: 57,
        nombre: "Smartphone Business Pro",
        categoria: "smartphone",
        precio: 799.99,
        descripcion: "Teléfono empresarial con seguridad avanzada",
        stock: 16,
        icono: "📱",
        imagen: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=300&fit=crop"
    },
    {
        id: 58,
        nombre: "Auriculares DJ Pro",
        categoria: "audio",
        precio: 279.99,
        descripcion: "Auriculares profesionales para DJs",
        stock: 12,
        icono: "🎧",
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
        id: 59,
        nombre: "Organizador Cables Premium",
        categoria: "accesorio",
        precio: 16.99,
        descripcion: "Sistema de organización de cables",
        stock: 89,
        icono: "🔌",
        imagen: "https://images.unsplash.com/photo-1588095099151-7f7d9c6b9f48?w=400&h=300&fit=crop"
    },
    {
        id: 60,
        nombre: "Laptop Touchscreen 15\"",
        categoria: "laptop",
        precio: 999.99,
        descripcion: "Portátil con pantalla táctil Full HD",
        stock: 13,
        icono: "💻",
        imagen: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop"
    },
    {
        id: 61,
        nombre: "Grabadora de Voz Digital",
        categoria: "audio",
        precio: 89.99,
        descripcion: "Grabadora portátil de alta fidelidad",
        stock: 19,
        icono: "🎤",
        imagen: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop"
    },
    {
        id: 62,
        nombre: "Pulsera Inteligente Fit",
        categoria: "smartphone",
        precio: 79.99,
        descripcion: "Banda de fitness con monitor de actividad",
        stock: 48,
        imagen: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop"
    }
];



        // Variable para mantener los productos filtrados actuales
        let productosActuales = [...productosOriginales];

        // ==================== CARRUSEL ====================
        let currentSlide = 0;
        const track = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.carousel-slide');

        function moveCarousel(direction) {
            currentSlide += direction;
            
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            } else if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        // Auto-avance del carrusel cada 5 segundos
        setInterval(() => {
            moveCarousel(1);
        }, 5000);

        // ==================== RENDERIZAR PRODUCTOS ====================
        function renderizarProductos(productos) {
            const grid = document.getElementById('productsGrid');
            
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
                            <div class="product-price">$${producto.precio.toFixed(2)}</div>
                            <div class="product-stock ${stockClass}">${stockText}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // ==================== BÚSQUEDA AVANZADA CON MÉTODOS DE ARRAY ====================
        function handleSearch() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            const infoDiv = document.getElementById('searchInfo');
            
            if (searchTerm === '') {
                // Si no hay término de búsqueda, mostrar todos los productos actuales (respetando filtro de categoría)
                renderizarProductos(productosActuales);
                infoDiv.innerHTML = '';
                return;
            }
            
            // 🔍 MÉTODO 1: filter() - Filtra productos que coincidan con el término de búsqueda
            const resultadosFiltrados = productosActuales.filter(producto => {
                // Busca en nombre, categoría y descripción
                return producto.nombre.toLowerCase().includes(searchTerm) ||
                       producto.categoria.toLowerCase().includes(searchTerm) ||
                       producto.descripcion.toLowerCase().includes(searchTerm);
            });
            
            // 🔍 MÉTODO 2: find() - Encuentra el primer producto que coincida exactamente con el nombre
            const coincidenciaExacta = productosActuales.find(producto => 
                producto.nombre.toLowerCase() === searchTerm
            );
            
            // 🔍 MÉTODO 3: some() - Verifica si hay algún producto con stock disponible en los resultados
            const hayStockDisponible = resultadosFiltrados.some(producto => producto.stock > 0);
            
            // 🔍 MÉTODO 4: every() - Verifica si todos los productos encontrados son de una categoría específica
            const todosLaMismaCategoria = resultadosFiltrados.length > 0 && 
                                           resultadosFiltrados.every(producto => 
                                               producto.categoria === resultadosFiltrados[0].categoria
                                           );
            
            // 🔍 MÉTODO 5: map() - Obtiene solo los nombres de los productos encontrados
            const nombresEncontrados = resultadosFiltrados.map(producto => producto.nombre);
            
            // 🔍 MÉTODO 6: reduce() - Calcula el valor total del inventario encontrado
            const valorTotal = resultadosFiltrados.reduce((total, producto) => {
                return total + (producto.precio * producto.stock);
            }, 0);
            
            // 🔍 MÉTODO 7: sort() - Ordena por precio (de menor a mayor)
            const productosOrdenados = [...resultadosFiltrados].sort((a, b) => a.precio - b.precio);
            
            // Renderizar productos ordenados
            renderizarProductos(productosOrdenados);
            
            // Mostrar información detallada de la búsqueda
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
        }

        // ==================== FILTRO POR CATEGORÍA ====================
        function filterByCategory(categoria) {
            // Actualizar botones activos
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // 🔍 MÉTODO filter() aplicado a categorías
            if (categoria === 'todos') {
                productosActuales = [...productosOriginales];
            } else {
                productosActuales = productosOriginales.filter(producto => 
                    producto.categoria === categoria
                );
            }
            
            // Limpiar búsqueda y renderizar
            document.getElementById('searchInput').value = '';
            document.getElementById('searchInfo').innerHTML = `
                📂 Mostrando ${productosActuales.length} producto(s) de la categoría: <strong>${categoria}</strong>
            `;
            
            renderizarProductos(productosActuales);
        }

        // ==================== INICIALIZACIÓN ====================
        // Renderizar todos los productos al cargar la página
        renderizarProductos(productosActuales);
// Función para mostrar diferentes secciones
function showSection(section) {
    let content = document.getElementById('content');
    if (section === 'login') {
        content.innerHTML = `
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Login</h2>
            <form class="space-y-6 max-w-md mx-auto">
                <div>
                    <label for="username" class="block text-lg text-gray-700">Nombre de usuario</label>
                    <input type="text" id="username" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300">
                </div>
                <div>
                    <label for="password" class="block text-lg text-gray-700">Contraseña</label>
                    <input type="password" id="password" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300">
                </div>
                <button type="button" onclick="login()" class="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300">Entrar</button>
            </form>
        `;
    } else if (section === 'discografia') {
        content.innerHTML = `
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Discografía de Radiohead</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/0f/Radiohead.pablohoney.albumart.jpg" alt="Pablo Honey" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">Pablo Honey</h3>
                    <p class="text-gray-600">Año: 1993</p>
                    <p class="text-gray-600">El álbum debut de la banda, con un sonido más grunge y alternativo, incluye su éxito más conocido, "Creep".</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/en/5/55/Radioheadthebends.png" alt="The Bends" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">The Bends</h3>
                    <p class="text-gray-600">Año: 1995</p>
                    <p class="text-gray-600">Un álbum que consolidó a Radiohead como una de las bandas más importantes de los años 90, con temas como "Fake Plastic Trees" y "Street Spirit".</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png" alt="OK Computer" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">OK Computer</h3>
                    <p class="text-gray-600">Año: 1997</p>
                    <p class="text-gray-600">Un álbum icónico que mezcla el rock alternativo con sonidos electrónicos. Considerado uno de los mejores álbumes de todos los tiempos.</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png" alt="Kid A" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">Kid A</h3>
                    <p class="text-gray-600">Año: 2000</p>
                    <p class="text-gray-600">Este álbum marcó una nueva dirección para Radiohead, con un sonido más experimental y electrónico, alejándose del rock tradicional.</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/en/8/8c/Radiohead_-_Amnesiac_cover.png" alt="Amnesiac" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">Amnesiac</h3>
                    <p class="text-gray-600">Año: 2001</p>
                    <p class="text-gray-600">Considerado una continuación de Kid A, este álbum sigue explorando terrenos electrónicos, con una atmósfera más oscura y experimental.</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/en/6/61/Radioheadhailtothethief.png" alt="Hail to the Thief" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">Hail to the Thief</h3>
                    <p class="text-gray-600">Año: 2003</p>
                    <p class="text-gray-600">Este álbum es una mezcla de su fase experimental y su antiguo estilo de rock, con letras políticamente cargadas.</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/Radioheadthekingoflimbs.png" alt="The King of Limbs" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">The King of Limbs</h3>
                    <p class="text-gray-600">Año: 2011</p>
                    <p class="text-gray-600">Radiohead sigue su camino experimental con un álbum más centrado en los ritmos y la repetición, con un ambiente denso y minimalista.</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/en/6/6a/Amoonshapedpool.png" alt="A Moon Shaped Pool" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">A Moon Shaped Pool</h3>
                    <p class="text-gray-600">Año: 2016</p>
                    <p class="text-gray-600">Con una mezcla de orquestación y minimalismo, este álbum es emotivo y atmosférico, marcando el regreso de Radiohead tras varios años de silencio.</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png" alt="In Rainbows" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">In Rainbows</h3>
                    <p class="text-gray-600">Año: 2007</p>
                    <p class="text-gray-600">In Rainbows es un álbum que se lanzó con un modelo de pago "lo que quieras", combinando melodías suaves con complejidad emocional y sonora.</p>
                </div>
            </div>
        `;
    
        
      
    } else if (section === 'tourdate') {
        content.innerHTML = `
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Gira Latinoamericana</h2>
            <div class="bg-white rounded-lg shadow-lg p-6">
                <ul class="space-y-4 text-lg text-gray-700">
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Buenos Aires, Argentina</strong> - 10 de octubre de 2024</span>
                        <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Santiago, Chile</strong> - 12 de octubre de 2024</span>
                        <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Lima, Perú</strong> - 14 de octubre de 2024</span>
                        <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Ciudad de México, México</strong> - 16 de octubre de 2024</span>
                        <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Medellín, Colombia</strong> - 18 de octubre de 2024</span>
                        <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Quito, Ecuador</strong> - 20 de octubre de 2024</span>
                        <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Asunción, Paraguay</strong> - 22 de octubre de 2024</span>
                        <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>La Paz, Bolivia</strong> - 24 de octubre de 2024</span>
                        <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                </ul>
            </div>
        `;
    
    
    
    } else if (section === 'agregar') {
        content.innerHTML = `
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Agregar Álbum</h2>
            <form class="space-y-6 max-w-md mx-auto">
                <div>
                    <label for="album-name" class="block text-lg text-gray-700">Nombre del Álbum</label>
                    <input type="text" id="album-name" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition duration-300">
                </div>
                <div>
                    <label for="release-year" class="block text-lg text-gray-700">Año de Lanzamiento</label>
                    <input type="text" id="release-year" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition duration-300">
                </div>
                <button type="button" class="w-full py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-500 transition duration-300">Agregar</button>
            </form>
        `;
    }
}

function login() {
    alert('Login exitoso. Redirigiendo al inicio...');
    showSection('discografia');
}
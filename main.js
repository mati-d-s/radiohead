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
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png" alt="In Rainbows" class="rounded-lg mb-4 shadow-lg">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">In Rainbows</h3>
                    <p class="text-gray-600">Año: 2007</p>
                    <p class="text-gray-600">In Rainbows es un álbum que se lanzó con un modelo de pago "lo que quieras", combinando melodías suaves con complejidad emocional y sonora.</p>
                </div>
                <!-- Añadir más álbumes aquí si es necesario -->
            </div>
        `;
    
    } else if (section === 'tourdate') {
        content.innerHTML = `
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Gira Latinoamericana</h2>
            <ul class="space-y-4 text-lg text-gray-700">
                <li><strong>Buenos Aires, Argentina</strong> - 10 de octubre de 2024</li>
                <li><strong>Santiago, Chile</strong> - 12 de octubre de 2024</li>
                <li><strong>Lima, Perú</strong> - 14 de octubre de 2024</li>
                <li><strong>Ciudad de México, México</strong> - 16 de octubre de 2024</li>
            </ul>
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
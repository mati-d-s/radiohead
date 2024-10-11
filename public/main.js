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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="album-list">
                ${generateAlbumCard("Pablo Honey", "1993", "El álbum debut de la banda, con un sonido más grunge y alternativo, incluye su éxito más conocido, 'Creep'.", "https://upload.wikimedia.org/wikipedia/en/0/0f/Radiohead.pablohoney.albumart.jpg")}
                ${generateAlbumCard("The Bends", "1995", "Un álbum que consolidó a Radiohead como una de las bandas más importantes de los años 90, con temas como 'Fake Plastic Trees' y 'Street Spirit'.", "https://upload.wikimedia.org/wikipedia/en/5/55/Radioheadthebends.png")}
                ${generateAlbumCard("OK Computer", "1997", "Un álbum icónico que mezcla el rock alternativo con sonidos electrónicos. Considerado uno de los mejores álbumes de todos los tiempos.", "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png")}
                ${generateAlbumCard("Kid A", "2000", "Este álbum marcó una nueva dirección para Radiohead, con un sonido más experimental y electrónico, alejándose del rock tradicional.", "https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png")}
                ${generateAlbumCard("Amnesiac", "2001", "Considerado una continuación de Kid A, este álbum sigue explorando terrenos electrónicos, con una atmósfera más oscura y experimental.", "https://upload.wikimedia.org/wikipedia/en/8/8c/Radiohead_-_Amnesiac_cover.png")}
                ${generateAlbumCard("Hail to the Thief", "2003", "Este álbum es una mezcla de su fase experimental y su antiguo estilo de rock, con letras políticamente cargadas.", "https://upload.wikimedia.org/wikipedia/en/6/61/Radioheadhailtothethief.png")}
                ${generateAlbumCard("The King of Limbs", "2011", "Radiohead sigue su camino experimental con un álbum más centrado en los ritmos y la repetición, con un ambiente denso y minimalista.", "https://upload.wikimedia.org/wikipedia/en/a/a2/Radioheadthekingoflimbs.png")}
                ${generateAlbumCard("In Rainbows", "2007", "In Rainbows es un álbum que se lanzó con un modelo de pago 'lo que quieras', combinando melodías suaves con complejidad emocional y sonora.", "https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png")}
                ${generateAlbumCard("A Moon Shaped Pool", "2016", "Con una mezcla de orquestación y minimalismo, este álbum es emotivo y atmosférico, marcando el regreso de Radiohead tras varios años de silencio.", "https://upload.wikimedia.org/wikipedia/en/6/6a/Amoonshapedpool.png")}
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
                <button type="button" class="w-full py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-500 transition duration-300" onclick="addAlbum()">Agregar</button>
            </form>
        `;

    } else if (section === 'form') {
        content.innerHTML = 
            `<h2 class="text-3xl font-bold mb-6 text-gray-800">Formulario de Contacto</h2>
            <form onsubmit="validateForm(event)" class="space-y-6 max-w-md mx-auto">
                <div>
                    <label for="full-name" class="block text-lg text-gray-700">Nombre y Apellido</label>
                    <input type="text" id="full-name" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition duration-300" required>
                </div>
                <div>
                    <label for="email" class="block text-lg text-gray-700">Correo Electrónico</label>
                    <input type="email" id="email" placeholder="correo@example.com" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition duration-300" required>
                </div>
                <div class="space-y-1">
                    <label class="block text-lg text-gray-700">Género</label>
                    <label><input type="radio" name="gender" value="femenino" required> Femenino</label>
                    <label><input type="radio" name="gender" value="masculino"> Masculino</label>
                    <label><input type="radio" name="gender" value="no-binario"> No Binario</label>
                    <label><input type="radio" name="gender" value="prefiero-no-decirlo"> Prefiero no decirlo</label>
                </div>
                <div>
                    <label for="age-range" class="block text-lg text-gray-700">Rango de Edad</label>
                    <select id="age-range" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition duration-300" required>
                        <option value="">Seleccione...</option>
                        <option value="menor-18">Menor a 18 años</option>
                        <option value="19-30">19-30 años</option>
                        <option value="31-45">31-45 años</option>
                        <option value="46-55">46-55 años</option>
                        <option value="mayor-56">Mayor a 56 años</option>
                    </select>
                </div>
                <div>
                    <label><input type="checkbox" id="is-argentinian" class="mr-2"> ¿Eres argentino?</label>
                </div>
                <button type="submit" class="w-full py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-500 transition duration-300">Enviar</button>
            </form>`;
    }
}

function generateAlbumCard(title, year, description, imgSrc) {
    return `
        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 transform hover:scale-105 relative">
            <img src="${imgSrc}" alt="${title}" class="rounded-lg mb-4 shadow-lg">
            <h3 class="font-bold text-xl mb-2 text-gray-800">${title}</h3>
            <p class="text-gray-600">Año: ${year}</p>
            <p class="text-gray-600">${description}</p>
            <button class="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition duration-300 absolute top-4 right-4" onclick="removeAlbum(this)">Eliminar</button>
        </div>
    `;
}

function removeAlbum(button) {
    const card = button.closest('div');
    card.remove();
}

function addAlbum() {
    const albumName = document.getElementById('album-name').value;
    const releaseYear = document.getElementById('release-year').value;

    if (albumName && releaseYear) {
        const newAlbumCard = generateAlbumCard(albumName, releaseYear, "Descripción personalizada", "URL_de_imagen");
        const albumList = document.getElementById('album-list');
        albumList.innerHTML += newAlbumCard;

        // Limpiar los campos
        document.getElementById('album-name').value = '';
        document.getElementById('release-year').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function login() {
    alert('Login exitoso. Redirigiendo al inicio...');
    showSection('discografia');
}

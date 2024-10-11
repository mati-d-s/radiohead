// Función para mostrar diferentes secciones
function showSection(section) {
  let content = document.getElementById("content");
  if (section === "login") {
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
                <button type="button" onclick="login()" class="w-full py-3 bg-purple-600  text-white rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300">Entrar</button>
            </form>
        `;
  } else if (section === "discografia") {
    content.innerHTML = `
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Discografía de Radiohead</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="album-list">
            ${generateAlbumCard(
              "Pablo Honey",
              "1993",
              "El álbum debut de la banda, con un sonido más grunge y alternativo, incluye su éxito más conocido, 'Creep'.",
              "https://upload.wikimedia.org/wikipedia/en/0/0f/Radiohead.pablohoney.albumart.jpg",
              ["Creep", "Anyone Can Play Guitar", "Stop Whispering"],
              [
                "https://open.spotify.com/track/1jODd58p9Fcf0vD6e3g4u6",
                "https://open.spotify.com/track/1Lx3Y71b4wvN9tqOd3jS8G",
                "https://open.spotify.com/track/1M9Z4bc0Pz8cS8DIfdMl3O",
              ]
            )}
            ${generateAlbumCard(
              "The Bends",
              "1995",
              "Un álbum que consolidó a Radiohead como una de las bandas más importantes de los años 90, con temas como 'Fake Plastic Trees' y 'Street Spirit'.",
              "https://upload.wikimedia.org/wikipedia/en/5/55/Radioheadthebends.png",
              [
                "Fake Plastic Trees",
                "High and Dry",
                "Street Spirit (Fade Out)",
              ],
              [
                "https://open.spotify.com/track/7slbNf2m4Io71ZzDkl6n57",
                "https://open.spotify.com/track/5y9eA2kQQe0xE1K4qE8hKf",
                "https://open.spotify.com/track/2V1PC3NMIz7gH4FePBGslK",
              ]
            )}
            ${generateAlbumCard(
              "OK Computer",
              "1997",
              "Un álbum icónico que mezcla el rock alternativo con sonidos electrónicos. Considerado uno de los mejores álbumes de todos los tiempos.",
              "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png",
              ["Airbag", "Paranoid Android", "Karma Police"],
              [
                "https://open.spotify.com/track/5s5x7f8GSnfUv1DkUmccpN",
                "https://open.spotify.com/track/1h8aHL41rsIS4ZwF9Hko60",
                "https://open.spotify.com/track/5dUj4tW5ULInZLgbh6t9Bd",
              ]
            )}
            ${generateAlbumCard(
              "Kid A",
              "2000",
              "Este álbum marcó una nueva dirección para Radiohead, con un sonido más experimental y electrónico, alejándose del rock tradicional.",
              "https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png",
              [
                "Everything In Its Right Place",
                "The National Anthem",
                "How to Disappear Completely",
              ],
              [
                "https://open.spotify.com/track/5Xn4UwmL8z36KP6RX8DJwP",
                "https://open.spotify.com/track/0yI9B66HQfb0U4afguSxD8",
                "https://open.spotify.com/track/4eE4DPE3wExrOv4B3bnwN5",
              ]
            )}
            ${generateAlbumCard(
              "Amnesiac",
              "2001",
              "Considerado una continuación de Kid A, este álbum sigue explorando terrenos electrónicos, con una atmósfera más oscura y experimental.",
              "https://upload.wikimedia.org/wikipedia/en/8/8c/Radiohead_-_Amnesiac_cover.png",
              ["Pyramid Song", "Knives Out", "I Might Be Wrong"],
              [
                "https://open.spotify.com/track/4cZAGBX1m0gR8mRZlSTPqa",
                "https://open.spotify.com/track/6DgU6W0jqDhnMTBqYjCpGG",
                "https://open.spotify.com/track/2lOgxvHTg6S9tYOa66UhvD",
              ]
            )}
            ${generateAlbumCard(
              "Hail to the Thief",
              "2003",
              "Este álbum es una mezcla de su fase experimental y su antiguo estilo de rock, con letras políticamente cargadas.",
              "https://upload.wikimedia.org/wikipedia/en/6/61/Radioheadhailtothethief.png",
              ["2+2=5", "There There", "Go to Sleep"],
              [
                "https://open.spotify.com/track/5CC1zQL1jrA7g2tV1lURnD",
                "https://open.spotify.com/track/5fKrOtql5Xx04S2w4g1Hhn",
                "https://open.spotify.com/track/4xZtEYk9V0g2JtRUp6a5C1",
              ]
            )}
            ${generateAlbumCard(
              "The King of Limbs",
              "2011",
              "Radiohead sigue su camino experimental con un álbum más centrado en los ritmos y la repetición, con un ambiente denso y minimalista.",
              "https://upload.wikimedia.org/wikipedia/en/a/a2/Radioheadthekingoflimbs.png",
              ["Bloom", "Lotus Flower", "Codex"],
              [
                "https://open.spotify.com/track/2Bd6d7AyUkhw5B5h5pDqVR",
                "https://open.spotify.com/track/5BImK8Mo5csgmM0D43mftG",
                "https://open.spotify.com/track/2HhLTbqxy5YbmsWgtw7GSZ",
              ]
            )}
            ${generateAlbumCard(
              "In Rainbows",
              "2007",
              "In Rainbows es un álbum que se lanzó con un modelo de pago 'lo que quieras', combinando melodías suaves con complejidad emocional y sonora.",
              "https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png",
              ["15 Step", "Nude", "Reckoner"],
              [
                "https://open.spotify.com/track/7cz1rS4WgBNmY1yZlgTZqC",
                "https://open.spotify.com/track/0BOzeUA6s1pKJokRqsq7Kf",
                "https://open.spotify.com/track/3mG3V74QWqLvUlfkEwoXVi",
              ]
            )}
            ${generateAlbumCard(
              "A Moon Shaped Pool",
              "2016",
              "Con una mezcla de orquestación y minimalismo, este álbum es emotivo y atmosférico, marcando el regreso de Radiohead tras varios años de silencio.",
              "https://upload.wikimedia.org/wikipedia/en/6/6a/Amoonshapedpool.png",
              ["Burn the Witch", "Daydreaming", "True Love Waits"],
              [
                "https://open.spotify.com/track/2tDkHeugG7u0d2EjJ2MqeD",
                "https://open.spotify.com/track/4U9gXTFxxJpHh1shOCvrHz",
                "https://open.spotify.com/track/7M2iF7OPrP1cP3N9c3vqeZ",
              ]
            )}
        </div>
    `;
  } else if (section === "tourdate") {
    content.innerHTML = `
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Gira Latinoamericana</h2>
            <div class="bg-white rounded-lg shadow-lg p-6">
                <ul class="space-y-4 text-lg text-gray-700">
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Buenos Aires, Argentina</strong> - 10 de octubre de 2024</span>
                        <button class="bg-purple-600  text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Santiago, Chile</strong> - 12 de octubre de 2024</span>
                        <button class="bg-purple-600  text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Lima, Perú</strong> - 14 de octubre de 2024</span>
                        <button class="bg-purple-600  text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Ciudad de México, México</strong> - 16 de octubre de 2024</span>
                        <button class="bg-purple-600  text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Medellín, Colombia</strong> - 18 de octubre de 2024</span>
                        <button class="bg-purple-600  text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Quito, Ecuador</strong> - 20 de octubre de 2024</span>
                        <button class="bg-purple-600  text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>Asunción, Paraguay</strong> - 22 de octubre de 2024</span>
                        <button class="bg-purple-600  text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                    <li class="flex justify-between items-center transition-transform transform hover:scale-105">
                        <span><strong>La Paz, Bolivia</strong> - 24 de octubre de 2024</span>
                        <button class="bg-purple-600  text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:translate-y-1">Comprar</button>
                    </li>
                </ul>
            </div>
        `;
  } else if (section === "agregar") {
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
                <button type="button" class="w-full py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-green-500 transition duration-300" onclick="addAlbum()">Agregar</button>
            </form>
        `;
  } else if (section === "form") {
    content.innerHTML = `<h2 class="text-3xl font-bold mb-6 text-gray-800">Formulario de Contacto</h2>
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
  const card = button.closest("div");
  card.remove();
}

function addAlbum() {
    const albumName = document.getElementById("album-name").value.trim();
    const releaseYear = document.getElementById("release-year").value.trim();
    const errorMessage = document.getElementById("error-message");
    <div id="error-message" class="text-red-500"></div>

  
    // Limpiar mensaje de error
    errorMessage.textContent = '';
  
    if (!albumName || !releaseYear) {
      errorMessage.textContent = "Por favor, completa todos los campos.";
      return;
    }
  
    // Validar año (aquí podrías hacer más validaciones según sea necesario)
    if (isNaN(releaseYear) || releaseYear <= 0) {
      errorMessage.textContent = "Por favor, ingresa un año válido.";
      return;
    }
  
    const newAlbumCard = generateAlbumCard(
      albumName,
      releaseYear,
      "Descripción personalizada",
      "URL_de_imagen"
    );
    const albumList = document.getElementById("album-list");
    albumList.innerHTML += newAlbumCard;
  
    // Limpiar los campos
    document.getElementById("album-name").value = "";
    document.getElementById("release-year").value = "";
  }
  

function login() {
  alert("Login exitoso. Redirigiendo al inicio...");
  showSection("discografia");
}


function showSongs(albumTitle, songs, songLinks) {
    const content = document.getElementById('content');
    const songListHTML = songs.map((song, index) => `
        <div class="flex items-center justify-between mb-2">
            <span class="text-gray-800">${song}</span>
            <a href="${songLinks[index]}" target="_blank" class="bg-green-500 text-white font-semibold px-2 py-1 rounded hover:bg-green-600 transition duration-300">Reproducir</a>
        </div>
    `).join('');

    content.innerHTML = `
        <h2 class="text-3xl font-bold mb-6 text-gray-800">${albumTitle} - Canciones</h2>
        <div class="bg-white rounded-lg shadow-lg p-6">
            ${songListHTML}
            <button class="mt-4 bg-gray-500 text-white font-semibold px-4 py-2 rounded hover:bg-gray-600 transition duration-300" onclick="showSection('discografia')">Volver a Discografía</button>
        </div>
    `;
}

// Inicializa la sección de discografía al cargar la página
showSection('discografia');
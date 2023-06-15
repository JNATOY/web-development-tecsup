// fetch hace consultas al servidor y trae informacion
//en formato jason responden los servidores
//.then hace respuesta a una promesa
//.foreach es cada elemento de la colección

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://.github.io/web-development-tecsup/g21/semana7/alumnos-felices/json/students.json')
        .then(response => response.json())
        .then(data => {
            const studentCards = document.getElementById('studentCards');
            data.forEach(element => {
                const { name, year, photo } = element;
                studentCards.innerHTML += `
            <div class="card">
            <div class="card__body">
                <img src="${photo}" alt="${name}" width="128"
                height="128" class="card__img" />
                <h2 class="card__title">
                ${name}
                <sup>${year}</sup>
                </h2>
                <h3 class="card__subtitle">Frontend Developer, Docente</h3>
                <span class="card__subtitle"><i class="bi bi-geo-alt"></i> Lima, Perú <i class="bi bi-geo-alt"></i></span>
                <p class="card__text">
                Desarrollador Web Frontend con React y Next.js. Docente de especialización en Desarrollo Web Frontend.
                Apasionado
                del autoaprendizaje y del código limpio.
                </p>
                <ul class="list d-flex gap-5xs">
                <li class="skill">React</li>
                <li class="skill">Next.js</li>
                <li class="skill">SEO</li>
                </ul>
                <ul class="list d-flex gap-5xs">
                <li>
                    <a href="https://www.youtube.com/@elliotgaramendi">
                    <i class="bi bi-youtube icon"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/elliotgaramendi">
                    <i class="bi bi-github icon"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/elliotgaramendi/">
                    <i class="bi bi-linkedin icon"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/elliotgaramendi/">
                    <i class="bi bi-instagram icon"></i>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        `;
            })
        });
});
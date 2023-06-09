'use strict';

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/JNATOY/web-development-tecsup/main/semana7/alumnos-felices/json/alumnos.json')
        .then(response => response.json())
        .then(data => {
            const studentCards = document.getElementById('studentCards');
            data.forEach((element, index) => {
                const { photo, name, year, keywords, location, description, technologies, youtube, github, linkedin, instagram } = element;
                studentCards.innerHTML += `
        <div class="card" key=${index}>
            <div class="card__body">
            <img src="${photo }" alt="${name}" width="128"
                height="128" class="card__img" />
            <h2 class="card__title">
                ${name}
                <sup>${year}</sup>
            </h2>
            <h3 class="card__subtitle">${keywords}</h3>
            <span class="card__subtitle"><i class="bi bi-geo-alt"></i> ${location} <i class="bi bi-geo-alt"></i></span>
            <p class="card__text">
                ${description}
            </p>
            <ul class="list d-flex gap-5xs">
                <li class="skill">${technologies}</li>
            </ul>
            <ul class="list d-flex gap-5xs">
                <li>
                <a href="https://www.youtube.com/${youtube}">
                    <i class="bi bi-youtube icon"></i>
                </a>
                </li>
                <li>
                <a href="https://github.com/${github}">
                    <i class="bi bi-github icon"></i>
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/${linkedin}/">
                    <i class="bi bi-linkedin icon"></i>
                </a>
                </li>
                <li>
                <a href="https://www.instagram.com/${instagram}/">
                    <i class="bi bi-instagram icon"></i>
                </a>
                </li>
            </ul>
            </div>
        </div>
        `;
            });
        });
});

// Slider automático
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000);

// Contagem regressiva para a próxima corrida
function countdown() {
    const raceDate = new Date('July 21, 2024 15:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = raceDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");

    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeLeft < 0) {
        countdownElement.innerHTML = "Corrida em andamento!";
        countdownElement.classList.add('in-progress');  // Adiciona a classe quando a corrida estiver em andamento
    }
}

setInterval(countdown, 1000);


// Botão de "Voltar ao Topo"
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

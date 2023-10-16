const bannerSection = document.querySelector('.banner');

const textoContainer = document.createElement('div');
textoContainer.className = 'texto';

const moneyTitle = document.createElement('h2');
moneyTitle.className = 'money';
moneyTitle.textContent = 'Money Heist';

const ratingsText = document.createElement('p');
ratingsText.className = 'ratings';
ratingsText.textContent = '(4.5 Ratings)';

const sinopsisText = document.createElement('p');
sinopsisText.className = 'sinopsis';
sinopsisText.innerHTML = 'Ocho atracadores toman rehenes en la Fábrica Nacional de Moneda y Timbre española. <br> Desde el encierro, su líder manipula a la policía para llevar a cabo un ambicioso plan';

const iconosContainer = document.createElement('div');
iconosContainer.className = 'iconos';

const playIcon = document.createElement('img');
playIcon.className = 'play';
playIcon.src = 'play.png';
playIcon.alt = 'Play';

const saveIcon = document.createElement('img');
saveIcon.className = 'save';
saveIcon.src = 'save.png';
saveIcon.alt = 'Save';

const mayoresText = document.createElement('p');
mayoresText.className = 'mayores';
mayoresText.textContent = '18+';

textoContainer.appendChild(moneyTitle);
textoContainer.appendChild(ratingsText);
textoContainer.appendChild(sinopsisText);

iconosContainer.appendChild(playIcon);
iconosContainer.appendChild(saveIcon);
iconosContainer.appendChild(mayoresText);

bannerSection.appendChild(textoContainer);
bannerSection.appendChild(iconosContainer);

const movies = [
    {
        title: 'Lucifer',
        image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/lucifer-serie-tv-cartel.jpg?tf=1200x',
    },
    {
        title: 'Emily in Paris',
        image: 'https://www.moviementarios.com/wp-content/uploads/2020/09/emily-in-paris.jpg',
    },
    {
        title: 'Never have I ever',
        image: 'https://flxt.tmsimg.com/assets/p20130635_b_v12_ac.jpg'
    },
    {
        title: 'Friends',
        image: 'https://turbologo.com/articles/wp-content/uploads/2019/12/friends-logo-dots.png.webp',
    },
    {
        title: 'The Walking Dead',
        image: 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fnetflixlife.com%2Ffiles%2Fimage-exchange%2F2018%2F08%2Fie_73468.jpeg',
    },
    {
        title: 'Naruto',
        image: 'https://es.web.img3.acsta.net/c_310_420/pictures/13/12/13/08/50/378271.jpg',
    },
    {
        title: 'My little pony',
        image: 'https://es.web.img3.acsta.net/pictures/14/02/18/13/14/229865.jpg',
    },
];

const recommendedSection = document.querySelector('.recommended');

const recomendadosContainer = document.createElement('div');
recomendadosContainer.className = 'recomendados';

movies.forEach((movie, index) => {

    const recomendadoItem = document.createElement('div');
    recomendadoItem.className = 'recomendado';

    const movieImage = document.createElement('img');
    movieImage.className = `movie-${index}`;
    movieImage.src = movie.image;
    movieImage.alt = '';

    const ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating';

    for (let i = 5; i >= 1; i--) {
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = `rating${index + 1}-${i}`;
        radioInput.name = `rating${index + 1}`;
        radioInput.value = i;

        const label = document.createElement('label');
        label.htmlFor = `rating${index + 1}-${i}`;
        label.innerHTML = '&#9733;';

        ratingContainer.appendChild(radioInput);
        ratingContainer.appendChild(label);
    }

    const guardarButton = document.createElement('button');
    guardarButton.className = 'guardar';

    const bookmarkIcon = document.createElement('i');
    bookmarkIcon.className = 'fa-regular fa-bookmark';
    bookmarkIcon.style.color = '#ffa500';

    guardarButton.appendChild(bookmarkIcon);

    recomendadoItem.appendChild(movieImage);
    recomendadoItem.appendChild(ratingContainer);
    recomendadoItem.appendChild(guardarButton);

    recomendadosContainer.appendChild(recomendadoItem);
});

recommendedSection.appendChild(recomendadosContainer);

const trendingImages = [
    'https://images.cdn3.buscalibre.com/fit-in/360x360/24/48/2448999665b4a39225d284c21b7d9f50.jpg',
    'https://pics.filmaffinity.com/lucy-170037491-large.jpg',
    'https://i.blogs.es/6a39f9/elite-4-temporada-cartel/450_1000.jpeg',
    'https://www.ecartelera.com/carteles/14000/14041/001_m.jpg',
    'https://pics.filmaffinity.com/El_proyecto_Adam-982692706-large.jpg',
    'https://pics.filmaffinity.com/No_mires_arriba-492729563-large.jpg',
    'https://image.cdn1.buscalibre.com/16563.__RS360x360__.jpg',
    'https://play-lh.googleusercontent.com/1H1_g_05R_OKNdiQgxTxrnHSUp4001Dxwo-Ti_PBDFK_JwBXXjyAxPfLM59Aj8wNqAmV'
];

// Obtén el elemento del documento donde deseas agregar la sección de trending
const trendingContainer = document.querySelector('.trending');


trendingImages.forEach(imageSrc => {
    const trendingImage = document.createElement('img');
    trendingImage.src = imageSrc;
    trendingContainer.appendChild(trendingImage);
});

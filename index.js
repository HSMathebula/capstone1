const mobileBtn = document.getElementById('mobileMenu');

const nav = document.querySelector('.nav-list');

const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

nav.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

// Read more btn
const moreText = document.getElementById('more');
const toggle = document.getElementById('toggle');

function ReadMore() {
    if (moreText.style.display !== 'none') {
        toggle.innerHTML = 'MORE';
        moreText.style.display = 'none';
      } else {
        toggle.innerHTML = 'LESS';
        moreText.style.display = 'block';
      }
}

ReadMore();

//dynamic page
const speakersObj1 = [
    {
        Image: 'images/speaker1.jpg',
        name: 'Jack Maphosa',
        caption: 'I have 20 years of expiriance in web development and 2 years teaching it.',
        discription: 'I teach javaScript and react all over the world via this platform everyday exept on weekends.'
    },

    {
        Image: 'images/speaker1.jpg',
        name: 'Jack Maphosa',
        caption: 'I have 20 years of expiriance in web development and 2 years teaching it.',
        discription: 'I teach javaScript and react all over the world via this platform everyday exept on weekends.'
    }
];

const section = document.querySelector('#dynamic-page');
speakersObj1.forEach((speaker1) => {
    const div = document.createElement('div');
    div.className = 'speak';
    div.innerHTML = `
        <img src="${speaker1.Image}" alt="first speaker">

        <div>
            <p>${speaker1.name}</p>
            <cite>${speaker1.caption}</cite>
        </div>

        <div>
            <blockquote>${speaker1.discription}</blockquote>
        </div>
    `;
});

speakersObj1.forEach((speaker1) => {
    window.addEventListener('load', () => {
        const popUpSection = document.createElement('section');
        popUpSection.classList.add('col-md-6', 'col-lg-6');
        popUpSection.innerHTML = `
            <div class="speakers">
                <div class="speak-cont col-4">
                    <img src="${speaker1.Image}" alt="first speaker" class="speakers-img">
                </div>
                <div class="col-8">
                    <div class="box">
                        <p class="speaker-name">${speaker1.name}</p>
                        <cite class="speaker-cap">${speaker1.caption}</cite>
                    </div>
                    <hr class="grey-line">
                    <div class="box1">
                        <blockquote class="speaker-desc">${speaker1.discription}</blockquote>
                    </div>
                </div>
            </div>
        `;

        section.appendChild(popUpSection);
    });
});

const speakersObjMore = [
    {
        Image: 'images/speaker1.jpg',
        name: 'Jack Maphosa',
        caption: 'I have 20 years of expiriance in web development and 2 years teaching it.',
        discription: 'I teach javaScript and react all over the world via this platform everyday exept on weekends.'
    },

    {
        Image: 'images/speaker1.jpg',
        name: 'Jack Maphosa',
        caption: 'I have 20 years of expiriance in web development and 2 years teaching it.',
        discription: 'I teach javaScript and react all over the world via this platform everyday exept on weekends.'
    },

    {
        Image: 'images/speaker1.jpg',
        name: 'Jack Maphosa',
        caption: 'I have 20 years of expiriance in web development and 2 years teaching it.',
        discription: 'I teach javaScript and react all over the world via this platform everyday exept on weekends.'
    },

    {
        Image: 'images/speaker1.jpg',
        name: 'Jack Maphosa',
        caption: 'I have 20 years of expiriance in web development and 2 years teaching it.',
        discription: 'I teach javaScript and react all over the world via this platform everyday exept on weekends.'
    }
];

const section2 = document.querySelector('#more');
speakersObjMore.forEach((speaker1) => {
    const div = document.createElement('div');
    div.className = 'speak';
    div.innerHTML = `
        <img src="${speaker1.Image}" alt="first speaker">

        <div>
            <p>${speaker1.name}</p>
            <cite>${speaker1.caption}</cite>
        </div>

        <div>
            <blockquote>${speaker1.discription}</blockquote>
        </div>
    `;
});

speakersObjMore.forEach((speaker1) => {
    window.addEventListener('load', () => {
        const popUpSection = document.createElement('section');
        popUpSection.classList.add('col-md-6', 'col-lg-6');
        popUpSection.innerHTML = `
            <div class="speakers">
                <div class="speak-cont col-4">
                    <img src="${speaker1.Image}" alt="first speaker" class="speakers-img">
                </div>
                <div class="col-8">
                    <div class="box">
                        <p class="speaker-name">${speaker1.name}</p>
                        <cite class="speaker-cap">${speaker1.caption}</cite>
                    </div>
                    <hr class="grey-line">
                    <div class="box1">
                        <blockquote class="speaker-desc">${speaker1.discription}</blockquote>
                    </div>
                </div>
            </div>
        `;

        section2.appendChild(popUpSection);
    });
});
const instaItem = document.querySelector(".instagram__data");
const numberOfContainers = 15;

for (let i = 0; i < numberOfContainers; i++) {
    const container = document.createElement("div");
    container.classList.add("insta-foto");
    instaItem.appendChild(container);
}

document.addEventListener("DOMContentLoaded", function () {
    const instaItem = document.querySelector(".instagram__data");
    const showMoreBtn = document.querySelector(".instagram__button");
    const instaItems = instaItem.querySelectorAll(".insta-foto");
    let itemsPerPage = 5;

    function hideItems() {
        instaItems.forEach((item, index) => {
            if (index >= itemsPerPage) {
                item.style.display = "none";
            }
        });
    }

    hideItems();

    showMoreBtn.addEventListener("click", function () {
        console.log("hi");
        if (showMoreBtn.textContent === "показать ещё") {
            instaItems.forEach((item, index) => {
                if (index >= itemsPerPage) {
                    item.style.display = "block";
                }
            });
            showMoreBtn.textContent = "скрыть элементы";
        } else {
            hideItems();
            showMoreBtn.textContent = "показать ещё";
        }
    });
});
//====================заполни анкету mobil========
window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.anketa-btn');
    var vacancyBlock = document.querySelector('.vacancy');
    
    if (window.innerWidth <= 767) { 
        if (window.scrollY >= vacancyBlock.offsetTop) { 
            scrollButton.style.display = 'block'; 
        } else {
            scrollButton.style.display = 'none'; 
        }
    }
});

window.addEventListener('resize', function() {
    var scrollButton = document.getElementById('scrollButton');
    if (window.innerWidth > 767) { 
        scrollButton.style.display = 'none'; 
    }
});
//====================Swiper======================

//---------------------preview-------------------
const openBlock = document.querySelector(".open");
const btnInOpen = openBlock.querySelectorAll(".swiper-btn");

btnInOpen.forEach((btn) => {
    btn.addEventListener("click", () => {
        btnInOpen.forEach((el) => {
            el.classList.remove("swiper-btn-active");
        });
        btn.classList.add("swiper-btn-active");
    });
});
var mySwiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    initialSlide: 0,
    navigation: {
        nextEl: ".swiper-button-nex",
        prevEl: ".swiper-button-pre",
    },
    loop: true,
});

//----------------profession---------------------
function getSlidesPerView() {
    const screenWidth = window.innerWidth;
    const slideElement = document.querySelector(".swiper");

    if (screenWidth >= 1280) {
        return screenWidth / 375;
    } else if (screenWidth >= 768) {
        return screenWidth / 340;
    } else {
        return screenWidth / 260;
    }
}

const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    slidesPerView: getSlidesPerView(),
    spaceBetween: 35,
    centeredSlides: function () {
        if (window.innerWidth < 768) return true;
        else return false;
    },
    initialSlide: 1,
    navigation: {
        nextEl: ".swiper-button-nex-vac",
        prevEl: ".swiper-button-pre-vac",
    },
});

// Обработчик события resize для обновления количества карточек при изменении размеров окна
window.addEventListener("resize", function () {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.params.centeredSlides = window.innerWidth <= 768;
    swiper.update();
});

const fotoElements = document.querySelectorAll(".swiper-slide");
fotoElements.forEach((foto) => {
    foto.addEventListener("click", function () {
        const isActive = this.classList.contains("swiper-slide--active");
        fotoElements.forEach((el) =>
            el.classList.remove("swiper-slide--active")
        );
        if (!isActive) {
            this.classList.add("swiper-slide--active");
        }
    });
});
const vacancyBlock = document.querySelector(".vacancy");
const btnInVacancy = vacancyBlock.querySelectorAll(".swiper-btn");

btnInVacancy.forEach((btn) => {
    btn.addEventListener("click", () => {
        btnInVacancy.forEach((el) => {
            el.classList.remove("swiper-btn-active");
        });
        btn.classList.add("swiper-btn-active");
    });
});
// ======================modal================================
var modal = document.querySelector(".modal");
var btn = document.querySelector(".copirite__politic");
var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    const contentHeight = modalContent.contentHeight;
    modalContent.scrollTop = 0;
    modalContent.style.height = `${contentHeight}px`;
    console.log(contentHeight, "contentHeight");
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
    modalContent.style.height = "auto";
}

btn.onclick = function () {
    openModal();
};

span.onclick = function () {
    closeModal();
};

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

const modalContent = document.querySelector(".modal");
const titleElement = modalContent.querySelector(".content__title");

function handleScroll() {
    const scrollPosition = modalContent.scrollTop;
    console.log(scrollPosition, "scrollPosition");

    const titleRect = titleElement.getBoundingClientRect();
    console.log(titleRect, "titleRect");
    // Если верхний край заголовка находится за пределами видимой области модального окна
    if (titleRect.y < 0) {
        // Фиксируем заголовок и меняем размер шрифта
        titleElement.classList.add("fixed-title");
    } else {
        // Если заголовок вновь видим, возвращаем исходные стили
        titleElement.classList.remove("fixed-title");
    }
}

modalContent.addEventListener("scroll", handleScroll);

//=======================map============================
const urBtn = document.querySelector(".ur-btn");
const fizBtn = document.querySelector(".fiz-btn");
const allBtn = document.querySelector(".all-btn");

let groups = {
    items: [
        {
            center: [55.780504, 37.532737],
            name: "физлица",
        },
        {
            center: [55.75703, 37.55337],
            name: "физлица",
        },
        {
            center: [55.759838, 37.643207],
            name: "физлица",
        },
        {
            center: [55.736967, 37.657434],
            name: "физлица",
        },
        {
            center: [55.765926, 37.695594],
            name: "физлица",
        },
        {
            center: [55.753219, 37.576485],
            name: "юрлица",
        },
        {
            center: [55.752124, 37.616856],
            name: "юрлица",
        },
        {
            center: [55.771664, 37.603262],
            name: "юрлица",
        },
        {
            center: [55.764624, 37.654699],
            name: "юрлица",
        },
        {
            center: [55.735489, 37.689562],
            name: "юрлица",
        },
    ],
};

let map;
let collection;
ymaps.ready(initMap);
function initMap() {
    map = new ymaps.Map(
        "myMap",
        {
            center: [55.755864, 37.617698],
            zoom: 14,
        },
        {
            searchControlProvider: "yandex#search",
        }
    );

    collection = new ymaps.GeoObjectCollection();
    map.geoObjects.add(collection);

    addPlacemarks();
}

function addPlacemarks() {
    collection.removeAll();

    for (let j = 0; j < groups.items.length; j++) {
        let item = groups.items[j];
        let placemark = new ymaps.Placemark(
            item.center,
            { balloonContent: item.name },
            {
                iconLayout: "default#image",
                iconImageHref: "images/mark.svg",
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -15],
            }
        );
        collection.add(placemark);
    }
}

function showFiz() {
    collection.removeAll();
    urBtn.classList.remove("filter-btn-active");
    allBtn.classList.remove("filter-btn-active");
    fizBtn.classList.add("filter-btn-active");
    for (let j = 0; j < groups.items.length; j++) {
        let item = groups.items[j];
        if (item.name === "физлица") {
            let placemark = new ymaps.Placemark(
                item.center,
                { balloonContent: item.name },
                {
                    iconLayout: "default#image",
                    iconImageHref: "images/mark.svg",
                    iconImageSize: [30, 30],
                    iconImageOffset: [-15, -15],
                }
            );
            collection.add(placemark);
        }
    }
}

function showUr() {
    collection.removeAll();
    fizBtn.classList.remove("filter-btn-active");
    allBtn.classList.remove("filter-btn-active");
    urBtn.classList.add("filter-btn-active");
    for (let j = 0; j < groups.items.length; j++) {
        let item = groups.items[j];
        if (item.name === "юрлица") {
            let placemark = new ymaps.Placemark(
                item.center,
                { balloonContent: item.name },
                {
                    iconLayout: "default#image",
                    iconImageHref: "images/mark.svg",
                    iconImageSize: [30, 30],
                    iconImageOffset: [-15, -15],
                }
            );
            collection.add(placemark);
        }
    }
}

function showAll() {
    fizBtn.classList.remove("filter-btn-active");
    urBtn.classList.remove("filter-btn-active");
    allBtn.classList.add("filter-btn-active");
    addPlacemarks();
}

allBtn.addEventListener("click", showAll);
urBtn.addEventListener("click", showUr);
fizBtn.addEventListener("click", showFiz);

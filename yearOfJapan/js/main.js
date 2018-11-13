/**
 * Скрипт анимации предзагрузки
 */
const hellopreloader = document.getElementById("preloadShow");

function fadeOut(el) {
    el.style.opacity = "1";
    let interhellopreloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            hellopreloader.style.display = "none";
        }
    }, 16);
}

//Скрытие блоков предзагрузки
window.onload = function () {
    setTimeout(function () {
        fadeOut(hellopreloader);
        //но минимимум, через 2 секунды
    }, 2000);
};
document.body.style.overflowX = 'hidden';

/**
 * Нужный нам блок с анимацией
 * @type {Element}
 */
const elementAnimation = document.querySelector('#hoverThree');

/**
 * Функция анимации при достижении скролом определенной позиции
 * @param hover
 * @constructor
 */
const Visible = function (hover) {
    document.body.style.overflowX = 'hidden';
    // Все позиции элемента
    const targetPosition = {
            top: window.pageYOffset + hover.getBoundingClientRect().top,
            left: window.pageXOffset + hover.getBoundingClientRect().left,
            right: window.pageXOffset + hover.getBoundingClientRect().right,
            bottom: window.pageYOffset + hover.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        document.getElementById('lake').classList.add('lake');
        document.getElementById('mountainOne').style.transform = 'translate(0px, 0px)';
        document.getElementById('mountainTwo').style.transform = 'translate(0px, 0px)';
        document.getElementById('mountainThree').style.transform = 'translate(0px, 0px)';
        document.getElementById('mountainFour').style.transform = 'translate(0px, 0px)';
        document.getElementById('mountainFive').style.transform = 'translate(0px, 0px)';
        document.getElementById('sun').style.transform = 'translate(0px, 80px)';
    } else {
        // Если элемент не видно, то запускаем этот код
        document.getElementById('lake').classList.remove('lake');
        document.getElementById('mountainOne').style.transform = 'translate(275px, 0px)';
        document.getElementById('mountainTwo').style.transform = 'translate(375px, 0px)';
        document.getElementById('mountainThree').style.transform = 'translate(475px, 0px)';
        document.getElementById('mountainFour').style.transform = 'translate(575px, 0px)';
        document.getElementById('mountainFive').style.transform = 'translate(675px, 0px)';
        document.getElementById('sun').style.transform = 'translate(0px, 180px)';
    }
};

/**
 * Обрабатываем скролл страницы, для выполнения анимированного блока
 */
window.addEventListener('scroll', function () {
    Visible(elementAnimation);
    showMenu();
    console.log(pageYOffset);
});
//проверям, вдруг мы уже на анимированном блоке
Visible(elementAnimation);

/**
 * Появление меню сверху, после начала прокрутки страницы
 */
function showMenu() {
    var top = window.pageYOffset;
    if (top > 60) {
        document.getElementById('menu').style.position = 'fixed';
        document.getElementById('menu').style.opacity = '0.9';
        document.getElementById('menu').style.width = '100vw';
        document.getElementById('menu').style.zIndex = '3';
    } else {
        document.getElementById('menu').style.position = 'relative';
        document.getElementById('menu').style.opacity = '0.9';
        document.getElementById('menu').style.width = '100vw';
        document.getElementById('menu').style.zIndex = '2';
    }
}

/**
 * обработка нажатия на кнопку "Узнать подробнее"
 */
function showDeveloperInfo() {
    document.getElementById('developerInfo').style.display = 'flex';
    document.getElementById('developerInfo').style.opacity = '1';
}

/**
 * вспомогательные элементы
 */
var c; //позиция скрола
var timerId; //состояние прокрутки страницы
var visibleMenu = false; //состояние выпадающего меню

/**
 * переключение состояния меню
 */
function showAdaptieMenu() {
    if (!visibleMenu) {
        document.getElementById('menuItems').style.display = 'flex';
        document.getElementById('menu').style.flexDirection = 'column';
        document.getElementById('menu').style.alignItems = 'center';
        visibleMenu = true;
    }
    else {
        hideMenu();
    }
}

function hideMenu() {
    document.getElementById('menuItems').style.display = 'none';
    document.getElementById('menu').style.flexDirection = 'row';
    document.getElementById('menu').style.alignItems = 'baseline';
    visibleMenu = false;
}

/**
 * Позиции всех ключевых тем
 * @type {number}
 */
var oneModule = document.getElementById('oneModule').getBoundingClientRect().y - 50;
var twoModule = document.getElementById('twoModule').getBoundingClientRect().y - 50;
var threeModule = document.getElementById('threeModule').getBoundingClientRect().y - 50;
var fourModule = document.getElementById('fourModule').getBoundingClientRect().y - 50;
var fiveModule = document.getElementById('fiveModule').getBoundingClientRect().y - 50;
var menuItems = document.getElementById('menuItems');
function showTheme(num) {
    /**
     * если было открыто меню, закрываем
     */
    if (getComputedStyle(menuItems).flexDirection == 'column') {
        hideMenu();
    }
    switch (num) {
        case 1:
            c = window.pageYOffset;
            console.log(c);
            if (c >= oneModule) {
                timerId = setInterval(function () {
                    if (c >= oneModule) {
                        c -= 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            } else if (c <= oneModule) {
                timerId = setInterval(function () {
                    if (c <= oneModule) {
                        c += 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            }
            break;
        case 2:
            c = window.pageYOffset;
            if (c >= twoModule) {
                timerId = setInterval(function () {
                    if (c >= twoModule) {
                        c -= 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            } else if (c <= twoModule) {
                timerId = setInterval(function () {
                    if (c <= twoModule) {
                        c += 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            }
            break;
        case 3:
            c = window.pageYOffset;
            if (c >= threeModule) {
                timerId = setInterval(function () {
                    if (c >= threeModule) {
                        c -= 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            } else if (c <= threeModule) {
                timerId = setInterval(function () {
                    if (c <= threeModule) {
                        c += 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            }
            break;
        case 4:
            c = window.pageYOffset;
            if (c >= fourModule) {
                timerId = setInterval(function () {
                    if (c >= fourModule) {
                        c -= 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            } else if (c <= fourModule) {
                timerId = setInterval(function () {
                    if (c <= fourModule) {
                        c += 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            }
            break;
        case 5:
            c = window.pageYOffset;
            if (c >= fiveModule) {
                timerId = setInterval(function () {
                    if (c >= fiveModule) {
                        c -= 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            } else if (c <= fiveModule) {
                timerId = setInterval(function () {
                    if (c <= fiveModule) {
                        c += 20;
                        window.scrollTo(0, c);
                    } else {
                        clearInterval(timerId);
                    }
                }, 1000 / 120);
            }
            break;
    }
}
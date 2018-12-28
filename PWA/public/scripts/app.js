(function () {
    'use strict';

    /**
     * Надстройка для офлайн режима
     */
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function () {
                console.log('Service Worker Registered');
            });
    }


    /**
     * Шаблон стартовой страницы
     */
    Vue.component('starter-page', {
        // language = HTML
        template: `
            <div class="login-dark">
                <div class="form">
                    <h2 class="sr-only">Login Form</h2>
                    <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
                    <div class="form-group"><input id="username" class="form-control" type="text" name="name" placeholder="Введите ваше имя"></div>
                    <button class="btn btn-primary btn-block" v-on:click="handleClick()">Готово!</button>
                </div>
            </div>
        `,
        methods: {
            handleClick() {
                this.$emit('click')
            }
        }
    });

    Vue.component('main-page', {
        // language = HTML
        template: `
            <div class="wrapper">
            <!-- Sidebar Holder -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Меню</h3>
                    <strong><img src="../images/money.png" alt="логотип"></strong>
                </div>

                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                            <i class="glyphicon glyphicon-home"></i>
                            Главная
                        </a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">История операций</a></li>
                            <li><a href="#">Настройки</a></li>
                            <li><a href="#">Модули</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="glyphicon glyphicon-briefcase"></i>
                            Подробнее
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="glyphicon glyphicon-link"></i>
                            Портфолио
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
            <!-- Page Content Holder -->
        `,
        methods: {
            handleClick() {
                this.$emit('click')
            }
        }
    });

    /**
     * Главная функция
     */
    var app = new Vue({
        el: '#app',
        data: {
            username: localStorage.getItem("username"),
        },
        methods: {
            /**
             * Функция получения введенного имени
             */
            toggleMessage() {
                let name = $('#username').val();
                localStorage.setItem("username", name);
                this.username = name;
            },
            showMenu() {
                $('#sidebar').toggleClass('active');
                $('#sidebarCollapse').toggleClass('is-closed is-open');
                $('#navbar').toggleClass('closed open');
            }
        }
    });

})();

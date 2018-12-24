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
            <div class="row">
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text"><span class="card-title">Добро пожаловать в копилку!</span>
                        </div>
                    </div>
                    <div> Введите ваше имя. <label> <input type="text" class="validate center" id="username"> </label>
                        <button class="waves-effect waves-light btn-large" id="button" type="button" name="button"
                                @click="handleClick">
                            Готово
                        </button>
                    </div>
                </div>
            </div>
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
            }
        }
    });


})();

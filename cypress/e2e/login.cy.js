describe('Проверка авторизации', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
     })

     it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('gern@dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio69'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
    })

     it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
    })

    it('Проверка востановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#forgotEmailButton').click(); // Нажал восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю текст на совпадение
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
    })
 }) 
describe('Тестирование покемонов', function () {
   it('длинный автотест на покупку нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('leve@live.ru');
        cy.get('#password').type('Bu32vg69.');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();

        // Попробуйте выполнить клик на первой кнопке .shop__button
        cy.get(':nth-child(1) > .shop__button').click().then(() => {
          // Если клик выполнится успешно, продолжите выполнение шагов после него
          cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
          cy.get(':nth-child(1) > .pay_base-input-v2').type('2024/12');
          cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
          cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('LEV LOBANOV');
          cy.get('.pay-btn').click();
          cy.get('#cardnumber').type('56456');
          cy.get('.payment__submit-button').click();
          cy.contains('Покупка прошла успешно').should('be.visible');
        }).catch((error) => {
          // Если клик на первой кнопке завершится неуспешно, замените его кликом на второй кнопке
          cy.get(':nth-child(2) > .shop__button').click().then(() => {
            // Выполните оставшиеся шаги после клика на второй кнопке
            cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
            cy.get(':nth-child(1) > .pay_base-input-v2').type('2024/12');
            cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
            cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('LEV LOBANOV');
            cy.get('.pay-btn').click();
            cy.get('#cardnumber').type('56456');
            cy.get('.payment__submit-button').click();
            cy.contains('Покупка прошла успешно').should('be.visible');
          }).catch((error) => {
            // Если клик на второй кнопке также завершится неуспешно, обработайте ошибку
            console.error('Клик на кнопке .shop__button не выполнен успешно:', error);
            // Вызовите `throw error`, чтобы передать ошибку выше и остановить выполнение теста
            throw error;
          });
        });
    })
})

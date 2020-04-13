/// <reference types="Cypress" />
describe('BOSS自动化测试', function () {
    it('登陆测试', function () {
        cy.visit('/login.html');
        cy.get('input[placeholder="请输入用户名"]').type('bosstest4');
        cy.get('input[placeholder="请输入密码"]').type('Boss789');
        cy.get('button').contains('登录').click();
    })
})

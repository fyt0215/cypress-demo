import { cascaderSelect, dropDownSelectByLabel, region, autocompleteByLabel, datetimeByLabel, popperSelect } from '../../../../common';
import { login } from '../../login/login-api.spec';

const parentId = '#addSource'

describe('资源-资源管理', function () {
    it('资源池', function () {
        login();
        cy.visit('/')
        cy.contains('资源').click();
        cy.contains('资源管理').click();
        cy.contains('资源池').click();
        cy.wait(1000)
        cy.contains('查询').click();
        cy.get('.el-table').find('.el-table__body-wrapper')
            .find('tbody').find('tr').children()
            .first().next().next().find('.color_zlf').click();
    })
})
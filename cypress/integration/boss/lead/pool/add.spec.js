/// <reference types="Cypress" />

import { cascaderSelectByLabel, dropDownSelectByLabel, region, autocompleteByLabel, datetimeByLabel, popperSelect, entryTable } from '../../../../common';
import { login } from '../../login/login-api.spec';

const selectorId = '#addSource'

describe('资源-资源管理', function () {
    it('资源池', function () {
        login();
        cy.visit('/')
        cy.contains('资源').click();
        cy.contains('资源管理').click();
        cy.contains('资源池').click();
        cy.wait(1000)
        cy.contains('查询').click();

        cy.get('.handleBtnGroup').children().last().click();
        cy.get('input[placeholder="请输入准学员姓名"]').type('zhangsan');
        cy.get('input[placeholder="请输入联系方式"]').type('15617565467');

        cascaderSelectByLabel(selectorId, '来源渠道 :', [1, 0, 0])
        cy.wait(500);
        for (const item of ['活动标签 :', '在读年级 :', '意向校区 :', '意向产品 :', '意向学科 :']) {
            dropDownSelectByLabel(selectorId, item)
        }

        autocompleteByLabel(selectorId, '在读学校 :')
        cy.get(selectorId).contains('男孩').click();
        datetimeByLabel(selectorId, '学员生日 :');

        region(selectorId, '家庭住址 :');
        let tInput = new Array(5).fill('input');
        tInput[1] = 'select';
        entryTable(selectorId, tInput);
        cy.contains('添加家长').click();
        entryTable(selectorId, tInput, 1);
        cy.contains('添加家长').click();
        entryTable(selectorId, tInput, 2);
        cy.get(selectorId).contains('仅保存').click();
    })
})
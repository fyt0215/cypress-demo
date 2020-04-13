
/**
 * 下拉框展开元素
 * @param {*} index 选中第几个 默认值为0
 */
export function popperSelect(index = 0) {
    cy.get('body')
        .children().last().find('ul') // 获取到 ul
        .children().eq(index) // 获取到指定的li
        .click()
}

export function popperCascader(index = 0) {
    cy.get('body')
        .children().last() // 获取到 popper
        .children().last() // 获取到 ul
        .children().eq(index) // 获取到指定的li
        .click()
}

export function getInputByLabel(selector, label) {
    cy.get(selector).contains(label).next().click();
}

export function dropDownSelectByLabel(selector, label, index = 0) {
    getInputByLabel(selector, label);
    popperSelect(index);
}

export function cascaderSelectByLabel(selector, label, arr = [1]) {
    getInputByLabel(selector, label);
    for (const item of arr) {
        popperCascader(item);
    }
}

export function region(selector, label, items = [8, 0, 1]) {
    for (const index in items) {
        cy.get(selector).contains(label).next().children()
            .find('input').eq(index).click();
        popperSelect(items[index]);
    }
    cy.get(selector).contains(label).next().children()
        .find('input').eq(3).type('申通信息广场10楼')
}

export function autocompleteByLabel(parentId, label) {
    cy.get(parentId).contains(label).next().find('input').type('上海');
    cy.wait(500);
    popperSelect();
}

export function datetimeByLabel(selector, label) {
    getInputByLabel(selector, label);
    cy.get('body').children().last().contains('14').click();
}

export function entryTable(parentId, types, trIndex = 0) {
    types.forEach((item, index) => {
        var el = cy.get(parentId)
            .find('.el-table')
            .find('tbody')
            .children().eq(trIndex)
            .children().eq(index).find('input');
        if (item === 'select') {
            el.click();
            popperSelect(trIndex);
        } else if (item === 'input') {
            el.type(Math.random().toString(36).slice(-8))
        }
    })
}
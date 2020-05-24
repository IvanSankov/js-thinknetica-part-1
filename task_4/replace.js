//Создать функцию, которая будет принимать HTML элемент и объект.


/**
 * Функция заменяет дата аттрибуты во всех дочерних элементах htmlElement на значения из map
 *
 * @param {HTMLElement} htmlElement
 * @param {Object} map
 */
function parseTemplate(htmlElement, map) {
    let field = htmlElement.dataset['field'];
    if (field) {
        if (!(field in map)) {
            throw new Error(`${field} not exit in map object`);
        }

        htmlElement.textContent = map[field];
    }

    let children = htmlElement.children;
    if (children) {
        Array.from(htmlElement.children).forEach(elem => parseTemplate(elem, map))
    }
}
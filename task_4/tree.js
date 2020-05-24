// Вывести в консоль иерархическую структуру документа,

/**
 * Рекурсивная функция, возвращающая дерево узлов (nodes) из DOM
 *
 * @param {Node} node
 * @param counter
 * @return {VoidFunction}
 */
function tree1(node, counter = 1) {
    console.log(Array(counter).join(' ') + node.nodeName);
    if (node.childNodes.length === 0) {
        return;
    }

    for (let child of node.childNodes) {
        tree1(child, counter + 2);
    }
}

// Раскомментируйте следующую строку, для проверки функции tree1
// tree1(document.documentElement, 1);


/**
 * Рекурсивная функция, возвращающая дерево узлов (nodes) из DOM
 *
 * @param {Node} node
 * @param counter
 * @return {VoidFunction}
 */
function tree2(node, counter = 0) {
    console.log(Array(counter).join(' ') + node.nodeName);
    let currNode = node.firstChild;
    if (!currNode) {
        return;
    }

    do {
        tree2(currNode, counter + 2);
        currNode = currNode.nextSibling;
    } while (currNode);
}

// Раскомментируйте следующую строку, для проверки функции tree2
// tree2(document.documentElement, 1);


// Не знаю правда, насколько такая функция "легальна", по сути это tree1, только бежим не for .. of .., а через forEach
/**
 * Рекурсивная функция, возвращающая дерево узлов (nodes) из DOM
 *
 * @param {Node} node
 * @param counter
 * @return {VoidFunction}
 */
function tree3(node, counter = 1) {
    console.log(Array(counter).join(' ') + node.nodeName);
    if (node.childNodes.length === 0) {
        return;
    }

    Array.from(node.childNodes).forEach(child => tree3(child, counter + 2));
}

// Раскомментируйте следующую строку, для проверки функции tree3
//tree3(document.documentElement, 1);